import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import SearchIcon from '../../Icons/SearchIcon2'
import MicIcon from '../../Icons/MicIcon'
import PlaySmallIcon from '../../Icons/PlaySmallIcon'
import { styles } from './styles';
import ListCourseSearch from '../../Components/ListCourseSearch'
import Voice from '@react-native-community/voice';
import { Colors } from '../../Until/Colors';
const SearchScreen = (props) => {
    const [dataSearch, setDataSearch] = useState([]);
    const [value, onChangeText] = useState('')

    const [result, setResult] = useState('')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        Voice.onSpeechStart = onSpeechStartHandler;
        Voice.onSpeechEnd = onSpeechEndHandler;
        Voice.onSpeechResults = onSpeechResultsHandler;

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        }
    }, [])

    const onSpeechStartHandler = (e) => {
        console.log("start handler==>>>", e)
    }
    const onSpeechEndHandler = (e) => {
        setLoading(false)
        console.log("stop handler", e)
    }

    const onSpeechResultsHandler = (e) => {
        let text = e.value[0]
        setResult(text)
        console.log("speech result handler", e)
    }

    const startRecording = async () => {
        setLoading(true)
        try {
            await Voice.start('vi-VN')
        } catch (error) {
            console.log("error raised", error)
        }
    }

    // const stopRecording = async () => {
    //     try {
    //         await Voice.stop()
    //     } catch (error) {
    //         console.log("error raised", error)
    //     }
    // }

    useEffect(() => {
        getListSearch();
        return () => {

        }
    }, [])

    getListSearch = () => {
        const apiURL = `https://traderclass.vn/api/search-course?key=${result}`;
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
                    {isLoading ? <ActivityIndicator size="small" color = {Colors.second} />

                        :
                        <TouchableOpacity
                            onPress={startRecording}
                        >
                            <MicIcon />
                        </TouchableOpacity>}

                    <TextInput
                        value={result}
                        placeholder="Search"
                        style={{ flex: 1 }}
                        onChangeText={text => setResult(text)}
                    />
                    <TouchableOpacity onPress={() => getListSearch()}>
                        <SearchIcon />
                    </TouchableOpacity>
                </View>

            </View>
            <Text style={styles.textTitle}>Top Search</Text>
            <ScrollView >
                <StatusBar style="auto" />
                <ListCourseSearch
                    data={dataSearch}
                    navigation={props.navigation} />
            </ScrollView>
        </View>
    );

}
export default SearchScreen;