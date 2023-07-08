import React, { FC } from "react";
import { ProductList, CartList } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UITab from "./UITab";
export interface AppProps {

}
const Stack = createNativeStackNavigator()
const App: FC<AppProps> = (props) => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UITab" screenOptions={{
                headerShown: false,
            }}>
                {/* screens: welcome, register, login */}
                <Stack.Screen name="UITab" component={UITab} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
