import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Thumbs Up Hand Illustration */}
        <View style={styles.illustration}>
          <Text style={styles.handEmoji}>👍</Text>
        </View>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoSign}>Sign</Text>
          <Text style={styles.logoLearn}>Learn</Text>
        </View>

        {/* Tagline */}
        <Text style={styles.tagline}>Unlock the Language of Hands</Text>

        {/* Get Started Button */}
        <TouchableOpacity
          style={styles.getStartedBtn}
          onPress={() => router.push('/signup')}
        >
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4C4B0',
  },
  statusBar: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  icons: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  illustration: {
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  handEmoji: {
    fontSize: 120,
  },
  logoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  logoSign: {
    fontSize: 48,
    fontWeight: '700',
    color: '#9B9BA3',
    marginRight: 5,
  },
  logoLearn: {
    fontSize: 48,
    fontWeight: '700',
    color: '#E85D5D',
  },
  tagline: {
    fontSize: 16,
    color: '#333',
    fontStyle: 'italic',
    marginBottom: 50,
    textAlign: 'center',
  },
  getStartedBtn: {
    backgroundColor: '#E8E2D5',
    paddingVertical: 16,
    paddingHorizontal: 80,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  getStartedText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
});
