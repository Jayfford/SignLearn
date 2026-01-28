import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import BottomNav from '../../components/BottomNav';

export default function AlphabetLesson() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const lessonData = [
    {
      id: 0,
      letter: 'Intro',
      title: 'Sign Alphabet',
      illustration: null,
      instruction: 'Sign Alphabet refers to using\nhandshapes\nto represent letters',
      isIntro: true,
      chart: '🖐️',
    },
    {
      id: 1,
      letter: 'A',
      title: 'Sign Alphabet: A',
      illustration: '👊',
      instruction: 'extend your dominant hand with fingers closed into a fist, and position it in front of you, facing outward.',
    },
    {
      id: 2,
      letter: 'B',
      title: 'Sign Alphabet: B',
      illustration: '🖐️',
      instruction: 'use your dominant hand by extending all four fingers upright, pressed firmly together, with the palm facing outward.',
    },
    {
      id: 3,
      letter: 'C',
      title: 'Sign Alphabet: C',
      illustration: '🤌',
      instruction: 'shape your dominant hand into an open position. Then, gently curve your hand, mimicking the rounded shape of the letter "C".',
    },
    {
      id: 4,
      letter: 'D',
      title: 'Sign Alphabet: D',
      illustration: '☝️',
      instruction: 'Raise your dominant hand with the palm facing outward. Touch your thumb to the middle, ring, and pinky fingers while keeping the index finger upright and extended.',
    },
    {
      id: 5,
      letter: 'E',
      title: 'Sign Alphabet: E',
      illustration: '✋',
      instruction: 'Raise your dominant hand with the palm facing outward. Curl all four fingers inward so they touch, and tuck your thumb tightly into the palm, touching the fingertips.',
    },
    {
      id: 6,
      letter: 'F',
      title: 'Sign Alphabet: F',
      illustration: '🤟',
      instruction: 'Form a ring with your thumb and index finger. Keep the remaining three fingers extended upright, separated slightly.',
    },
    {
      id: 7,
      letter: 'G',
      title: 'Sign Alphabet: G',
      illustration: '👆',
      instruction: 'Extend your index and middle fingers while keeping other fingers curled. Point both fingers to the side, with your palm facing inward.',
    },
    {
      id: 8,
      letter: 'H',
      title: 'Sign Alphabet: H',
      illustration: '✌️',
      instruction: 'Extend your index and middle fingers in a "V" shape. Keep them side by side and move them slightly to indicate the letter "H".',
    },
    {
      id: 9,
      letter: 'I',
      title: 'Sign Alphabet: I',
      illustration: '🤘',
      instruction: 'Extend only your pinky finger upright with the palm facing inward. Keep all other fingers curled into your palm.',
    },
    {
      id: 10,
      letter: 'J',
      title: 'Sign Alphabet: J',
      illustration: '🤟',
      instruction: 'Extend your pinky finger and curl it downward in a "J" shape. Keep your palm facing inward.',
    },
  ];

  const current = lessonData[currentStep];
  const progress = `${currentStep}/${lessonData.length - 1}`;

  const handleContinue = () => {
    if (currentStep < lessonData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Lesson completed
      router.back();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alphabet</Text>
        <TouchableOpacity>
          <Text style={styles.menuButton}>⋮</Text>
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${((currentStep + 1) / lessonData.length) * 100}%`,
              },
            ]}
          />
        </View>
        <Text style={styles.progressText}>{progress}</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        {/* Lesson Title */}
        <Text style={styles.lessonTitle}>{current.title}</Text>

        {/* Illustration or Chart */}
        {current.isIntro ? (
          <View style={styles.chartContainer}>
            <Text style={styles.chartText}>
              {current.instruction.split('\n').map((line, index) => (
                <Text key={index}>
                  {line}
                  {index < current.instruction.split('\n').length - 1 && '\n'}
                </Text>
              ))}
            </Text>
            {/* Hand shapes chart visualization */}
            <View style={styles.alphabet}>
              <Text style={styles.alphabetRow}>A B C D E F G H I</Text>
              <Text style={styles.alphabetRow}>J K L M N O P Q</Text>
              <Text style={styles.alphabetRow}>R S T U V W X Y Z</Text>
              <Text style={styles.alphabetRow}>1 2 3 4 5 6 7 8 9</Text>
            </View>
          </View>
        ) : (
          <View style={styles.illustrationContainer}>
            <Text style={styles.illustration}>{current.illustration}</Text>
          </View>
        )}

        {/* Instructions */}
        {!current.isIntro && (
          <Text style={styles.instructions}>{current.instruction}</Text>
        )}

        {/* Button Container */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, currentStep === 0 && styles.buttonDisabled]}
            onPress={handlePrevious}
            disabled={currentStep === 0}
          >
            <Text style={[styles.buttonText, currentStep === 0 && styles.buttonTextDisabled]}>
              Previous
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#D4C4B0',
  },
  closeButton: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  menuButton: {
    fontSize: 24,
    color: '#333',
  },
  progressContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressBar: {
    flex: 1,
    height: 20,
    backgroundColor: '#E8E2D5',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 10,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    minWidth: 40,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  lessonTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 30,
    backgroundColor: '#E8E2D5',
    borderRadius: 12,
  },
  illustration: {
    fontSize: 120,
  },
  instructions: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  chartContainer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
    backgroundColor: '#E8E2D5',
    borderRadius: 12,
    paddingHorizontal: 15,
  },
  chartText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
    fontWeight: '600',
  },
  alphabet: {
    alignItems: 'center',
    gap: 8,
  },
  alphabetRow: {
    fontSize: 14,
    color: '#666',
    letterSpacing: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#E8E2D5',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#999',
  },
  buttonDisabled: {
    opacity: 0.5,
    backgroundColor: '#D4C4B0',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
  },
  buttonTextDisabled: {
    color: '#999',
  },
  continueButton: {
    flex: 1,
    backgroundColor: '#6B9BD1',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
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
