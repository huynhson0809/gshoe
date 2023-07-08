import React, { FC, useEffect, useState } from "react";
import { ProductList, CartList } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
export interface UITabProps {
    navigation?: any,
    route?: any
}
const Tab = createBottomTabNavigator()
const UITab: FC<UITabProps> = (props) => {
    const { navigation, route } = props
    const { navigate, goBack } = navigation

    return (
        <Tab.Navigator screenOptions={({ route }) =>
        ({
            headerShown: false,
            tabBarIcon: (props) => {
                const screenName = route.name === "Products" ? "home" : "shopping-cart"
                const { focused, size, color } = props
                return <Icon name={screenName} size={23} color={focused ? colors.primary : colors.placeholderColor} />
            },
            tabBarActiveBackgroundColor: "rgba(0,0,0,0.3)",
            tabBarInactiveBackgroundColor: "rgba(0,0,0,0.3)",
        })} >
            <Tab.Screen name="Products" component={ProductList} />
            <Tab.Screen name="Carts" component={CartList} />
        </Tab.Navigator>
    )
}

export default UITab
