import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ProductsItem from '../Components/ProductsItem'
import { COLORS } from '../Constants/Colors'
import { filteredProduct, selectedFigura } from "../Store/Actions/products.action"

const CategoryFigurasScreen = ({navigation}) => {

  const filteredProducts = useSelector(state => state.products.filteredProduct)
  const categorySelected = useSelector(state => state.categories.selected)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filteredProduct(categorySelected.id))
  }, [])

  const handleSelectedProduct = (item) => {
    dispatch(selectedFigura(item.id))
    navigation.navigate('Detail', {
      produc: item,
      name: item.name,
    })
  }

  const renderProductItem = ({item}) => (
    <View style={styles.productItem}>
      <ProductsItem item={item} onSelected={handleSelectedProduct}/>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList 
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  )
}

export default CategoryFigurasScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productItem: {
    height: 300,
    width: 150,
    backgroundColor: COLORS.color5,
    margin: 10,
  }
})