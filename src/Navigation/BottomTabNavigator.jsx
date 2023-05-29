import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionincons from "@expo/vector-icons/Ionicons"

import CartNavigator from "./CartNavigator";
import ShopNavigation from "./ShopNavigation";
import OrdersNavigator from "./OrdersNavigator";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
    return (
        <BottomTabs.Navigator 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                }}
            >
            <BottomTabs.Screen 
                name="ShopNavigator" 
                component={ShopNavigation} 
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Ionincons name="home" size={30} color="black"/>
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen 
                name="Carrito" 
                component={CartNavigator}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Ionincons name="cart" size={30} color="black"/>
                        </View>
                    )
                }} 
            />
            <BottomTabs.Screen 
                name="OrdersTab" 
                component={OrdersNavigator}
                options={{
                    tabBarIcon: () => (
                        <View>
                            <Ionincons name="list" size={30} color="black"/>
                        </View>
                    )
                }} 
            />
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "#fff",
        paddingTop: 15,
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        height: 85,
        position: "absolute",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
})