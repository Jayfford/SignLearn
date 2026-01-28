import React, { useMemo } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav';
import { useCart } from '../components/CartContext';
import { PALETTE, formatPeso, getProductById } from '../lib/marketplaceData';

export default function Cart() {
  const router = useRouter();
  const cart = useCart();

  const detailed = useMemo(() => {
    return cart.items
      .map((x) => {
        const p = getProductById(x.id);
        if (!p) return null;
        return { ...x, product: p, lineTotal: p.price * x.qty };
      })
      .filter(Boolean);
  }, [cart.items]);

  const total = detailed.reduce((acc, x) => acc + x.lineTotal, 0);

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel="Go back"
            style={styles.backButton}
          >
            <Text style={styles.backEmoji}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Cart</Text>
          <View style={styles.spacer} />
        </View>

        {detailed.length === 0 ? (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Your cart is empty</Text>
            <Text style={styles.cardText}>
              Add learning products from the Marketplace to see them here.
            </Text>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => router.push('/marketplace')}
            >
              <Text style={styles.secondaryButtonText}>Go to Marketplace</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {detailed.map((x) => (
              <View key={x.id} style={styles.itemCard}>
                <View style={styles.itemLeft}>
                  <View style={styles.itemEmojiWrap}>
                    <Text style={styles.itemEmoji}>{x.product.imageEmoji}</Text>
                  </View>
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemName} numberOfLines={2}>
                      {x.product.name}
                    </Text>
                    <Text style={styles.itemMeta}>
                      {x.product.emoji} Qty {x.qty}
                    </Text>
                  </View>
                </View>
                <View style={styles.itemRight}>
                  <Text style={styles.itemPrice}>{formatPeso(x.lineTotal)}</Text>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => cart.remove(x.id)}
                    accessibilityRole="button"
                    accessibilityLabel="Remove from cart"
                  >
                    <Text style={styles.removeEmoji}>✕</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}

            <View style={styles.summaryCard}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Total</Text>
                <Text style={styles.summaryValue}>{formatPeso(total)}</Text>
              </View>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={() => cart.clear()}
                accessibilityRole="button"
                accessibilityLabel="Clear cart"
              >
                <Text style={styles.primaryButtonText}>Clear cart</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: PALETTE.bg,
  },
  container: {
    paddingHorizontal: 18,
    paddingTop: 54,
    paddingBottom: 90,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: PALETTE.surface,
    borderWidth: 1,
    borderColor: PALETTE.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backEmoji: {
    fontSize: 18,
    color: PALETTE.text,
    fontWeight: '900',
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: PALETTE.text,
  },
  spacer: {
    width: 40,
    height: 40,
  },
  card: {
    marginTop: 6,
    backgroundColor: PALETTE.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: PALETTE.border,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: PALETTE.text,
    marginBottom: 6,
  },
  cardText: {
    fontSize: 13,
    lineHeight: 19,
    color: PALETTE.text2,
  },
  secondaryButton: {
    marginTop: 12,
    backgroundColor: PALETTE.chip,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: PALETTE.border,
    paddingVertical: 12,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: '900',
    color: PALETTE.text,
  },
  itemCard: {
    marginTop: 10,
    backgroundColor: PALETTE.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: PALETTE.border,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
    paddingRight: 10,
  },
  itemEmojiWrap: {
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: PALETTE.surface2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: PALETTE.border,
  },
  itemEmoji: {
    fontSize: 22,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '900',
    color: PALETTE.text,
    lineHeight: 18,
  },
  itemMeta: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: '700',
    color: PALETTE.text2,
  },
  itemRight: {
    alignItems: 'flex-end',
    gap: 10,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '900',
    color: PALETTE.text,
  },
  removeButton: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: PALETTE.surface2,
    borderWidth: 1,
    borderColor: PALETTE.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeEmoji: {
    fontSize: 14,
    color: PALETTE.text2,
    fontWeight: '900',
  },
  summaryCard: {
    marginTop: 12,
    backgroundColor: PALETTE.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: PALETTE.border,
    padding: 14,
    marginBottom: 6,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 13,
    fontWeight: '900',
    color: PALETTE.text2,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: '900',
    color: PALETTE.text,
  },
  primaryButton: {
    backgroundColor: PALETTE.chipActive,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C9A789',
    paddingVertical: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 14,
    fontWeight: '900',
    color: PALETTE.text,
  },
});

