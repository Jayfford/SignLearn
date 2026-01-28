import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import BottomNav from '../components/BottomNav';

export default function Learn() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('challenge');
  const [expandedCategories, setExpandedCategories] = useState(['Novice Sign']);

  const toggleCategory = (category) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const challengeData = [
    {
      category: 'Novice Sign',
      lessons: [
        { id: '1', name: 'Alphabet', icon: '🔠', locked: false },
        { id: '2', name: 'Numbers', icon: '🏢', locked: false },
        { id: '3', name: 'Greetings & Manners', icon: '🤝', locked: false },
        { id: '4', name: 'Module 1 Quiz', icon: '📝', locked: false },
      ],
    },
    {
      category: 'Intermediate Sign',
      lessons: [
        { id: '5', name: 'Weather', icon: '🏞️', locked: true },
        { id: '6', name: 'Narrative & Emotional Depth', icon: '👥', locked: true },
        { id: '7', name: 'Classifiers & Physics', icon: '🚗', locked: true },
      ],
    },
    {
      category: 'Advance Sign',
      lesson: { id: '8', name: 'Module 2 Quiz', icon: '📝', locked: true },
      lessons: [
        { id: '9', name: 'Classifiers (CL)', icon: '✈️', locked: true },
        { id: '10', name: 'Non-Manual Signals (NMS)', icon: '👥', locked: true },
        { id: '11', name: 'Deaf Slang/Idioms', icon: '💬', locked: true },
        { id: '12', name: 'Module 3 Quiz', icon: '📝', locked: true },
      ],
    },
  ];

  const renderLessonItem = ({ item }) => (
    <TouchableOpacity
      style={styles.lessonItem}
      onPress={() => {
        if (!item.locked) {
          if (item.name === 'Alphabet') {
            router.push('/lesson/alphabet');
          } else if (item.name === 'Numbers') {
            router.push('/lesson/numbers');
          }
        }
      }}
      disabled={item.locked}
    >
      <View style={styles.lessonLeft}>
        <Text style={styles.lessonIcon}>{item.icon}</Text>
        <View>
          <Text style={styles.lessonType}>Lesson</Text>
          <Text style={styles.lessonName}>{item.name}</Text>
        </View>
      </View>
      {item.locked ? (
        <Text style={styles.lockIcon}>🔒</Text>
      ) : (
        <TouchableOpacity style={styles.checkbox} />
      )}
    </TouchableOpacity>
  );

  const renderCategorySection = ({ item }) => (
    <View key={item.category} style={styles.categoryContainer}>
      <TouchableOpacity
        style={styles.categoryHeader}
        onPress={() => toggleCategory(item.category)}
      >
        <View style={styles.categoryTitleContainer}>
          <Text style={styles.lockIcon}>
            {item.category.includes('Advance') ? '🔒' : ''}
          </Text>
          <Text style={styles.categoryTitle}>{item.category}</Text>
        </View>
        <Text style={styles.expandIcon}>
          {expandedCategories.includes(item.category) ? '▲' : '▼'}
        </Text>
      </TouchableOpacity>

      {expandedCategories.includes(item.category) && (
        <View>
          {item.lessons.map((lesson) => (
            <View key={lesson.id}>
              {renderLessonItem({ item: lesson })}
            </View>
          ))}
        </View>
      )}
    </View>
  );

  const showCertificate =
    activeTab === 'challenge' &&
    expandedCategories.length > 0;

  return (
    <View style={styles.mainContainer}>
      {/* Header with Title and Icons */}
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.backButton}>X</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Lets start to Learn</Text>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.headerIcon}>⚙️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.headerIcon}>ℹ️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'challenge' && styles.activeTab]}
          onPress={() => setActiveTab('challenge')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'challenge' && styles.activeTabText,
            ]}
          >
            Challenge
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'video' && styles.activeTab]}
          onPress={() => setActiveTab('video')}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === 'video' && styles.activeTabText,
            ]}
          >
            Video lesson
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {/* Novice Sign */}
        {challengeData[0] && (
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={styles.categoryHeader}
              onPress={() => toggleCategory(challengeData[0].category)}
            >
              <View style={styles.categoryTitleContainer}>
                <Text style={styles.categoryCheckbox}>☐</Text>
                <Text style={styles.categoryTitle}>{challengeData[0].category}</Text>
              </View>
              <Text style={styles.expandIcon}>
                {expandedCategories.includes(challengeData[0].category) ? '▲' : '▼'}
              </Text>
            </TouchableOpacity>

            {expandedCategories.includes(challengeData[0].category) && (
              <View>
                {challengeData[0].lessons.map((lesson) => (
                  <View key={lesson.id}>
                    {renderLessonItem({ item: lesson })}
                  </View>
                ))}
              </View>
            )}
          </View>
        )}

        {/* Intermediate Sign */}
        {challengeData[1] && (
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={styles.categoryHeader}
              onPress={() => toggleCategory(challengeData[1].category)}
            >
              <View style={styles.categoryTitleContainer}>
                <Text style={styles.lockIcon}>🔒</Text>
                <Text style={styles.categoryTitle}>{challengeData[1].category}</Text>
              </View>
              <Text style={styles.expandIcon}>
                {expandedCategories.includes(challengeData[1].category) ? '▲' : '▼'}
              </Text>
            </TouchableOpacity>

            {expandedCategories.includes(challengeData[1].category) && (
              <View>
                {challengeData[1].lessons.map((lesson) => (
                  <View key={lesson.id}>
                    {renderLessonItem({ item: lesson })}
                  </View>
                ))}
              </View>
            )}
          </View>
        )}

        {/* Module 2 Quiz */}
        {challengeData[2] && challengeData[2].lesson && (
          <View style={styles.lessonItem}>
            <View style={styles.lessonLeft}>
              <Text style={styles.lessonIcon}>{challengeData[2].lesson.icon}</Text>
              <View>
                <Text style={styles.lessonType}>Lesson</Text>
                <Text style={styles.lessonName}>{challengeData[2].lesson.name}</Text>
              </View>
            </View>
            <Text style={styles.lockIcon}>🔒</Text>
          </View>
        )}

        {/* Advance Sign */}
        {challengeData[2] && (
          <View style={styles.categoryContainer}>
            <TouchableOpacity
              style={styles.categoryHeader}
              onPress={() => toggleCategory(challengeData[2].category)}
            >
              <View style={styles.categoryTitleContainer}>
                <Text style={styles.lockIcon}>🔒</Text>
                <Text style={styles.categoryTitle}>{challengeData[2].category}</Text>
              </View>
              <Text style={styles.expandIcon}>
                {expandedCategories.includes(challengeData[2].category) ? '▲' : '▼'}
              </Text>
            </TouchableOpacity>

            {expandedCategories.includes(challengeData[2].category) && (
              <View>
                {challengeData[2].lessons.map((lesson) => (
                  <View key={lesson.id}>
                    {renderLessonItem({ item: lesson })}
                  </View>
                ))}
              </View>
            )}
          </View>
        )}

        {/* Certificate Section */}
        <View style={styles.certificateSection}>
          <Text style={styles.certificateIcon}>📜</Text>
          <Text style={styles.certificateTitle}>
            Your Certificate is close
          </Text>
          <Text style={styles.certificateText}>
            You are doing great! Keep learning to unlock your certificate!
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#D4C4B0',
  },
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
    paddingVertical: 15,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 10,
  },
  backButton: {
    fontSize: 24,
    color: '#666',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tab: {
    paddingBottom: 12,
    marginRight: 30,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#000',
    fontWeight: '700',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  categoryContainer: {
    marginBottom: 10,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E8E2D5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 5,
  },
  categoryTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  categoryCheckbox: {
    fontSize: 18,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  expandIcon: {
    fontSize: 12,
    color: '#666',
  },
  lessonItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F1ED',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
  },
  lessonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  lessonIcon: {
    fontSize: 20,
  },
  lessonType: {
    fontSize: 11,
    color: '#999',
  },
  lessonName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  lockIcon: {
    fontSize: 18,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  certificateSection: {
    backgroundColor: '#E8E2D5',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  certificateIcon: {
    fontSize: 60,
    marginBottom: 12,
  },
  certificateTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
  },
  certificateText: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
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
