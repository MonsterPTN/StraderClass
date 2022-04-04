import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, FlatList, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import ListCourseNew from '../../Components/ListCourseNew'





const NewHotScreen = (props) => {
    const [dataNewCourse, setDataNewCourse] = useState([]);
    const [isloading, setisLoading] = useState(true);
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
            <View>
                <StatusBar style="auto" />
                <ListCourseNew
                    data={dataNewCourse}
                    navigation={props.navigation} />
            </View>
        </View>
    );

}
export default NewHotScreen;
