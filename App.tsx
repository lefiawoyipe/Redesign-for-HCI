// App.tsx
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import * as Font from 'expo-font';
import { theme } from './src/styles/theme';
import AppNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
  'OpenSans-Bold': require('./assets/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'),
  'OpenSans-Regular': require('./assets/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'),
  'OpenSans-SemiBold': require('./assets/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;