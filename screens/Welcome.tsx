import React, { FC, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { icons, images, fontSizes, colors } from '../constants';
import { Button } from '../components/ui';

export interface WelcomeProps {

}

const Welcome: FC<WelcomeProps> = (props) => {

    const [accountType, setAccountType] = useState([
        {
            id: 1,
            name: "Influencer",
            isSelected: true
        },
        {
            id: 2,
            name: "Business",
            isSelected: false
        },
        {
            id: 3,
            name: "Indivitual",
            isSelected: false
        },
    ])
    return (
        <View style={styles.container}>
            <ImageBackground
                source={images.background}
                resizeMode='cover'
                style={{
                    flex: 100
                }}
            >

                <View style={{
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: "space-between",
                    height: 50,
                    flex: 10
                    // backgroundColor: "blue",
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: 'center',
                        justifyContent: "space-between",
                    }}>
                        <Image source={icons.logo} style={{ marginLeft: 10, width: 60, height: 60, resizeMode: "contain" }} />
                        <Text style={{ color: "white", marginLeft: 20, fontSize: 20 }}>First App</Text>
                    </View>
                    <Icon name={"question-circle"} size={30} color={"white"}
                        style={{ width: 30, height: 40, marginRight: 10 }} />
                    {/* <View>
                        <Image source={icons.iconQuestion}
                            style={{ width: 30, height: 40 }}
                        />
                    </View> */}
                </View>
                <View style={{
                    flex: 20,
                    // backgroundColor: "green",
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10
                }}>
                    <Text style={styles.textWelcome}>Welcome to</Text>
                    <Text style={[styles.textWelcome, {
                        fontWeight: 'bold',
                        fontSize: fontSizes.h2
                    }]}>ATSSEEDS.COM</Text>
                    <Text style={styles.textWelcome}>Please select your account type</Text>
                </View>
                <View style={{
                    flex: 40,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    {
                        accountType && accountType.length > 0 && accountType.map((item: any) => {
                            return (
                                <Button content={item.name} isIcon={item.isSelected} key={item.id}
                                    onPress={() => {
                                        const newAccountType = accountType.map((item2) => {
                                            return {
                                                ...item2,
                                                isSelected: item.id === item2.id
                                            }
                                        })
                                        setAccountType(newAccountType)
                                    }}
                                    backgroundColor={item.isSelected ? "white" : 'transparent'} iconName={item.isSelected ? "check-circle" : ''}
                                    colorIcon={item.isSelected ? "white" : ''} textColor={item.isSelected ? "black" : 'white'}
                                    backgroundColorIcon={item.isSelected ? "green" : ''}
                                />
                            )
                        })
                    }
                </View>
                <View style={{
                    flex: 30,
                    justifyContent: "center",

                }}>
                    <Button content='LOGIN' fontWeightText="600" />
                    <Text style={[styles.textWelcome, {
                        marginTop: 10,
                        alignSelf: "center"
                    }]}>Want to register new Account?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            Alert.alert("Pressed Register")
                        }}
                        style={{
                            padding: 10
                        }}
                    >
                        <Text style={[styles.textWelcome, {
                            alignSelf: "center",
                            textDecorationLine: "underline",
                            color: colors.primary,
                            fontWeight: "bold",
                            fontSize: fontSizes.h3
                        }]}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
    },
    textWelcome: {
        color: "white",
        fontSize: fontSizes.h4
    }
});

export default Welcome;
