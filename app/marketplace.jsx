import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav';
import { CATEGORIES, PALETTE, PRODUCTS, formatPeso } from '../lib/marketplaceData';

export default function Marketplace() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesQuery = !q || p.name.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const activeCategoryLabel =
    CATEGORIES.find((c) => c.key === activeCategory)?.label ?? 'All Categories';

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.92}
      accessibilityRole="button"
      accessibilityLabel={`${item.name}, ${formatPeso(item.price)}`}
      onPress={() => {
        router.push(`/product/${item.id}`);
      }}
    >
      <View style={styles.cardImage}>
        <Text style={styles.cardImageEmoji}>{item.imageEmoji}</Text>
        <View style={styles.cardImageBadge}>
          <Text style={styles.cardImageBadgeText}>FSL</Text>
        </View>
      </View>

      <View style={styles.cardBody}>
        <Text style={styles.cardTitle} numberOfLines={2}>
          {item.name}
        </Text>
        <View style={styles.cardRow}>
          <Text style={styles.cardPrice}>{formatPeso(item.price)}</Text>
          <View style={styles.categoryPill}>
            <Text style={styles.categoryPillEmoji}>{item.emoji}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topPadding} />

      {/* Top App Bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Marketplace</Text>
        <View style={styles.appBarActions}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setSearchOpen((v) => !v)}
            accessibilityRole="button"
            accessibilityLabel="Search"
          >
            <Text style={styles.iconEmoji}>🔍</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.push('/settings')}
            accessibilityRole="button"
            accessibilityLabel="Settings"
          >
            <Text style={styles.iconEmoji}>⚙️</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => router.push('/cart')}
            accessibilityRole="button"
            accessibilityLabel="Cart"
          >
            <Text style={styles.iconEmoji}>🛒</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search */}
      {(searchOpen || query.length > 0) && (
        <View style={styles.searchWrap}>
          <Text style={styles.searchEmoji}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            value={query}
            onChangeText={setQuery}
            placeholder="Search learning products…"
            placeholderTextColor={PALETTE.text2}
            autoCorrect={false}
            returnKeyType="search"
            accessibilityLabel="Search products"
          />
          {query.length > 0 && (
            <TouchableOpacity
              style={styles.clearButton}
              onPress={() => setQuery('')}
              accessibilityRole="button"
              accessibilityLabel="Clear search"
            >
              <Text style={styles.clearEmoji}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      {/* Category Filter Tabs */}
      <View style={styles.tabsWrap}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabs}
        >
          {CATEGORIES.map((cat) => {
            const active = cat.key === activeCategory;
            return (
              <TouchableOpacity
                key={cat.key}
                style={[styles.tab, active && styles.tabActive]}
                onPress={() => setActiveCategory(cat.key)}
                accessibilityRole="tab"
                accessibilityState={{ selected: active }}
                accessibilityLabel={cat.label}
              >
                <Text style={styles.tabEmoji}>{cat.emoji}</Text>
                <Text style={[styles.tabText, active && styles.tabTextActive]}>
                  {cat.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Product Grid */}
      <View style={styles.gridHeader}>
        <Text style={styles.gridTitle}>{activeCategoryLabel}</Text>
        <Text style={styles.gridMeta}>{filtered.length} items</Text>
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={renderProduct}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.gridRow}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyEmoji}>🧡</Text>
            <Text style={styles.emptyTitle}>No matches yet</Text>
            <Text style={styles.emptyText}>
              Try a different category or search term.
            </Text>
          </View>
        }
      />

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: PALETTE.bg,
  },
  topPadding: {
    height: Platform.OS === 'ios' ? 44 : 16,
  },
  appBar: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appBarTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: PALETTE.text,
    letterSpacing: 0.2,
  },
  appBarActions: {
    flexDirection: 'row',
    gap: 10,
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
  searchWrap: {
    marginHorizontal: 18,
    marginBottom: 10,
    backgroundColor: PALETTE.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: PALETTE.border,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchEmoji: {
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: PALETTE.text,
  },
  clearButton: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: PALETTE.surface2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearEmoji: {
    fontSize: 14,
    color: PALETTE.text2,
    fontWeight: '900',
  },
  tabsWrap: {
    paddingBottom: 6,
  },
  tabs: {
    paddingHorizontal: 18,
    gap: 10,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: PALETTE.chip,
    borderWidth: 1,
    borderColor: PALETTE.border,
  },
  tabActive: {
    backgroundColor: PALETTE.chipActive,
    borderColor: '#C9A789',
  },
  tabEmoji: {
    fontSize: 16,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '700',
    color: PALETTE.text2,
  },
  tabTextActive: {
    color: PALETTE.text,
  },
  gridHeader: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: PALETTE.text,
  },
  gridMeta: {
    fontSize: 12,
    fontWeight: '700',
    color: PALETTE.text2,
  },
  grid: {
    paddingHorizontal: 18,
    paddingBottom: 110,
  },
  gridRow: {
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: PALETTE.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: PALETTE.border,
    marginBottom: 14,
    overflow: 'hidden',
    shadowColor: PALETTE.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 2,
  },
  cardImage: {
    height: 110,
    backgroundColor: PALETTE.surface2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImageEmoji: {
    fontSize: 42,
  },
  cardImageBadge: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#FDF0E4',
    borderWidth: 1,
    borderColor: PALETTE.border,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 999,
  },
  cardImageBadgeText: {
    fontSize: 11,
    fontWeight: '900',
    color: PALETTE.text,
  },
  cardBody: {
    padding: 12,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: PALETTE.text,
    lineHeight: 18,
    minHeight: 36,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: '900',
    color: PALETTE.text,
  },
  categoryPill: {
    width: 28,
    height: 28,
    borderRadius: 10,
    backgroundColor: PALETTE.chip,
    borderWidth: 1,
    borderColor: PALETTE.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryPillEmoji: {
    fontSize: 14,
  },
  empty: {
    marginTop: 40,
    backgroundColor: PALETTE.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: PALETTE.border,
    padding: 18,
    alignItems: 'center',
  },
  emptyEmoji: {
    fontSize: 42,
    marginBottom: 6,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: PALETTE.text,
    marginBottom: 4,
  },
  emptyText: {
    fontSize: 13,
    lineHeight: 19,
    color: PALETTE.text2,
    textAlign: 'center',
  },
});
    