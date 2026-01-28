import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav';

export default function Profile() {
  const router = useRouter();

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.closeButton}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.contentTitle}>Your Profile</Text>
          <Text style={styles.contentText}>
            This page will show your progress, streaks, and saved goals.
            For now it’s a simple placeholder screen.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation - Sticky */}
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E8D7C6',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  closeButton: {
    fontSize: 24,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
  },
  content: {
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#D4C4B0',
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    color: '#333',
  },
  contentText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#D4C4B0',
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  navIcon: {
    fontSize: 24,
  },
});
