import React, { useState, useEffect, useContext } from 'react';
import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import PlaySmallIcon from '../../Icons/PlaySmallIcon'
import { styles } from './styles';
import { AuthContext } from "../../Redux/AuthContext";

const MyList = () => {
    const { token } = useContext(AuthContext)
    const [dataMyList, setDataMyList] = useState([]);
    const [isloading, setisLoading] = useState(true);
    useEffect(() => {
        getMyList();
        return () => {
        }
    }, [])

    const getMyList = () => {
        const apiURL = 'https://traderclass.vn/api/my-course';
        fetch(apiURL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token != "" ? `Bearer ${token.userToken}` : ""
            },
        })
            .then((res) => res.json())
            .then((resJson) => {
                setDataMyList(resJson.data);
            }).catch((error) => {
                console.log('Request API ERROR', error);
            }).finally(() => setisLoading(false))
    }
    renderItem = ({ item, index }) => {
        return (

            <View style={{ flexDirection: 'row', marginBottom: 6, backgroundColor: '#000000', justifyContent: 'center', padding:5 }}>

                <View style={{ flexDirection: 'row', flex:1,alignItems:'center' }}>
                    <Image source={require('../../Static/Image/imageSearch.png')}></Image>
                    <View style={{ justifyContent: 'space-between', paddingHorizontal: 8, flex:1,flexDirection:'row',alignItems:'center'}}>
                        <Text numberOfLines={2} style={styles.text3}>{item.name}</Text>
                        <PlaySmallIcon />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', marginRight: 9 }}>

                </View>
            </View>

        )
    }

    return (
        <View style={{ backgroundColor: '#171921', paddingRight: 15, paddingLeft: 15, flex:1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 25, justifyContent: 'center', paddingBottom: 80 }}>
                <Text style={styles.textHeader}>My List</Text>
            </View>
            <FlatList
                    data={dataMyList}
                    renderItem={renderItem}
                />

        </View>
    );

}
export default MyList;
