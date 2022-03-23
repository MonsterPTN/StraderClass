import React from "react";
import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

const ListTeacherScreen = () => {
    renderItem = ({ item, index }) => {
        return (
            <View style={styles.viewItem}>
                <TouchableOpacity>
                    <Text style={styles.textItem}>{item.key}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    renderListTeacher = ({ item, index }) => {
        return (

            <View style={styles.viewTeacher}>
                <View style={{ flexDirection: 'row', height: 108 }}>
                    <View style={{ height: 108, width: 76, borderRadius: 5 }}>
                        <Image source={require('../../Static/Image/imageSearch.png')} style={{ height: "100%", width: "100%" }}></Image>
                    </View>
                    <View style={{ justifyContent: 'center', marginLeft: 24 }}>
                        <Text style={styles.textTeacher}>{item.name}</Text>
                        <Text style={styles.textTitleTeacher}>{item.key}</Text>

                    </View>
                </View>
            </View>

        )
    }
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: '#171921', paddingTop: 25 }} >
                <StatusBar style="auto" />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={styles.textHeader}>Lesturers</Text>
                </View>
                <FlatList
                    data={[
                        { key: 'All' },
                        { key: 'Photographer' },
                        { key: 'Designer' },
                        { key: 'Cooking' },
                        { key: 'Music' },
                    ]}
                    renderItem={renderItem}
                    horizontal
                />

            </View>
            <View style={{ backgroundColor: '#171921', padding: 15 ,marginBottom:80 }}>
                <Text style={styles.textTitle}>RECOMMENDED</Text>

                <FlatList
                    data={[
                        { key: 'Devin', name: 'Thanh Nhan', status: 'new' },
                        { key: 'Dan', name: 'Thanh Nhan' },
                        { key: 'Dominic', name: 'Thanh Nhan' },
                        { key: 'Jackson', name: 'Thanh Nhan' },
                        { key: 'James', name: 'Thanh Nhan' },
                        { key: 'Joel', name: 'Thanh Nhan' },
                        { key: 'John', name: 'Thanh Nhan' },
                        { key: 'Jillian', name: 'Thanh Nhan' },
                        { key: 'Jimmy', name: 'Thanh Nhan' },
                        { key: 'Julie', name: 'Thanh Nhan  ' },
                    ]}
                    renderItem={renderListTeacher}
                />
            </View>
        </SafeAreaView>
    )
}

export default ListTeacherScreen;
const styles = StyleSheet.create({
    textHeader: {
        textAlign: 'center',
        color: 'white',
        fontSize: 19,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        paddingBottom: 33

    },
    buttonAll: {
        borderRadius: 5,
        borderColor: '#000000',
        borderWidth: 1,
        color: '#000000',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5,

    },
    textTeacher: {
        fontSize: 20,
        fontWeight: 'normal',
        color: 'white'
    },
    textTitleTeacher: {
        fontSize: 12,
        fontWeight: 'normal',
        color: '#A5A5A5'
    },
    textTitle: {
        color: '#EF8D21',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 16

    },
    textItem: {
        color: '#FF8600',
        borderRadius: 5,
        borderColor: '#FF8600',
        borderWidth: 1,
        margin: 6,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5
    },
    viewTeacher: {
        flexDirection: 'row',
        marginBottom: 6,
        backgroundColor: '#000000',
        justifyContent: 'space-between'
    },
    viewItem: {
        flexDirection: 'row',
        marginBottom: 6,
        justifyContent: 'space-between',
        height: 50
    }
});