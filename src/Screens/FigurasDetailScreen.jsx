import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FigurasDetailScreen = ({route}) => {

  const figura = route.params.produc

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