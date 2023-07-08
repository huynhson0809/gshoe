import React, { FC, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { icons, images, fontSizes, colors } from '../../../constants';
import Button from '../UIButton2/Button';
import { color } from 'react-native-elements/dist/helpers';
import ButtonCustom from '../ButtonCustom/ButtonCustom';

export interface CartItemProps {
    shoe?: any,
    onPress?: any,
    onPressDelete?: any
}

const CartItem: FC<CartItemProps> = (props) => {
    const { shoe, onPress, onPressDelete } = props
    // {
    //     "id": 1,
    //     "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png",
    //     "name": "Nike Air Zoom Pegasus 36",
    //     "description": "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.",
    //     "price": 108.97,
    //     "color": "#e1e7ed"
    // },
    return (
        <View style={styles().wrapper}>
            <View style={styles().cartItemLeft}>
                <Image
                    source={{ uri: shoe?.image }}
                    style={styles().shoeImage}
                />
            </View>
            <View style={styles().cartItemRight}>
                <Text style={styles().name}>
                    {shoe?.name}
                </Text>
                <Text style={styles().price}>
                    ${shoe?.price}
                </Text>
                <View style={styles().actions}>
                    <View style={styles().actionsCount}>
                        <ButtonCustom content="-" backgroundColor="#eee" isIcon />
                        <Text style={styles().count}>1</Text>
                        <ButtonCustom content="+" backgroundColor="#eee" isIcon />
                    </View>
                    <View style={styles().actionsRemove}>
                        <ButtonCustom image={icons.trashIcon} isIcon onPress={onPressDelete} shoe={shoe} />
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles = (backgroundColor?: string) => StyleSheet.create({
    wrapper: {
        paddingVertical: 20,
        flexDirection: "row"
    },
    cartItemLeft: {
        flex: 0,
        width: 90,
        height: 90,
        borderRadius: 100,
        backgroundColor: "#eee",
        marginRight: 34,
    },
    cartItemRight: {
        flex: 1,
    },
    shoeImage: {
        height: 160,
        resizeMode: "contain",
        marginRight: 15,
        borderRadius: 10,
        width: "160%",
        transform: [{ rotate: "-24deg" }, { translateY: -40 }],
        marginLeft: -16
    },
    name: {
        fontSize: fontSizes.h3,
        fontWeight: "bold",
        lineHeight: (14 * 1.5),
        marginBottom: 10,
        color: "black",
    },
    actions: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    actionsCount: {
        flexDirection: "row",
        alignItems: "center"
    },
    actionsRemove: {

    },
    price: {
        color: "#303841",
        fontWeight: "700",
        fontSize: fontSizes.h2,
        marginBottom: 16
    },
    count: {
        fontSize: fontSizes.h4,
        marginHorizontal: 8,
        textAlign: "center"
    }
});
export default CartItem