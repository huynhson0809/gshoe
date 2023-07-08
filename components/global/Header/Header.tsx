import React, { FC, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { icons, images, fontSizes, colors } from '../../../constants';

export interface HeaderProps {
    title?: string,
    total?: number
}

const Header: FC<HeaderProps> = (props) => {
    const { title, total } = props
    return (
        <View style={styles.wrapper}>
            <View style={{ zIndex: 9999 }}>
                <Image
                    source={icons.nikeIcon}
                    style={styles.logo}
                    resizeMode='contain'
                />

            </View>
            <View style={{ zIndex: 9999, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{
                    color: "#303841",
                    fontSize: fontSizes.h1Large,
                    fontWeight: "bold",

                }}>{title}</Text>
                <Text style={{
                    color: "#303841",
                    fontSize: fontSizes.h1Large,
                    fontWeight: "bold",

                }}>${total}</Text>
            </View>
            <View style={styles.circle} />
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 0,
        backgroundColor: "#fff",
        height: 130,
        paddingHorizontal: 28,
        zIndex: 1
    },
    logo: {
        height: 70,
        width: 60,
        // zIndex: 999
    },
    circle: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1000,
        backgroundColor: "#f6c90e",
        position: "absolute",
        top: -91,
        left: -168,
        // zIndex: -999
    }
});
export default Header