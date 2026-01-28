import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { usePathname, useRouter } from 'expo-router';

const NAV_ITEMS = [
  { key: 'home', label: 'Home', emoji: '🏠', href: '/home' },
  { key: 'explore', label: 'Explore', emoji: '🔎', href: '/explore' },
  { key: 'learn', label: 'Learn', emoji: '🤟', href: '/learn' },
  { key: 'games', label: 'Games', emoji: '🎮', href: '/game' },
  { key: 'market', label: 'Market', emoji: '🛍️', href: '/marketplace' },
  { key: 'profile', label: 'Profile', emoji: '👤', href: '/profile' },
];

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (href) => {
    if (pathname === href) return true;

    // Treat lesson screens as part of Learn.
    if (href === '/learn' && pathname.startsWith('/lesson/')) return true;

    // Treat marketplace sub-screens as part of Market.
    if (
      href === '/marketplace' &&
      (pathname === '/cart' || pathname === '/settings' || pathname.startsWith('/product/'))
    ) {
      return true;
    }

    return false;
  };

  return (
    <View style={styles.bottomNav} accessibilityRole="tablist">
      {NAV_ITEMS.map((item) => {
        const active = isActive(item.href);
        return (
          <TouchableOpacity
            key={item.key}
            style={styles.navItem}
            onPress={() => router.push(item.href)}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            accessibilityLabel={item.label}
          >
            <Text style={[styles.navIcon, active && styles.navIconActive]}>
              {item.emoji}
            </Text>
            <Text style={[styles.navLabel, active && styles.navLabelActive]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#E9D8C6', // warm beige
    paddingTop: 10,
    paddingBottom: 12,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#D2BFAF',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    minWidth: 52,
  },
  navIcon: {
    fontSize: 22,
    marginBottom: 2,
    color: '#6B4F3A',
  },
  navIconActive: {
    transform: [{ scale: 1.06 }],
  },
  navLabel: {
    fontSize: 11,
    color: '#6B4F3A',
    fontWeight: '600',
  },
  navLabelActive: {
    color: '#3E2A1C',
  },
});

