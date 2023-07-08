import React, { FC, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { icons, images, fontSizes, colors } from '../../../constants';
import Button from '../UIButton2/Button';
import { color } from 'react-native-elements/dist/helpers';
import ButtonCustom from '../ButtonCustom/ButtonCustom';

export interface ProductItemProps {
    shoe?: any,
    onPress?: any,
}

const ProductItem: FC<ProductItemProps> = (props) => {
    const { shoe, onPress } = props


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
            <View style={styles(shoe?.color).imageWrapper}>
                <Image
                    source={{ uri: shoe?.image }}
                    style={styles().shoeImage}
                />
            </View>
            <Text style={styles().name}>
                {shoe?.name}
            </Text>
            <Text style={styles().description}>
                {shoe?.description}
            </Text>
            <View style={styles().itemBottom}>
                <Text style={styles().price}>${shoe?.price}</Text>
                <ButtonCustom image={icons.checkIcon} onPress={onPress} shoe={shoe} />
            </View>
        </View>
    )
}
const styles = (backgroundColor?: string) => StyleSheet.create({
    wrapper: {
        // paddingTop: 10,
        paddingBottom: 30,
    },
    imageWrapper: {
        borderRadius: 30,
        height: 380,
        // alignItems: "center",
        overflow: "hidden",
        backgroundColor: backgroundColor,
    },
    shoeImage: {
        height: 380,
        resizeMode: "cover",
        marginRight: 15,
        borderRadius: 10,
        width: "100%",
        transform: [{ rotate: "-24deg" }],
        marginLeft: -16
    },
    name: {
        fontSize: fontSizes.h1Large,
        fontWeight: 'bold',
        lineHeight: 45,
        marginTop: 26,
        marginBottom: 20,
        color: "black",
        textAlign: "center"
    },
    description: {
        fontSize: fontSizes.h4,
        color: "#777",
        marginBottom: 20,
        lineHeight: 16 * 1.8
    },
    itemBottom: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    price: {
        color: "#303841",
        fontWeight: "700",
        fontSize: fontSizes.h3
    }
});
export default ProductItem