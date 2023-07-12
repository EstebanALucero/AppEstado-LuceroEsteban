import { useFonts } from 'expo-font';
import { StyleSheet, } from 'react-native';
import { Provider } from 'react-redux';

import MainNavigator from "./src/Navigation"
import Store from './src/Store';
import { init } from './src/db';

init()
  .then(() => console.log("Base de datos iniciada"))
  .catch(err => {
    console.log("Base de datos no creada")
    console.log(err.message)
  })

export default function App() {

  const [ loaded ] = useFonts({
    Teko: require('./src/Assets/Fonts/Teko-Bold.ttf'),
    Righteous: require('./src/Assets/Fonts/Righteous-Regular.ttf')
  })

  if (!loaded) return null
  
  return (
    <Provider store={Store}>
        <MainNavigator />
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
