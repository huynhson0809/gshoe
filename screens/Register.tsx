import React, { FC, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { icons, images, fontSizes, colors } from '../constants';
import { Button } from '../components/ui';
import { color } from 'react-native-elements/dist/helpers';
import { isValidEmail, isValidPassword } from '../utils/validation';

export interface RegisterProps {

}

const Register: FC<RegisterProps> = (props) => {
    const [keyboardIsShow, setKeyBoardIsShow] = useState(false)
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorRepeatPassword, setErrorRepeatPassword] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setKeyBoardIsShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setKeyBoardIsShow(false)
        })
    }, [keyboardIsShow])

    const handleClickRegister = () => {
        const checkRepeatPass = password === repeatPassword
        if (!isValidEmail(email)) {
            setErrorEmail("Please input valid email")
        }
        if (!isValidPassword(password)) {
            setErrorPassword("Password must be at least 6 characters")
        }
        if (!checkRepeatPass) {
            setErrorRepeatPassword("Password do not match")
        }
        if (isValidEmail(email) && isValidPassword(password) && checkRepeatPass) {
            Alert.alert("Successful")
        }
    }
    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{
                flexDirection: "row",
                flex: 30,
                alignItems: "center",
                paddingHorizontal: 20
            }}>
                <Text style={{
                    color: "white",
                    fontSize: fontSizes.h1Large,
                    fontWeight: "bold",
                    width: '50%',
                    // flex: 1
                }}>Already have an Account?</Text>
                <Image source={images.computer} style={{
                    height: 150,
                    width: 200,
                    resizeMode: "contain",
                }}
                ></Image>
            </View>
            <View style={{
                flex: 50,
                backgroundColor: "white",
                justifyContent: "center",
                margin: 10,
                borderRadius: 20
            }}>
                <View style={{
                    marginHorizontal: 20
                }}>
                    <Text style={{
                        fontSize: fontSizes.h3,
                        color: colors.primary
                    }}
                    >Email</Text>
                    <TextInput placeholder='example@gmail.com'
                        placeholderTextColor={colors.placeholderColor}
                        style={{
                            fontSize: fontSizes.h3,
                            borderBottomWidth: 1,
                            borderBottomColor: colors.primary
                        }}
                        value={email}
                        onChangeText={(text) => {
                            setEmail(text)
                            setErrorEmail('')
                        }}
                    />
                    {
                        errorEmail &&
                        <Text style={{
                            color: "red",
                            fontSize: fontSizes.h6
                        }}>{errorEmail}</Text>
                    }
                </View>
                <View style={{
                    marginHorizontal: 20,
                    marginTop: 10
                }}>
                    <Text style={{
                        fontSize: fontSizes.h3,
                        color: colors.primary,
                    }}>Password</Text>
                    <TextInput placeholder='Enter your password'
                        secureTextEntry={true}
                        placeholderTextColor={colors.placeholderColor}
                        style={{
                            fontSize: fontSizes.h3,
                            borderBottomWidth: 1,
                            borderBottomColor: colors.primary
                        }}
                        value={password}
                        onChangeText={(text) => {
                            setPassword(text)
                            setErrorPassword('')
                        }}
                    />
                    {
                        errorPassword &&
                        <Text style={{
                            color: "red",
                            fontSize: fontSizes.h6
                        }}>{errorPassword}</Text>
                    }
                </View>
                <View style={{
                    marginHorizontal: 20,
                    marginTop: 10
                }}>
                    <Text style={{
                        fontSize: fontSizes.h3,
                        color: colors.primary,
                    }}>Repeat password</Text>
                    <TextInput placeholder='Enter your password'
                        secureTextEntry={true}
                        placeholderTextColor={colors.placeholderColor}
                        style={{
                            fontSize: fontSizes.h3,
                            borderBottomWidth: 1,
                            borderBottomColor: colors.primary
                        }}
                        value={repeatPassword}
                        onChangeText={(text) => {
                            setRepeatPassword(text)
                            setErrorRepeatPassword('')
                        }}
                    />
                    {
                        errorRepeatPassword &&
                        <Text style={{
                            color: "red",
                            fontSize: fontSizes.h6
                        }}>{errorRepeatPassword}</Text>
                    }
                </View>
                {
                    keyboardIsShow === false && <View style={{
                        width: "70%",
                        alignSelf: "center",
                        marginTop: 10
                    }}>
                        <Button content='Register' backgroundColor={colors.primary} styleButton={{
                            borderRadius: 30,
                        }}
                            onPress={handleClickRegister}
                        />
                    </View>
                }
            </View>
            {
                keyboardIsShow === false && <View style={{
                    flex: 20,
                    // backgroundColor: "red",
                }}>
                    <View style={{
                        height: 40,
                        alignItems: "center",
                        flexDirection: "row",
                        marginHorizontal: 30
                    }}>
                        <View style={{ height: 1, backgroundColor: "white", flex: 1 }} />
                        <Text style={{
                            color: "white",
                            alignSelf: "center",
                            fontSize: fontSizes.h5,
                            marginHorizontal: 10,
                            fontWeight: "bold"
                        }}>User other method?</Text>
                        <View style={{ height: 1, backgroundColor: "white", flex: 1 }} />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: "center",
                        alignSelf: "center"
                    }}>
                        <Icon name="facebook" size={35} color={colors.facebook} style={{
                            marginRight: 10
                        }} />
                        <Icon name="google" size={35} color={colors.google} />
                    </View>
                </View>
            }
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 100,
        backgroundColor: colors.primary
        // justifyContent: "center",
        // alignItems: "center",
    },
});

export default Register;
