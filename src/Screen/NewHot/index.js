import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, FlatList, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import ListCourseNew from '../../Components/ListCourseNew'





const NewHotScreen = () => {
    const [dataNewCourse, setDataNewCourse] = useState([]);

    useEffect(() => {
        getListNewCourse();
        return () => {

        }
    }, [])

    getListNewCourse = () => {
        const apiURL = 'https://traderclass.vn/api/latest-course';
        fetch(apiURL)
            .then((res) => res.json())
            .then((resJson) => {
                setDataNewCourse(resJson.data);
            }).catch((error) => {
                console.log('Request API ERROR', error);
            }).finally(() => setisLoading(false))
    }
    return (
        <View style={styles.view1} >
            <View style={styles.view2}>
                <Text style={styles.textHeader}>New & Hot</Text>
            </View>
            <ScrollView>
                <StatusBar style="auto" />
                <ListCourseNew
                    data={dataNewCourse} />
            </ScrollView>
        </View>
    );

}
export default NewHotScreen;
