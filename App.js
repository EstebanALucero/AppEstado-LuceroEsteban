import { useFonts } from 'expo-font';
import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './src/Navigation/BottomTabNavigator';

export default function App() {

  const [ loaded ] = useFonts({
    Teko: require('./src/Assets/Fonts/Teko-Bold.ttf'),
    Righteous: require('./src/Assets/Fonts/Righteous-Regular.ttf')
  })

  if (!loaded) return null
  
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
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
