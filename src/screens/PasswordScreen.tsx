import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';
//import ProgressBar from '../components/ProgressBar';
import StepProgress from '../components/StepProgress';
import Input from '../components/Input';
import Button from '../components/Button';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';
import { theme } from '../styles/theme';
import { Image } from 'react-native';

const PasswordScreen: React.FC = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    // Calculate password strength (0-4 scale)
    let strength = 0;
    if (text.length >= 8) strength++;
    if (/[A-Z]/.test(text)) strength++;
    if (/[0-9]/.test(text)) strength++;
    if (/[^A-Za-z0-9]/.test(text)) strength++;
    setPasswordStrength(strength);
  };

  const isPasswordStrong = passwordStrength >= 3;

  const handleContinue = () => {
    if (isPasswordStrong) {
      navigation.navigate('Terms');
    }
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
      <StepProgress currentStep={3} totalSteps={4} />

      <Text style={styles.title}>Step 3: Create Password</Text>
      <Text style={styles.subtitle}>
        Create a strong password to secure your account.
      </Text>

      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
        style={styles.input}
      />

      <PasswordStrengthMeter strength={passwordStrength} />

      <Button
        title="Continue"
        onPress={handleContinue}
        disabled={!isPasswordStrong}
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
  input: {
    marginBottom: theme.spacing.sm,
  },
  button: {
    marginTop: theme.spacing.md,
  },
});

export default PasswordScreen;