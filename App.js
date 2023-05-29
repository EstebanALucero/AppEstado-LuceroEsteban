import { useFonts } from 'expo-font';
import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import BottomTabNavigator from './src/Navigation/BottomTabNavigator';
import Store from './src/Store';

export default function App() {

  const [ loaded ] = useFonts({
    Teko: require('./src/Assets/Fonts/Teko-Bold.ttf'),
    Righteous: require('./src/Assets/Fonts/Righteous-Regular.ttf')
  })

  if (!loaded) return null
  
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
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
