import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import Ionicons from '@expo/vector-icons/Ionicons'
import styles from './styles'

const formatDay = date => {
    const newDate = new Date(date)
    return newDate.toLocaleDateString()
}

const OrderItem = ({ item, onDelete}) => {
  return (
    <View style={styles.order}>
      <View>
        <Text style={styles.date}>{formatDay(item.data)}</Text>
        <Text style={styles.total}>Total: ${item.total}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Ionicons name="md-trash" color={"red"} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderItem