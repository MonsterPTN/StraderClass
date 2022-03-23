import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import SearchIcon from '../Icon/SearchIcon'
import MicIcon from '../Icon/MicIcon'
import PlaySmallIcon from '../Icon/PlaySmallIcon'


const SearchScreen = () => {
    const [dataSearch, setDataSearch ] = useState([]);

    useEffect(() => {
        getListSearch();
        return () => {
    
        }
      }, [])

      getListSearch = () => {
        const apiURL = 'https://traderclass.vn/api/search-course?key=lap';
        fetch(apiURL)
          .then((res) => res.json())
          .then((resJson) => {
            setDataSearch(resJson.data);
          }).catch((error) => {
            console.log('Request API ERROR', error);
          }).finally(() => setisLoading(false))
      }

    renderItem = ({ item, index }) => {
        return (

            <View style={styles.viewItem}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../Image/imageSearch.png')}></Image>
                    <View style={{ justifyContent: 'center', marginLeft: 24 }}>
                        <Text style={styles.text3}>{item.fullname}</Text>
                        <Text style={styles.text5}>{item.position}</Text>

                    </View>
                </View>
                <View style={{ justifyContent: 'center', marginRight: 9 }}>
                    <PlaySmallIcon />
                </View>
            </View>

        )
    }

    return (
        <View style={{ backgroundColor: '#171921', paddingRight: 15, paddingLeft: 15, flex:1 }}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Search</Text>
            </View>
            <View style={styles.viewSearch}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <SearchIcon />
                    <TextInput style={{ backgroundColor: '#333333' }} placeholder="Search" >
                    </TextInput>
                </View>
                <MicIcon />
            </View>
            <Text style={styles.textTitle}>Top Search</Text>
            <ScrollView style = {{marginBottom:80}} >
                <StatusBar style="auto" />


                <FlatList
                    data={dataSearch}
                    renderItem={renderItem}
                />

            </ScrollView>
        </View>
    );

}
export default SearchScreen;
const styles = StyleSheet.create({
    textHeader: {
        textAlign: 'center',
        color: 'white',
        fontSize: 19,
        fontFamily: 'Poppins',
        fontWeight: 'bold',


    },
    textTitle: {
        color: '#EF8D21',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 25,
        marginBottom: 16
    },
    text3: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        paddingBottom: 4
    },
    text5: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        paddingTop: 4
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        justifyContent: 'center',
        paddingBottom: 20
    },
    viewItem: {
        flexDirection: 'row',
        marginBottom: 6,
        backgroundColor: '#000000',
        justifyContent: 'space-between'
    },
    viewSearch: {
        backgroundColor: '#333333',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15
    }
});