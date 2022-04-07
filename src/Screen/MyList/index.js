import React, { useState, useEffect, useContext } from 'react';
import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import PlaySmallIcon from '../../Icons/PlaySmallIcon'
import { styles } from './styles';
import { AuthContext } from "../../Redux/AuthContext";
import ListMyList from '../../Components/ListMyList';

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

    return (
        <View style={styles.viewMain}>
            {console.log(token)}
            <View style={styles.view1}>
                <Text style={styles.textHeader}>My List</Text>
            </View>
            <ListMyList
                    data={dataMyList}
                />

        </View>
    );

}
export default MyList;
