import React, { FC, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { icons, images, fontSizes, colors } from '../../../constants';
import Button from '../UIButton2/Button';
import { color } from 'react-native-elements/dist/helpers';

export interface FoodItemProps {
    food?: any,
    onPress?: any
}

const FoodItem: FC<FoodItemProps> = (props) => {
    const { food, onPress } = props

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                height: 150,
                // backgroundColor: "green",
                paddingVertical: 10,
                paddingLeft: 20,
                flexDirection: "row",
                marginRight: 10,
                marginTop: 10
            }}>
            <Image
                source={{ uri: food?.url }}
                style={{
                    height: 100,
                    width: 100,
                    resizeMode: "cover",
                    marginRight: 15,
                    borderRadius: 10
                }}
            />
            <View style={{
                // backgroundColor: "red",
                flex: 1
            }}>
                <Text style={{
                    color: "black",
                    fontSize: fontSizes.h4,
                    fontWeight: "bold"
                }}>{food?.name}</Text>
                <View style={{
                    backgroundColor: "black",
                    height: 1, width: "100%"
                }} />
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "gray" }}>Status:</Text>
                    <Text style={{
                        color: food?.status === "Opening now" ? colors.success : food?.status === "Closing soon"
                            ? colors.alert : food?.status === "Coming soon" ? colors.warning : "black"
                    }}> {food?.status?.toUpperCase()}</Text>
                </View>
                <Text style={{ color: "gray" }}>Price: {food?.price}$</Text>
                <Text style={{ color: "gray" }}>Food Type: Pizza</Text>
                <Text style={{ color: "gray" }}>Website: {food?.website}</Text>
                <View style={{
                    flexDirection: "row",
                    gap: 10,
                    justifyContent: "flex-start"
                }}>
                    {food?.socialNetworks?.[0]?.facebook && <Icon name="facebook" size={18} color="gray" />}
                    {food?.socialNetworks?.[0]?.instagram && <Icon name="instagram" size={18} color="gray" />}
                    {food?.socialNetworks?.[0]?.twitter && <Icon name="twitter" size={18} color="gray" />}
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default FoodItem