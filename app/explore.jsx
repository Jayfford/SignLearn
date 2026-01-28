import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BottomNav from '../components/BottomNav';

export default function Explore() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Explore</Text>
          <Text style={styles.subtitle}>
            Discover new sign language learning products, bundles, and beginner-friendly
            recommendations.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Coming Soon</Text>
          <Text style={styles.cardText}>
            This screen will surface trending items, curated sets, and helpful learning paths.
          </Text>
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F7F1E6',
  },
  container: {
    paddingHorizontal: 18,
    paddingTop: 54,
    paddingBottom: 90,
  },
  header: {
    marginBottom: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#3E2A1C',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 13,
    lineHeight: 19,
    color: '#6B4F3A',
  },
  card: {
    marginTop: 12,
    backgroundColor: '#FFF9F1',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E6D4C2',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#3E2A1C',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#5B4433',
  },
});

