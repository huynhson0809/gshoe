import React, { FC, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { icons, images, fontSizes, colors } from '../constants';
import { CartItem } from '../components/ui';
import { Header } from '../components/global';
import { Items } from '../data/data';

export interface CartListProps {
    navigation?: any,
    route?: any
}

const CartList: FC<CartListProps> = (props) => {
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    const [cartItems, setCartItems] = useState<any>([])
    const [total, setTotal] = useState<any>(null)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', (e: any) => {
            // Prevent default behavior
            // e.preventDefault();
            getCarts("cartItems")
        });

        return unsubscribe;
    }, [navigation]);


    console.log(cartItems);

    // useEffect(() => {
    // }, [cartItems])
    const getCarts = async (key: string) => {
        try {
            let items: any = await AsyncStorage.getItem(key);
            items = JSON.parse(items)
            console.log(222, items);

            let productData: any = items
            setCartItems(productData);
            getTotal(productData)
        } catch (e) {
            // error reading value
            console.log("Not working");

        }
    };
    const getTotal = (productData: any) => {
        let total = 0;
        for (let index = 0; index < productData.length; index++) {
            let productPrice = productData[index].price;
            total = total + productPrice;
        }
        setTotal(total);
    };

    const removeItemFromCart = async (shoe: any) => {
        let itemArray: any = await AsyncStorage.getItem('cartItems');
        itemArray = JSON.parse(itemArray);
        console.log(444, shoe);

        if (itemArray) {
            itemArray = itemArray.filter((item: any) => {
                return item?.id != shoe?.id
            })
            console.log("afer", itemArray);

            await AsyncStorage.setItem('cartItems', JSON.stringify(itemArray));
            getCarts("cartItems")
        }
    };

    return (
        <ImageBackground
            source={images.background}
            resizeMode='cover'
            style={{
                flex: 100
            }}>
            <Header title="Your Carts" total={total} />
            <View style={styles.circle} />
            <View style={styles.container}>
                {
                    cartItems &&
                    <FlatList
                        data={cartItems}
                        renderItem={({ item }) => <CartItem shoe={item} onPressDelete={removeItemFromCart} />}
                        keyExtractor={(eachShoe: any) => eachShoe.id}
                    />
                }
            </View >
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        paddingHorizontal: 28,
        // marginBottom: 20
        zIndex: 99
    },
    circle: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1000,
        backgroundColor: "#f6c90e",
        position: "absolute",
        top: -213,
        left: -200,
        zIndex: 0
    }
})
export default CartList