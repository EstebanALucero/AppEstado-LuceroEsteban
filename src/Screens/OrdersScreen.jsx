import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { ORDERS } from '../Data/Orders'
import OrderItem from '../Components/OrderItem'

const OrdersScreen = () => {

    const handeleDeleteOrder = () => {
        console.log("Eliminar orden")
    }

    const renderOrderItem = ({ item }) => (
        <OrderItem item={item} onDelete={handeleDeleteOrder}/>
    )

  return (
    <View>
      <FlatList 
      data={ORDERS}
      keyExtractor={item => item.id}
      renderItem={renderOrderItem}
      />
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({})