// src/components/StepProgress.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;
  const stepLabel = `Step ${currentStep} of ${totalSteps}`;

  return (
    <View style={styles.container}>
      <View style={styles.progressHeader}>
        <Text style={styles.stepText}>{stepLabel}</Text>
        <Text style={styles.percentageText}>{percentage}%</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  stepText: {
    fontSize: 14,
    color: theme.colors.text.secondary,
  },
  percentageText: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.text.primary,
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: 2,
  },
});

export default StepProgress;