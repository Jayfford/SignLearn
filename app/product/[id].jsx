import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import BottomNav from '../../components/BottomNav';
import { useCart } from '../../components/CartContext';
import { CATEGORIES, PALETTE, formatPeso, getProductById } from '../../lib/marketplaceData';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const product = getProductById(typeof id === 'string' ? id : String(id ?? ''));
  const cart = useCart();

  if (!product) {
    return (
      <View style={styles.mainContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Not found</Text>
            <Text style={styles.cardText}>This product doesn’t exist.</Text>
            <TouchableOpacity style={styles.primaryButton} onPress={() => router.back()}>
              <Text style={styles.primaryButtonText}>Go back</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <BottomNav />
      </View>
    );
  }

  const categoryLabel = CATEGORIES.find((c) => c.key === product.category)?.label ?? 'Category';

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <Text style={styles.iconEmoji}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Product</Text>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.push('/cart')}
            accessibilityRole="button"
            accessibilityLabel="Open cart"
          >
            <Text style={styles.iconEmoji}>🛒</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroEmoji}>{product.imageEmoji}</Text>
          <View style={styles.heroBadge}>
            <Text style={styles.heroBadgeText}>FSL</Text>
          </View>
        </View>

        <Text style={styles.title}>{product.name}</Text>
        <View style={styles.metaRow}>
          <View style={styles.metaPill}>
            <Text style={styles.metaPillEmoji}>{product.emoji}</Text>
            <Text style={styles.metaPillText}>{categoryLabel}</Text>
          </View>
          <Text style={styles.price}>{formatPeso(product.price)}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>About</Text>
          <Text style={styles.cardText}>{product.description}</Text>
        </View>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => {
            cart.add(product.id, 1);
            router.push('/cart');
          }}
          accessibilityRole="button"
          accessibilityLabel="Add to cart"
        >
          <Text style={styles.primaryButtonText}>Add to cart</Text>
        </TouchableOpacity>
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
    paddingBottom: 110,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: PALETTE.surface,
    borderWidth: 1,
    borderColor: PALETTE.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconEmoji: {
    fontSize: 18,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: PALETTE.text,
  },
  hero: {
    height: 180,
    borderRadius: 20,
    backgroundColor: PALETTE.surface2,
    borderWidth: 1,
    borderColor: PALETTE.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    overflow: 'hidden',
  },
  heroEmoji: {
    fontSize: 72,
  },
  heroBadge: {
    position: 'absolute',
    right: 12,
    top: 12,
    backgroundColor: '#FDF0E4',
    borderWidth: 1,
    borderColor: PALETTE.border,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  heroBadgeText: {
    fontSize: 12,
    fontWeight: '900',
    color: PALETTE.text,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: PALETTE.text,
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  metaPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: PALETTE.chip,
    borderWidth: 1,
    borderColor: PALETTE.border,
    maxWidth: '70%',
  },
  metaPillEmoji: {
    fontSize: 16,
  },
  metaPillText: {
    fontSize: 13,
    fontWeight: '800',
    color: PALETTE.text2,
  },
  price: {
    fontSize: 18,
    fontWeight: '900',
    color: PALETTE.text,
  },
  card: {
    backgroundColor: PALETTE.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: PALETTE.border,
    padding: 16,
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: PALETTE.text,
    marginBottom: 6,
  },
  cardText: {
    fontSize: 13,
    lineHeight: 19,
    color: PALETTE.text2,
  },
  primaryButton: {
    backgroundColor: PALETTE.chipActive,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C9A789',
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 14,
    fontWeight: '900',
    color: PALETTE.text,
  },
});

