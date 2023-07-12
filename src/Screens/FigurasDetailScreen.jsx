import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { add_item } from '../Store/Actions/cart.action'

const FigurasDetailScreen = () => {

  const dispatch = useDispatch()
  const figura = useSelector(state => state.products.selected)

  const handleAddItem = () => {
    dispatch(add_item(figura))
  }

  return (
    <View style={styles.container}>
      <Text>{figura.name}</Text>
      <Text>{figura.description}</Text>
      <Text>${figura.price}</Text>
      <Button title='Add to cart' onPress={handleAddItem}/>
    </View>
  )
}

export default FigurasDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})