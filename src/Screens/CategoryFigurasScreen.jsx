import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryFigurasScreen = ({navigation}) => {
  return (
    <View>
      <Text>CategoryFigurasScreen</Text>
      <Button title='Navegar a Detalles' onPress={() => navigation.navigate("Detail")}/>
    </View>
  )
}

export default CategoryFigurasScreen

const styles = StyleSheet.create({})