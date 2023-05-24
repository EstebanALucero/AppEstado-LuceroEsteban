import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CartScreen from "../Screens/CartScreen";

const Stack = createNativeStackNavigator();

export default CarNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontWeight: "bold",
                }
            }}
        >
            <Stack.Screen name="Cart" component={CartScreen}/>
        </Stack.Navigator>
    )
}