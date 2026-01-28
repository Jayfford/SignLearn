import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Game() {
  const router = useRouter();
  const [currentScreen, setCurrentScreen] = useState('dashboard'); // 'dashboard', 'signMatch', 'guessWord'
  const [flippedCards, setFlippedCards] = useState([]);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [difficulty, setDifficulty] = useState('Easy');

  // Sign Match game data
  const signMatchCards = [
    { id: 1, letter: 'J', flipped: false },
    { id: 2, letter: 'B', flipped: false },
    { id: 3, letter: 'J', flipped: false },
    { id: 4, letter: 'A', flipped: false },
    { id: 5, letter: 'B', flipped: false },
    { id: 6, letter: 'C', flipped: false },
    { id: 7, letter: 'A', flipped: false },
    { id: 8, letter: 'D', flipped: false },
    { id: 9, letter: 'C', flipped: false },
  ];

  // Guess the Word game data
  const guessWordOptions = ['Hi', 'Yes', 'No', 'Go'];
  const correctAnswer = 'Hi';

  const handleCardFlip = (cardId) => {
    if (flippedCards.length < 2) {
      setFlippedCards([...flippedCards, cardId]);
    }
  };

  const renderDashboard = () => (
    <ScrollView contentContainerStyle={styles.dashboardContainer}>
      <View style={styles.gameGrid}>
        <TouchableOpacity
          style={styles.gameCard}
          onPress={() => setCurrentScreen('signMatch')}
        >
          <View style={styles.gameIconContainer}>
            <Text style={styles.gameIcon}>🔗</Text>
          </View>
          <Text style={styles.gameTitle}>Sign Match</Text>
          <Text style={styles.gameDescription}>Match pairs of signs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gameCard}
          onPress={() => setCurrentScreen('guessWord')}
        >
          <View style={styles.gameIconContainer}>
            <Text style={styles.gameIcon}>❓</Text>
          </View>
          <Text style={styles.gameTitle}>Guess the Word</Text>
          <Text style={styles.gameDescription}>Identify the sign</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gameCard}>
          <View style={styles.gameIconContainer}>
            <Text style={styles.gameIcon}>💬</Text>
          </View>
          <Text style={styles.gameTitle}>Conversation Builder</Text>
          <Text style={styles.gameDescription}>Build sentences</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.gameCard}>
          <View style={styles.gameIconContainer}>
            <Text style={styles.gameIcon}>⚡</Text>
          </View>
          <Text style={styles.gameTitle}>Speed Sign</Text>
          <Text style={styles.gameDescription}>Quick recognition</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  const renderSignMatch = () => (
    <ScrollView contentContainerStyle={styles.gameContainer}>
      {/* Game Header */}
      <View style={styles.gameHeader}>
        <View style={styles.gameInfo}>
          <Text style={styles.difficultyBadge}>{difficulty}</Text>
          <Text style={styles.levelText}>Level {level}</Text>
        </View>
        <View style={styles.livesContainer}>
          {[...Array(lives)].map((_, i) => (
            <Text key={i} style={styles.heartIcon}>❤️</Text>
          ))}
        </View>
      </View>

      {/* Game Grid */}
      <View style={styles.cardGrid}>
        {signMatchCards.map((card) => {
          const isFlipped = flippedCards.includes(card.id);
          return (
            <TouchableOpacity
              key={card.id}
              style={[styles.flipCard, isFlipped && styles.flipCardFlipped]}
              onPress={() => handleCardFlip(card.id)}
            >
              {isFlipped ? (
                <Text style={styles.cardLetter}>{card.letter}</Text>
              ) : (
                <Text style={styles.cardQuestionMark}>?</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          setCurrentScreen('dashboard');
          setFlippedCards([]);
        }}
      >
        <Text style={styles.backButtonText}>Back to Games</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  const renderGuessWord = () => (
    <ScrollView contentContainerStyle={styles.gameContainer}>
      {/* Hand Sign Image Placeholder */}
      <View style={styles.signImageContainer}>
        <View style={styles.signImagePlaceholder}>
          <Text style={styles.signImageIcon}>✋</Text>
          <Text style={styles.signImageText}>Hand Sign</Text>
        </View>
      </View>

      {/* Question */}
      <Text style={styles.questionText}>What does this sign mean?</Text>

      {/* Answer Options */}
      <View style={styles.answerContainer}>
        {guessWordOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.answerButton}
            onPress={() => {
              // Handle answer selection
              if (option === correctAnswer) {
                alert('Correct! 🎉');
              } else {
                alert('Try again!');
              }
            }}
          >
            <Text style={styles.answerText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setCurrentScreen('dashboard')}
      >
        <Text style={styles.backButtonText}>Back to Games</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            if (currentScreen === 'dashboard') {
              router.back();
            } else {
              setCurrentScreen('dashboard');
            }
          }}
        >
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {currentScreen === 'dashboard'
            ? "Let's Play"
            : currentScreen === 'signMatch'
            ? 'Sign Match'
            : 'Guess the Word'}
        </Text>
      </View>

      {/* Content */}
      {currentScreen === 'dashboard' && renderDashboard()}
      {currentScreen === 'signMatch' && renderSignMatch()}
      {currentScreen === 'guessWord' && renderGuessWord()}

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
        <TouchableOpacity style={styles.navItem} onPress={() => router.push('/profile')}>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  closeButton: {
    fontSize: 24,
    marginRight: 12,
    color: '#333',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
  },
  dashboardContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  gameGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  gameCard: {
    width: '48%',
    backgroundColor: '#F5F1ED',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  gameIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D4C4B0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  gameIcon: {
    fontSize: 32,
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  gameDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  gameContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  gameHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  gameInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  difficultyBadge: {
    backgroundColor: '#D4C4B0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  levelText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  livesContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  heartIcon: {
    fontSize: 20,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  flipCard: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#F5F1ED',
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#D4C4B0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  flipCardFlipped: {
    backgroundColor: '#E8E2D5',
    borderColor: '#C4B5A0',
  },
  cardQuestionMark: {
    fontSize: 32,
    fontWeight: '700',
    color: '#999',
  },
  cardLetter: {
    fontSize: 36,
    fontWeight: '700',
    color: '#333',
  },
  signImageContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  signImagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: '#F5F1ED',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#D4C4B0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  signImageIcon: {
    fontSize: 80,
    marginBottom: 8,
  },
  signImageText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
  },
  answerContainer: {
    gap: 12,
  },
  answerButton: {
    backgroundColor: '#F5F1ED',
    borderRadius: 12,
    padding: 18,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#D4C4B0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  answerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  backButton: {
    backgroundColor: '#D4C4B0',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
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
