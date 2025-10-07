import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
//import ProgressBar from '../components/ProgressBar';
import StepProgress from '../components/StepProgress';
import Button from '../components/Button';
import { theme } from '../styles/theme';
import { Image } from 'react-native';

const CELL_COUNT = 6;

const VerifyEmailScreen: React.FC = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const isCodeComplete = value.length === CELL_COUNT;

  const handleVerify = () => {
    if (isCodeComplete) {
      navigation.navigate('Password');
    }
  };

  const handleResendCode = () => {
    Alert.alert('Code Sent', 'A new verification code has been sent to your email.');
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
   

      <StepProgress currentStep={2} totalSteps={4} />
      
      <Text style={styles.title}>Step 2: Verify Email</Text>
      <Text style={styles.subtitle}>
        We've sent a verification code to your email. Please enter it below.
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity onPress={handleResendCode}>
        <Text style={styles.link}>Resend Code</Text>
      </TouchableOpacity>

      <Button
        title="Verify"
        onPress={handleVerify}
        disabled={!isCodeComplete}
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
  codeFieldRoot: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  cell: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    marginHorizontal: theme.spacing.xs,
  },
  focusCell: {
    borderColor: theme.colors.primary,
  },
  cellText: {
    ...theme.typography.header,
    color: theme.colors.text.primary,
  },
  link: {
    ...theme.typography.label,
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  button: {
    marginTop: theme.spacing.sm,
  },
});

export default VerifyEmailScreen;