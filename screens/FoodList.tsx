import React, { FC, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, Alert, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { icons, images, fontSizes, colors } from '../constants';
import { Button, FoodItem } from '../components/ui';
import { color } from 'react-native-elements/dist/helpers';

export interface FoodListProps {

}

const FoodList: FC<FoodListProps> = (props) => {
    const [foods, setFoods] = useState([
        {
            id: 1,
            url: "https://theplanetd.com/images/Traditional-Italian-Food.jpg",
            name: "Paella Valenciana Paella Valenciana Paella Valenciana",
            status: "Opening now",
            price: 1999.12,
            website: "https://www.facebook.com/sonnn",
            socialNetworks: [
                {
                    facebook: "https://www.facebook.com/nyny",
                    instagram: "https://www.instagram.com/",
                    twitter: "https://twitter.com/twitter"
                }
            ]
        },
        {
            id: 2,
            url: "https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love.jpg",
            name: "Patatas bravas Pimientos de Padron",
            status: "Closing soon",
            price: 1111,
            website: "https://www.facebook.com/sonnn",
            socialNetworks: [
                {
                    facebook: "https://www.facebook.com/nyny",
                    instagram: "https://www.instagram.com/",
                }
            ]
        },
        {
            id: 3,
            url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/1/25/0/FN_getty-italian-traditions-pasta_s4x3.jpg.rend.hgtvcom.616.462.suffix/1453776834832.jpeg",
            name: "Gazpacho",
            status: "Coming soon",
            price: 2222.12,
            website: "https://www.facebook.com/sonnn",
            socialNetworks: [
                {
                    facebook: "https://www.facebook.com/nyny",
                }
            ]
        },
        {
            id: 4,
            url: "https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1570811374184-6HBBCBYSNFJFOXM73E0N/Spaghetti%2Bwith%2Bsea%2Burchin.jpg",
            name: "Gazpacho",
            status: "Coming soon",
            price: 2222.12,
            website: "https://www.facebook.com/sonnn",
            socialNetworks: [
                {
                    twitter: "https://twitter.com/twitter"
                }
            ]
        },
        {
            id: 5,
            url: "https://www.seriouseats.com/thmb/2ym82q6jotZOI-q0dNxkt4wgWa0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__09__20140901-naomi-tomky-vietnamese-food-hoang-lan-bun-bo-hue-2963d4244fcc495c9985a015a9b8258f.jpg",
            name: "Gazpacho",
            status: "Coming soon",
            price: 2222.12,
            website: "https://www.facebook.com/sonnn",
            socialNetworks: [
                {
                    twitter: "https://twitter.com/twitter"
                }
            ]
        },
        {
            id: 6,
            url: "https://www.seriouseats.com/thmb/qrWfzjFpy-GuWu-E5_1k_MdAk1U=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2014__09__20140901-naomi-tomky-vietnamese-food-ba-bar-pho-ee39445c9ab54e228796a2c7d8b1561e.jpg",
            name: "Gazpacho",
            status: "Coming soon",
            price: 2222.12,
            website: "https://www.facebook.com/sonnn",
            socialNetworks: [
                {
                    twitter: "https://twitter.com/twitter"
                }
            ]
        },
        {
            id: 7,
            url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/1/25/0/FN_getty-italian-traditions-pasta_s4x3.jpg.rend.hgtvcom.616.462.suffix/1453776834832.jpeg",
            name: "Gazpacho",
            status: "Coming soon",
            price: 2222.12,
            website: "https://www.facebook.com/sonnn",
            socialNetworks: [
                {
                    twitter: "https://twitter.com/twitter"
                }
            ]
        },
    ])
    return (
        <View style={styles.container}>
            {/* <ScrollView>
                {
                    foods && foods.length > 0 && foods.map((eachFood: any) => {
                        return (
                            <FoodItem key={eachFood.id} food={eachFood} />
                        )
                    })
                }
            </ScrollView> */}
            {
                foods && foods.length > 0 &&
                <FlatList
                    data={foods}
                    renderItem={({ item }) => <FoodItem food={item} onPress={() => {
                        Alert.alert(`Click food's name: ${item?.name}`)
                    }} />}
                    keyExtractor={(eachFood: any) => eachFood.id}
                />
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    }
})
export default FoodList