import { Alert, Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useReducer, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { singUp } from '../Store/Actions/auth.action'
import Input from '../Components/Input'

const FROM_INPUT_UPDATE = "FROM_INPUT_UPDATE"

const fromReducer = (state, action) => {
  if (action.type === FROM_INPUT_UPDATE) {
    const updateValues = {
      ...state.inputValues,
      [action.input]: action.value
    }
    const updateValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    }
    let updateFromIsValid = true
    for (const key in updateValidities) {
      updateFromIsValid = updateFromIsValid && updateFromIsValid[key]
    }
    return {
      inputValues: updateValues,
      inputValidities: updateValidities,
      formIsValid: updateFromIsValid,
    }
  }
  return state
}

const AuthScreen = () => {

    const dispatch = useDispatch()
    const [error, setError] = useState(null)

    useEffect(() => {
    if (error) {
      Alert.alert("A ocurrido un error", error, [{text: "ok"}])
    }
    }, [error])

    const [formState, dispatchFormState] = useReducer(fromReducer, {
      inputValues: {
        email: "",
        password: "",
      },
      inputValidities: {
        email: false,
        password: false,
      },
      formIsValid: false,
    })
    
    const handleSingUp = () => {
        //dispatch(singUp(email, password))
        if(!formState.formIsValid) {
          dispatch(singUp(formState.inputValues.email, formState.inputValues.password))
        } else {
          Alert.alert("Formulario invalido", "Ingrese email y passwor validos",[{text: "ok"}])
        }
    }

    const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
      console.log(inputIdentifier, inputValue, inputValidity);
      dispatchFormState({
        type: FROM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    }, [dispatchFormState])

  return (
    <KeyboardAvoidingView 
    style={styles.mainContainer} 
    behavior='padding'
    keyboardVerticalOffset={50}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Figuras</Text>
      <Text style={styles.title}>Create account</Text>
      <View>
        <Input 
        id="email" 
        label="Email" 
        keyboardType="email-address" 
        autoCapitalize="none" 
        autoCorrect={false} 
        returnKeyType="next" 
        requiered 
        email 
        errorText={"Por favor ingrese un email valido"} 
        onInputChange={onInputChangeHandler} 
        initialValue="" 
        />
        <Input 
        id="password" 
        label="Password" 
        keyboardType="default" 
        autoCapitalize="none" 
        autoCorrect={false} 
        requiered 
        password 
        secureTextEntry 
        errorText={"Por favor ingrese una contraseña valido"} 
        onInputChange={onInputChangeHandler} 
        initialValue="" 
        />
      </View>
      <View>
        <View style={styles.footer}>
            <Button title='Registrarse' onPress={handleSingUp} />
        </View>
        <View>
            <Button title='Iniciar sesion' onPress={() => console.log("Iniciar")} />
        </View>
      </View>
    </View>
    </KeyboardAvoidingView>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    container: {
        width: "80%",
        maxWidth: 400,
        backgroundColor: "white",
        height: "50%",
        padding: 12,
    },
    footer: {
        marginTop: 42,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})