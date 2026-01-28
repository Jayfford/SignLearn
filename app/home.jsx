import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');

  const stats = [
    { id: '1', title: '3 Day', icon: '🎯', color: '#FF6B6B' },
    { id: '2', title: '2 Challenge', icon: '📊', color: '#4ECDC4' },
    { id: '3', title: 'Review', icon: '💡', color: '#FFE66D' },
  ];

  const communityPosts = [
    {
      id: '1',
      author: 'catdatelier',
      avatar: '🐱',
      image: '🎨',
    },
    {
      id: '2',
      author: 'krystal',
      avatar: '👩',
      content: "Hearing issues aren't a 'problem'and sign language isn't just a hobby. It's a beautiful, vital way to connect! Sure, repeating myself or people not facing me is frustrating... but learning it gave me an incredible community. Give it a try – you'll be amazed",
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        {/* Greeting with Icons */}
        <View style={styles.headerContainer}>
          <Text style={styles.greeting}>Hello, Zanelyna!</Text>
          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.headerIcon}>⚙️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.headerIcon}>👤</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#ccc"
          />
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          {stats.map((stat) => (
            <TouchableOpacity
              key={stat.id}
              style={[styles.statCard, { backgroundColor: stat.color }]}
              onPress={() => router.push('/learn')}
            >
              <Text style={styles.statIcon}>{stat.icon}</Text>
              <Text style={styles.statTitle}>{stat.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* About Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.sectionArrow}>→</Text>
          </View>
          <View style={styles.aboutContent}>
            <Text style={styles.aboutText}>
              FSL, or Filipino Sign Language, is the native visual-gestural language of the Deaf community in the Philippines, featuring its own distinct grammar, syntax, andvocabulary, reflecting Filipino culture, and officially declared as the national sign language by the FSL Act in 2018.
            </Text>
          </View>
        </View>

        {/* Community Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Community</Text>
            <Text style={styles.sectionArrow}>→</Text>
          </View>

          {communityPosts.map((post) => (
            <View key={post.id} style={styles.communityPost}>
              <View style={styles.postHeader}>
                <Text style={styles.avatar}>{post.avatar}</Text>
                <Text style={styles.postAuthor}>{post.author}</Text>
              </View>
              {post.image && (
                <Text style={styles.postImage}>{post.image}</Text>
              )}
              {post.content && (
                <Text style={styles.postContent}>{post.content}</Text>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation - Sticky */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/home')}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/learn')}>
          <Text style={styles.navIcon}>📖</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/game')}>
          <Text style={styles.navIcon}>🎮</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/marketplace')}
        >
          <Text style={styles.navIcon}>🛒</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/profile')}
        >
          <Text style={styles.navIcon}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E8D7C6',
  },
  container: {
    flex: 1,
    backgroundColor: '#E8D7C6',
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
    gap: 15,
  },
  icon: {
    fontSize: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 15,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    padding: 8,
  },
  headerIcon: {
    fontSize: 24,
  },
  greetingContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 25,
    backgroundColor: '#D4C4B0',
    borderRadius: 12,
    paddingHorizontal: 15,
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 15,
    marginBottom: 30,
  },
  statCard: {
    flex: 1,
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 100,
    elevation: 3,
  },
  statIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  statTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  sectionContainer: {
    marginHorizontal: 20,
    marginBottom: 25,
    backgroundColor: '#D4C4B0',
    borderRadius: 12,
    padding: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  sectionArrow: {
    fontSize: 18,
    color: '#666',
  },
  aboutContent: {
    backgroundColor: '#E8E2D5',
    padding: 12,
    borderRadius: 8,
  },
  aboutText: {
    fontSize: 13,
    color: '#333',
    lineHeight: 20,
  },
  communityPost: {
    backgroundColor: '#E8E2D5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    fontSize: 24,
    marginRight: 10,
  },
  postAuthor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  postImage: {
    fontSize: 60,
    marginBottom: 10,
    textAlign: 'center',
  },
  postContent: {
    fontSize: 12,
    color: '#555',
    lineHeight: 18,
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
