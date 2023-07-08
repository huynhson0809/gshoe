import React, { FC, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { icons, images, fontSizes, colors } from '../constants';
import { Button } from '../components/ui';
import { color } from 'react-native-elements/dist/helpers';
import { isValidEmail, isValidPassword } from '../utils/validation';

export interface LoginProps {

}

const Login: FC<LoginProps> = (props) => {
    const [keyboardIsShow, setKeyBoardIsShow] = useState(false)
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setKeyBoardIsShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setKeyBoardIsShow(false)
        })
    }, [keyboardIsShow])

    const handleClickLogin = () => {
        if (!isValidEmail(email)) {
            setErrorEmail("Please input valid email")
        }
        if (!isValidPassword(password)) {
            setErrorPassword("Password must be at least 6 characters")
        }
        if (isValidEmail(email) && isValidPassword(password)) {
            Alert.alert("Successful")
        }
    }
    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={{
                flexDirection: "row",
                flex: 35,
                // backgroundColor: "green",
                alignItems: "center",
                paddingHorizontal: 20
            }}>
                <Text style={{
                    color: "black",
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
                flex: 45,
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
                    width: "70%",
                    alignSelf: "center",
                    marginTop: 10
                }}>
                    <Button content='Login' backgroundColor={colors.primary} styleButton={{
                        borderRadius: 30,
                    }}
                        onPress={handleClickLogin}
                    />
                </View>
                <TouchableOpacity style={{
                    padding: 5
                }}
                    onPress={() => Alert.alert("Click")}
                >
                    <Text style={{
                        color: colors.primary,
                        alignSelf: "center",
                        fontSize: fontSizes.h5,
                        marginTop: 6
                    }}>New User? Register Now</Text>
                </TouchableOpacity>
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
                        <View style={{ height: 1, backgroundColor: "black", flex: 1 }} />
                        <Text style={{
                            color: "black",
                            alignSelf: "center",
                            fontSize: fontSizes.h5,
                            marginHorizontal: 10,
                            fontWeight: "bold"
                        }}>User other method?</Text>
                        <View style={{ height: 1, backgroundColor: "black", flex: 1 }} />
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
        backgroundColor: "white"
        // justifyContent: "center",
        // alignItems: "center",
    },
});

export default Login;
