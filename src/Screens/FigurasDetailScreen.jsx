import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const FigurasDetailScreen = () => {

  const figura = useSelector(state => state.products.selected)

  return (
    <View>
      <Text>{figura.name}</Text>
      <Text>{figura.description}</Text>
      <Text>${figura.price}</Text>
    </View>
  )
}

export default FigurasDetailScreen

const styles = StyleSheet.create({})