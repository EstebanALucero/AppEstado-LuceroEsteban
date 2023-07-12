import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from "expo-image-picker"

import COLORS from "../../Constants/Colors"

const ImageSelector = (props) => {

    const [pickerUri, setPickerUri] = useState()

    const verfyPermissons = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== "granted") {
            Alert.alert("Permisos son insuficientes", "Necesitamos permisos de la camara", [{text: "Ok"}])
            return false
        }
        return true
    }

    const handlerTakeImage = async () => {
        const hasPermission = await verfyPermissons();
        if (!hasPermission) return

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [19, 9],
            quality: 0.8,
        })
        setPickerUri(image.assets[0].uri)
        props.onImage(image.assets[0].uri)
    }

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickerUri ? (
            <Text>No se ha tomado foto</Text>
        ): (
            <Image source={{uri: pickerUri}} style={styles.image} />
        )}
      </View>
      <Button title="Tomar foto" onPress={handlerTakeImage} />
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    preview: {
        width: "100%",
        height: 200,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#ccc",
        borderWidth: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    }
})