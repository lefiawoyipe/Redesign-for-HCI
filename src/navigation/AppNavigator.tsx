import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import EmailScreen from '../screens/EmailScreen';
import VerifyEmailScreen from '../screens/VerifyEmailScreen';
import PasswordScreen from '../screens/PasswordScreen';
import TermsScreen from '../screens/TermsScreen';
import SuccessScreen from '../screens/SuccessScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Email: undefined;
  VerifyEmail: { email: string };
  Password: undefined;
  Terms: undefined;
  Success: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Email" component={EmailScreen} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
      <Stack.Screen name="Password" component={PasswordScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;