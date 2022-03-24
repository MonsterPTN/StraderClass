import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const ListTeacherScreen = (props) => {
    const [dataFilter, setDataFilter] = useState([]);
    const [dataChooseFilter, setDataChooseFilter] = useState([]);
    const [isloading, setisLoading] = useState(true);
    const [values, setValue] = useState('0')
    useEffect(() => {
        getListFilter();
        getListChooseFilter();
        return () => {
    
        }
      }, [])

      getListFilter = () => {
        const apiURL = 'https://traderclass.vn/api/course-category';
        fetch(apiURL)
          .then((res) => res.json())
          .then((resJson) => {
            setDataFilter(resJson.data);
          }).catch((error) => {
            console.log('Request API ERROR', error);
          }).finally(() => setisLoading(false))
      }
      getListChooseFilter = () => {
        const apiURL = `https://traderclass.vn/api/course-by-category/${values}`;
        fetch(apiURL)
          .then((res) => res.json())
          .then((resJson) => {
            setDataChooseFilter(resJson.data);
            console.log(values)
          }).catch((error) => {
            console.log('Request API ERROR', error);
          }).finally(() => setisLoading(false))
      }

    renderItem = ({ item, index }) => {
        return (
            <View style={styles.viewItem}>
                <TouchableOpacity onPress={()=>getListChooseFilter()}
                >
                    <Text style={styles.textItem}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    renderListTeacher = ({ item, index }) => {
        return (

            <View style={styles.viewTeacher}>
                <View style={styles.viewItem1}>
                    <View style={styles.viewItem2}>
                        <Image source={{uri:item.teacherPhoto}} style={styles.image}></Image>
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 24 }}>
                        <Text style={styles.textTeacher}>{item.teacherName}</Text>
                        <Text style={styles.textTitleTeacher}>{item.title}</Text>

                    </View>
                </View>
            </View>

        )
    }
    return (
        <View style = {{flex:1}}>
            <View style={styles.view2} >
                <StatusBar style="auto" />
                <View style={styles.view1}>
                    <Text style={styles.textHeader}>Lesturers</Text>
                </View>
                <FlatList
                    data={dataFilter}
                    renderItem={renderItem}
                    horizontal
                />

            </View>
            <ScrollView style={styles.view3}>
                <Text style={styles.textTitle}>RECOMMENDED</Text>

                <FlatList
                    data={dataChooseFilter}
                    renderItem={renderListTeacher}
                />
            </ScrollView>
        </View>
    )
}

export default ListTeacherScreen;
