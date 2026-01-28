import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🧭</Text>
      <Text style={styles.title}>Page not found</Text>
      <Text style={styles.text}>
        That screen doesn’t exist yet. Let’s get you back to a safe place.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/home')}>
        <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F1E6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
  emoji: {
    fontSize: 56,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    color: '#3E2A1C',
    marginBottom: 6,
  },
  text: {
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    color: '#6B4F3A',
    marginBottom: 16,
    maxWidth: 320,
  },
  button: {
    backgroundColor: '#D6B89C',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#C9A789',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#3E2A1C',
  },
});

