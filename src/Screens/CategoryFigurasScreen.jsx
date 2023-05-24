import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'

import { PRODUCTS } from "../Data/Products"
import ProductsItem from '../Components/ProductsItem'
import { COLORS } from '../Constants/Colors'

const CategoryFigurasScreen = ({navigation, route}) => {

  const figuras = PRODUCTS.filter(figura => figura.category === route.params.categoryId)

  const handleSelectedProduct = (item) => {
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
        data={figuras}
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