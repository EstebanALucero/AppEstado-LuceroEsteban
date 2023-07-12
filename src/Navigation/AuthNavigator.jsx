import { createNativeStackNavigator } from "@react-navigation/native-stack"

import AuthScreen from "../Screens/AuthScreen"

const Stack = createNativeStackNavigator();

export default AuthNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontWeight: "bold",
                }
            }}
        >
            <Stack.Screen name="Login" component={AuthScreen}/>
        </Stack.Navigator>
    )
}