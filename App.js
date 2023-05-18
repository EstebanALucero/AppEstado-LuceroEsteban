import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ShopNavigation from './src/Navigation/ShopNavigation';

export default function App() {

  const [ loaded ] = useFonts({
    Teko: require('./src/Assets/Fonts/Teko-Bold.ttf'),
    Righteous: require('./src/Assets/Fonts/Righteous-Regular.ttf')
  })

  if (!loaded) return null
  
  return (
    <ShopNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
