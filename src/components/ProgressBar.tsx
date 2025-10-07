import React from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.progressBackground}>
        <View 
          style={[
            styles.progressFill, 
            { width: `${progressPercentage}%` }
          ]} 
        />
      </View>
      <View style={styles.stepsContainer}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.stepIndicator,
              index < currentStep ? styles.completedStep : styles.pendingStep
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
  },
  progressBackground: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: theme.spacing.xs,
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: 2,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  stepIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  completedStep: {
    backgroundColor: theme.colors.primary,
  },
  pendingStep: {
    backgroundColor: '#E0E0E0',
  },
});

export default ProgressBar;