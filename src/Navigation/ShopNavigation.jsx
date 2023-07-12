import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from "@expo/vector-icons/Ionicons"

import CategoriesScreen from '../Screens/CategoriesScreen'
import CategoryFigurasScreen from '../Screens/CategoryFigurasScreen'
import FigurasDetailScreen from '../Screens/FigurasDetailScreen'
import { COLORS } from '../Constants/Colors'

const ShopNavigation = () => {

    const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: COLORS.color1,},
      headerTintColor: COLORS.color4,
      headerTitleStyle: { fontWeight: "bold",},
      }}
    >
      <Stack.Screen 
        name='Home' 
        component={CategoriesScreen} 
        options={({navigation}) => ({
          title: "Categories",
        })}
      />
      <Stack.Screen 
        name='Figuras' 
        component={CategoryFigurasScreen} 
        options={({route}) => ({
        title: route.params.name,
        })}
      />
      <Stack.Screen 
        name='Detail' 
        component={FigurasDetailScreen}
        options={({route}) => ({
        title: route.params.name,
        })}
      />
    </Stack.Navigator>
  )
}

export default ShopNavigation

const styles = StyleSheet.create({})