import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import { theme } from '../styles/theme';
import { Image } from 'react-native';

const SuccessScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleGoToLogin = () => {
    // Navigate to welcome screen after success
    navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
  };

  return (
    <View style={styles.container}>
      {/* Success Image Area */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/Success.png')} // Replace with your success image
          style={styles.successImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Account Created Successfully!</Text>
        <Text style={styles.message}>
          Welcome to Aldin Cycles! Your account has been created and you're ready to get started.
        </Text>
      </View>

      <Button
        title="Go to Login"
        onPress={handleGoToLogin}
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
    justifyContent: 'space-between',
  },
    imageContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  successImage: {
    width: 150,
    height: 150,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  title: {
    ...theme.typography.header,
    marginBottom: theme.spacing.md,
    color: theme.colors.text.primary,
    textAlign: 'center',
  },
  message: {
    ...theme.typography.body,
    color: theme.colors.text.secondary,
    textAlign: 'center',
  },
  button: {
    marginBottom: theme.spacing.lg,
  },
});

export default SuccessScreen;