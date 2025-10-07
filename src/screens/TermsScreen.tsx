import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';
//import ProgressBar from '../components/ProgressBar';
import StepProgress from '../components/StepProgress';
import Button from '../components/Button';
import { theme } from '../styles/theme';
import { Image } from 'react-native';

const TermsScreen: React.FC = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);

  const handleContinue = () => {
    if (isChecked) {
      navigation.navigate('Success');
    }
  };

  const openTerms = () => {
    // Replace with your actual terms URL
    Linking.openURL('https://example.com/terms');
  };

  const openPrivacy = () => {
    // Replace with your actual privacy policy URL
    Linking.openURL('https://example.com/privacy');
  };

  return (
      <View style={styles.container}>
        <BackButton />
          {/* Logo Area - Replace with your actual logo */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/logo.png')} // Replace with your logo path
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

      <StepProgress currentStep={4} totalSteps={4} />

      <Text style={styles.title}>Step 4: Accept Terms</Text>
      <Text style={styles.subtitle}>
        Please review and accept our terms of service to complete your registration.
      </Text>

      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setIsChecked(!isChecked)}
      >
        <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
          {isChecked && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={styles.checkboxLabel}>
          I agree to the{' '}
          <Text style={styles.link} onPress={openTerms}>Terms of Service</Text>
          {' '}and{' '}
          <Text style={styles.link} onPress={openPrivacy}>Privacy Policy</Text>
        </Text>
      </TouchableOpacity>

      <Button
        title="Continue"
        onPress={handleContinue}
        disabled={!isChecked}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background.primary,
  },
   logoContainer: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
   // backgroundColor: '#F5F5F5', // Light gray background as in the image
    borderRadius: 8,
  },
  logo: {
    width: 200,
    height: 100,
  },
  title: {
    ...theme.typography.header,
    marginBottom: theme.spacing.xs,
    color: theme.colors.text.primary,
  },
  subtitle: {
    ...theme.typography.body,
    marginBottom: theme.spacing.md,
    color: theme.colors.text.secondary,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.sm,
  },
  checkboxChecked: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  checkmark: {
    color: 'white',
    fontWeight: 'bold',
  },
  checkboxLabel: {
    ...theme.typography.body,
    flex: 1,
    color: theme.colors.text.primary,
  },
  link: {
    color: theme.colors.primary,
  },
  button: {
    marginTop: theme.spacing.sm,
  },
});

export default TermsScreen;