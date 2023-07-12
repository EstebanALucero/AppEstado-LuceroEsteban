import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PedidoScreen from "../Screens/PedidoScreen";

const Stack = createNativeStackNavigator();

export default PedidoNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontWeight: "bold",
                }
            }}
        >
            <Stack.Screen name="Pedido" component={PedidoScreen}/>
        </Stack.Navigator>
    )
}