import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"

import FiguraItem from '../Components/FiguraItem/FiguraItem'
import { loadFiguras } from '../Store/Actions/Figura.action'

const OrdersScreen = () => {

  const dispatch = useDispatch()
  const figura = useSelector(state => state.figuras.figuras)

  useEffect(() => {
    dispatch(loadFiguras())
  }, [])
  
  const renderFiguraItem = ({item}) => (
    <FiguraItem
    title={item.title}
    image={item.image}
    descripcion={item.descripcion}
    />
  )

  return (
    <View>
      <FlatList 
      data={figura}
      keyExtractor={item => item.id}
      renderItem={renderFiguraItem}
      />
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({})