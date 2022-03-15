import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView, ImageBackground, SectionList, FlatList } from 'react-native';
import UserIcon from './Icon/UserIcon';
import { Colors } from './Color/Color';
import NonIcon from './Icon/NonIcon';
import RectangleIcon from './Icon/RectangleIcon'
import LinearGradient from 'react-native-linear-gradient';
import PlayIcon from './Icon/PlayIcon'
import ShareIcon from './Icon/ShareIcon'
import WishIcon from './Icon/WishIcon'
import { SwiperFlatList } from 'react-native-swiper-flatlist';


const Flat = () => {
    const [data, setData] = useState([]);
    const [isloading, setisLoading] = useState(true);


    useEffect(() => {
        getListPhotos();
        return () => {

        }
    }, [])

    getListPhotos = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/photos?_limit=20_page=1';
        fetch(apiURL)
            .then((res) => res.json())
            .then((resJson) => {
                setData(resJson);
            }).catch((error) => {
                console.log('Request API ERROR', error);
            }).finally(() => setisLoading(false))
    }

    renderItem = ({ item, index }) => {
        return (
            <View style={styles.item}>
                <Image style={styles.image}
                    source={{ uri: item.url }}
                    resizeMode='contain'
                ></Image>
            </View>
        )
    }
    return (

        <ScrollView>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    horizontal
                />
            </SafeAreaView>
        </ScrollView>

    );
}


// const styles = StyleSheet.create({

// });
export default Flat;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        borderWidth: 0.5,
        padding: 8,
        borderRadius: 10,
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100
    }
})