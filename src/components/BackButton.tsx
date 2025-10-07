import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BackButton: React.FC = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={28} color="#2A5C99" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
    backgroundColor: 'transparent',
    padding: 4,
  },
});

export default BackButton;
