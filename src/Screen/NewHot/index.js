import React, { useEffect, useState } from 'react';
import { Text, View, RefreshControl, StatusBar, ScrollView } from 'react-native';
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
    const [refreshing, setRefreshing] = React.useState(false);
    const wait = (timeout) => {
      return new Promise(resolve => setTimeout(resolve, timeout));
  }
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
      getListNewCourse();
  }, []);
    return (
        <View style={styles.view1} >
            <View style={styles.view2}>
                <Text style={styles.textHeader}>New & Hot</Text>
            </View>
            <ScrollView
            nestedScrollEnabled={true}
            contentContainerStyle={styles.scrollView}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <StatusBar style="auto" />
                <ListCourseNew
                    data={dataNewCourse}
                    navigation={props.navigation} />
            </ScrollView>
        </View>
    );

}
export default NewHotScreen;
