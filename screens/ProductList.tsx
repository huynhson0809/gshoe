import React, { FC, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { icons, images, fontSizes, colors } from '../constants';
import { ProductItem } from '../components/ui';
import { Header } from '../components/global';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import { Items } from '../data/data';

export interface ProductListProps {
    navigation?: any,
    route?: any
}

const ProductList: FC<ProductListProps> = (props) => {
    const data = Items
    const [products, setProducts] = useState(data)
    const { navigation, route } = props
    const { navigate, goBack } = navigation

    const addToCart = async (shoe: any) => {
        try {
            let jsonValue: any = await AsyncStorage.getItem("cartItems");
            jsonValue = JSON.parse(jsonValue);
            // console.log(111, jsonValue);
            // await AsyncStorage.removeItem('cartItems');
            if (jsonValue) {
                let newArr = jsonValue
                newArr.push(shoe)
                try {
                    await AsyncStorage.setItem('cartItems', JSON.stringify(newArr));
                } catch (error) {
                    return error;
                }
            }
            else {
                let newArr = []
                newArr.push(shoe)
                try {
                    await AsyncStorage.setItem('cartItems', JSON.stringify(newArr));
                } catch (error) {
                    return error;
                }
            }

        } catch (e) {
            // error reading value
            console.log("Not working");

        }

    };

    return (
        <ImageBackground
            source={images.background}
            resizeMode='cover'
            style={{
                flex: 100
            }}>
            <Header title="Our Products" />
            <View style={styles.circle} />
            <View style={styles.container}>
                {
                    products && products.length > 0 &&
                    <FlatList
                        data={products}
                        renderItem={({ item }) => <ProductItem shoe={item} onPress={() => addToCart(item)} />}
                        keyExtractor={(eachShoe: any) => eachShoe.id}
                    />
                }
                {/* <ProductItem /> */}
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        paddingHorizontal: 28,
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
export default ProductList