import React, { FC } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { fontSizes } from '../../../constants';

export interface ButtonProps {
    textColor?: string,
    backgroundColor?: string,
    content?: string,
    isIcon?: boolean,
    iconName?: string,
    colorIcon?: string,
    backgroundColorIcon?: string,
    onPress?: any,
    fontWeightText?: any,
    styleButton?: any
}

const Button: FC<ButtonProps> = ({ ...props }) => {
    const { textColor = "white", backgroundColor = "transparent", content = "Default Button",
        iconName = "check-circle", isIcon = false, colorIcon = "white", backgroundColorIcon = "green",
        onPress, fontWeightText = "normal", styleButton } = props
    // debugger
    return (
        <TouchableOpacity style={{
            borderColor: 'white',
            borderWidth: 1,
            height: 60,
            borderRadius: 5,
            marginHorizontal: 10,
            marginTop: 15,
            alignItems: "center",
            backgroundColor: backgroundColor,
            flexDirection: "row",
            ...styleButton
        }}
            onPress={onPress}
        >
            <View style={{
                marginHorizontal: 20,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                position: "relative"
            }}>
                {
                    isIcon ?
                        <Icon name={iconName} size={30} color={colorIcon}
                            style={{
                                backgroundColor: backgroundColorIcon,
                                borderRadius: 1000,
                                position: "absolute",
                                left: 5,
                                top: -3
                            }} /> : <></>
                }
                <Text style={{
                    color: textColor,
                    fontSize: fontSizes.h2,
                    fontWeight: fontWeightText
                }}>{content}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
    },
});

export default Button;
