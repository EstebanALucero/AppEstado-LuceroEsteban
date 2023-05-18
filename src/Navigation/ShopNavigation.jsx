import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from '../Screens/CategoriesScreen'
import CategoryFigurasScreen from '../Screens/CategoryFigurasScreen'
import FigurasDetailScreen from '../Screens/FigurasDetailScreen'

const ShopNavigation = () => {

    const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={CategoriesScreen}/>
            <Stack.Screen name='Figuras' component={CategoryFigurasScreen}/>
            <Stack.Screen name='Detail' component={FigurasDetailScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigation

const styles = StyleSheet.create({})