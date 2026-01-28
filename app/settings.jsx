import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav';

export default function Settings() {
  const router = useRouter();

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
          <Text style={styles.title}>Settings</Text>
          <View style={styles.spacer} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Coming Soon</Text>
          <Text style={styles.cardText}>
            This is a placeholder settings screen for the ⚙️ button in Marketplace.
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#FFF9F1',
    borderWidth: 1,
    borderColor: '#E6D4C2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backEmoji: {
    fontSize: 18,
    color: '#3E2A1C',
    fontWeight: '900',
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: '#3E2A1C',
  },
  spacer: {
    width: 40,
    height: 40,
  },
  card: {
    marginTop: 6,
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

