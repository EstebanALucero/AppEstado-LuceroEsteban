import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addFigura } from '../Store/Actions/Figura.action'
import ImageSelector from '../Components/ImageSelector/ImageSelector'

const PedidoScreen = ({ navigation }) => {

    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [image, setImage] = useState()
    const [descripcion, setDescripcion] = useState("")

    const handleTitleChange = (text) => setTitle(text)
    const handleDescripcionChange = (text) => setDescripcion(text)

    const handleSave = () => {
        dispatch(addFigura(title, image, descripcion))
        navigation.navigate("OrdersTab")
    }

  return (
    <ScrollView>
        <View style={styles.container} >
            <Text style={styles.label} >Titulo</Text>
            <TextInput style={styles.input} value={title} onChangeText={handleTitleChange} />
            <ImageSelector onImage={setImage} />
            <Text style={styles.label} >Describa su pedido</Text>
            <TextInput style={styles.descripcion} value={descripcion} onChangeText={handleDescripcionChange} />
            <Button title='Guardar' onPress={handleSave} />
        </View>
    </ScrollView>
  )
}

export default PedidoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 16,
  },
  input: {
    borderBottomColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
  descripcion: {
    borderBottomColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
    width: "100%",
    height: 100,
  }
})