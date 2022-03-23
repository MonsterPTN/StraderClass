import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import SearchIcon from '../../Icons/SearchIcon2'
import MicIcon from '../../Icons/MicIcon'
import PlaySmallIcon from '../../Icons/PlaySmallIcon'
import { styles } from './styles';
import ListCourseSearch from '../../Components/ListCourseSearch'
const SearchScreen = () => {
    const [dataSearch, setDataSearch] = useState([]);
    const [value, onChangeText] = useState('')

    useEffect(() => {
        getListSearch();
        return () => {

        }
    }, [])

    getListSearch = () => {
        const apiURL = `https://traderclass.vn/api/search-course?key=${value}`;
        fetch(apiURL)
            .then((res) => res.json())
            .then((resJson) => {
                setDataSearch(resJson.data);
            }).catch((error) => {
                console.log('Request API ERROR', error);
            }).finally(() => setisLoading(false))
    }
    return (
        <View style={styles.viewMain}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Search</Text>
            </View>
            <View style={styles.viewSearch}>
                <View style={styles.view1}>
                    <MicIcon />
                    <TextInput style={styles.textInput} placeholder="Search"
                        onChangeText={text => onChangeText(text)}
                        value={value}>
                    </TextInput>
                    <TouchableOpacity onPress={()=> getListSearch()}>
                <SearchIcon />
                </TouchableOpacity>
                </View>

            </View>
            <Text style={styles.textTitle}>Top Search</Text>
            <ScrollView >
                <StatusBar style="auto" />

            <ListCourseSearch
            data = {dataSearch}/>

            </ScrollView>
        </View>
    );

}
export default SearchScreen;