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

export default function NumbersLesson() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);

  const lessonData = [
    {
      id: 0,
      number: 'Intro',
      title: 'Numbers',
      illustration: null,
      instruction: 'Sign language numbers\nuse handshapes and\npalm directions to\nrepresent values, and\nsmall changes can affect\ntheir meaning or use.',
      isIntro: true,
    },
    {
      id: 1,
      number: '1',
      title: 'Sign Number: 1',
      illustration: '☝️',
      instruction: 'Extend your index finger upright while keeping all other fingers curled. The thumb can be relaxed or extended outward.',
    },
    {
      id: 2,
      number: '2',
      title: 'Sign Number: 2',
      illustration: '✌️',
      instruction: 'Extend your index and middle fingers in a "V" shape. Keep them separated and the palm facing outward.',
    },
    {
      id: 3,
      number: '3',
      title: 'Sign Number: 3',
      illustration: '🤟',
      instruction: 'Extend your index, middle, and ring fingers while keeping your pinky and thumb curled. Spread the three extended fingers apart.',
    },
    {
      id: 4,
      number: '4',
      title: 'Sign Number: 4',
      illustration: '✋',
      instruction: 'Extend all four fingers (index, middle, ring, and pinky) with the thumb curled into your palm. Keep fingers together and palm facing outward.',
    },
    {
      id: 5,
      number: '5',
      title: 'Sign Number: 5',
      illustration: '🖐️',
      instruction: 'Extend all five fingers (all four fingers and thumb) wide open. This is similar to the number "5" hand sign used in ASL.',
    },
    {
      id: 6,
      number: '6',
      title: 'Sign Number: 6',
      illustration: '🤞',
      instruction: 'Form a "V" shape with your thumb and index finger. Keep your middle, ring, and pinky fingers extended and together.',
    },
    {
      id: 7,
      number: '7',
      title: 'Sign Number: 7',
      illustration: '👌',
      instruction: 'Form a circle with your thumb and index finger. Extend your middle, ring, and pinky fingers upright.',
    },
    {
      id: 8,
      number: '8',
      title: 'Sign Number: 8',
      illustration: '🤘',
      instruction: 'Extend your index and pinky fingers while keeping middle and ring fingers folded. Keep the thumb extended or relaxed.',
    },
    {
      id: 9,
      number: '9',
      title: 'Sign Number: 9',
      illustration: '🖌️',
      instruction: 'Make a thumbs up gesture. This represents the number "9" in sign language.',
    },
    {
      id: 10,
      number: '10',
      title: 'Sign Number: 10',
      illustration: '👊',
      instruction: 'Make a fist with all fingers curled. This represents the number "10" in sign language.',
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
        <Text style={styles.headerTitle}>Numbers</Text>
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
    lineHeight: 24,
    fontWeight: '600',
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
