import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Swiper from '../Swiper/Swiper';

export default function SwiperModalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
        <Text style={styles.text}>Close Modal</Text>
      </TouchableOpacity>
      <Swiper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    marginVertical: 20
  },
  text: {
    fontSize: 24,
    color: 'blue'
  },
});
