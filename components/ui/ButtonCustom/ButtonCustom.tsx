import React, { FC, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { fontSizes } from '../../../constants';

export interface ButtonCustomProps {
    isIcon?: boolean,
    isNotHover?: boolean,
    image?: any,
    backgroundColor?: string,
    content?: string,
    onPress?: any,
    shoe?: any
}

const ButtonCustom: FC<ButtonCustomProps> = ({ ...props }) => {
    let { isIcon, isNotHover, image, backgroundColor, content, onPress, shoe } = props
    const [show, setShow] = useState(false)
    return (
        <>
            {
                isNotHover ?
                    <View style={styles(isIcon).wrapper}>
                        <Image style={styles().imageIcon} source={image} />
                    </View> :
                    <TouchableOpacity style={styles(isIcon, isNotHover, backgroundColor).wrapper}
                        onPress={() => {
                            onPress(shoe)
                            setShow(true)
                        }}
                    >
                        {
                            show ? <Image style={styles().imageIcon} source={image} /> :
                                isIcon && !content ? <Image style={styles().imageIcon} source={image} />
                                    : <Text style={styles().title}>{content ? content : "add to card"}</Text>
                        }
                    </TouchableOpacity>
            }
        </>
    )
}

const styles = (isIcon?: boolean, isNotHover?: boolean, backgroundColor?: string) => StyleSheet.create({
    wrapper: {
        minWidth: 46,
        minHeight: 46,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: backgroundColor ? backgroundColor : '#f6c90e',
        paddingHorizontal: !isIcon ? 20 : 0,
        paddingVertical: !isIcon ? 16 : 0,
    },
    title: {
        textTransform: "uppercase",
        color: "#303841",
        fontWeight: "700",
        fontSize: fontSizes.h3
    },
    imageIcon: {
        width: 20,
        height: 20,
    }
});

export default ButtonCustom;
