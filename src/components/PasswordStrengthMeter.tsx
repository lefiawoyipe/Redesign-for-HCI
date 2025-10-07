import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

interface PasswordStrengthMeterProps {
  strength: number; // 0-4
}

const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({ strength }) => {
  const strengthLabels = ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        {[1, 2, 3, 4].map((i) => (
          <View
            key={i}
            style={[
              styles.bar,
              i <= strength ? styles[`strength${i}` as keyof typeof styles] : styles.barInactive,
            ]}
          />
        ))}
      </View>
      <Text style={styles.label}>{strengthLabels[strength]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
  },
  barContainer: {
    flexDirection: 'row',
    marginBottom: theme.spacing.xs,
  },
  bar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 2,
  },
  barInactive: {
    backgroundColor: '#E0E0E0',
  },
  strength0: {
    backgroundColor: theme.colors.error,
  },
  strength1: {
    backgroundColor: '#FF5722', // Orange for weak
  },
  strength2: {
    backgroundColor: '#FFC107', // Yellow for fair
  },
  strength3: {
    backgroundColor: '#4CAF50', // Green for strong
  },
  strength4: {
    backgroundColor: theme.colors.success, // Dark green for very strong
  },
  label: {
    ...theme.typography.label,
    color: theme.colors.text.secondary,
    textAlign: 'center',
  },
});

export default PasswordStrengthMeter;