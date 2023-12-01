import {Text, StyleSheet} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const SubHeader = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#bbe8ef', '#bdeee9', '#c3f1e3']}
      style={styles.container}>
      <Feather name="map-pin" size={16} color="#2c4341" />
      <Text style={styles.deliver}>Deliver to Egypt</Text>
      <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  deliver: {
    fontSize: 13,
    color: '#2c4341',
    paddingHorizontal: 6,
  },
});

export default SubHeader;