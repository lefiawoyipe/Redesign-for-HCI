import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import validator from 'validator';
import StepProgress from '../components/StepProgress';
import Input from '../components/Input';
import Button from '../components/Button';
import { theme } from '../styles/theme';
import { Image } from 'react-native';


const EmailScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (text: string) => {
    setEmail(text);
    setIsValidEmail(validator.isEmail(text));
  };

  const handleContinue = () => {
    if (isValidEmail) {
      navigation.navigate('VerifyEmail', { email });
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

      <StepProgress currentStep={1} totalSteps={4} />
      
      <Text style={styles.title}>Step 1: Enter Your Email</Text>
      <Text style={styles.subtitle}>
        Please enter your email address to get started with your account.
      </Text>

      <Input
        placeholder="Email address"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={validateEmail}
        isValid={isValidEmail}
        showCheckmark={true}
      />

      <Button
        title="Continue"
        onPress={handleContinue}
        disabled={!isValidEmail}
        style={styles.button}
      />

      
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.loginLink}>Log in</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 22,
  },
  subtitle: {
    ...theme.typography.body,
    marginBottom: theme.spacing.md,
    color: theme.colors.text.secondary,
    lineHeight: 22,
  },
  validationText: {
    ...theme.typography.label,
    color: theme.colors.success,
    marginTop: -theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },
  button: {
    marginVertical: theme.spacing.md,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    ...theme.typography.body,
    color: theme.colors.text.secondary,
  },
  loginLink: {
    ...theme.typography.label,
    color: theme.colors.primary,
    fontWeight: '600',
  },
});

export default EmailScreen;