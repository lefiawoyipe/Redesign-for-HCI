import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>ALDIN<span style={{fontWeight: 'normal'}}>CYCLES</span></Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Email')}> 
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Email')}>
          <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#2196F3',
    margin: 10,
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginRight: 10,
  },
  signupButton: {
    backgroundColor: '#212529',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  loginText: {
    color: '#212529',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
