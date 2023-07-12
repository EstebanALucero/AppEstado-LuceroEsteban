import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FiguraItem = ({title, image, descripcion}) => {
  return (
    <View style={styles.placeItem}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.descripcion}>{descripcion}</Text>
        </View>
    </View>
  )
}

export default FiguraItem

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "red",
    },
    info: {
        marginLeft: 25,
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    title: {
        color: "blue",
        fontSize: 18,
        marginBottom: 6,
    },
    descripcion: {
        color: "#777",
        fontSize: 16,
    }
})