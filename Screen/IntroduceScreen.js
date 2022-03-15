import React from "react";
import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import BackIcon from '../Icon/BackIcon'
import NonIcon from '../Icon/NonIcon'
import Num1Icon from '../Icon/Num1Icon'
import Num2Icon from '../Icon/Num2Icon'
import Num3Icon from '../Icon/Num3Icon'

const IntroduceScreen = ({ navigation }) => {
    return (
        <View style={styles.viewAll}>
            <View style={styles.header}>

                <TouchableOpacity style={{ paddingLeft: 6 }} onPress={() => navigation.navigate('UserScreen')}>
                    <BackIcon style={styles.iconHeader} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Referral</Text>
                <View style={{ paddingLeft: 6 }}><NonIcon style={styles.iconHeader} /></View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Text style={styles.text2}>Help your friends know and experience Traderclass</Text>
                    <Text style={styles.textShare}>Share Now</Text>
                </View>
                <Image source={require('../Image/people.png')} style={{ marginTop: 33 }}></Image>
            </View>
            <View style={styles.viewShare}>
                <Text style={styles.text1}>https://traderclass.vn/</Text>
            </View>
            <View style={{ marginTop: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>How it works</Text>
                <View style={{ flexDirection: 'row', marginTop: 16 }}>
                    <Num1Icon />
                    <Text style={styles.textTitle}>Share the link and invite you to join Traderclass.</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 16 }}>
                    <Num2Icon />
                    <Text style={styles.textTitle}>Your friends download and sign up for the app.</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 16 }}>
                    <Num3Icon />
                    <Text style={styles.textTitle}>You and they will receive a bonus from Traderclass.</Text>
                </View>
            </View>

        </View>
    )
}
export default IntroduceScreen;
const styles = StyleSheet.create({
    textHeader: {
        // height: 40,
        textAlign: 'center',
        color: 'white',
        fontSize: 19,
        fontFamily: 'Poppins',
        fontWeight: 'bold',

    },
    iconHeader: {
        paddingTop: 25,
    },
    textTitle: {
        fontSize: 13,
        fontWeight: 'normal',
        color: 'white',
        marginLeft: 6
    },
    text2: {
        fontSize: 14,
        fontWeight: 'normal',
        color: 'white',
        width: 184,
        marginTop: 84,
        marginLeft: 16
    },
    text1: {
        fontWeight: 'normal',
        fontSize: 16,
        color: '#FF8600',
        marginLeft: 16
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        justifyContent: 'space-between'
    }, textShare: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FF8600',
        marginLeft: 16,
        marginTop: 30
    },
    viewShare: {
        height: 56,
        backgroundColor: '#272A38',
        justifyContent: 'center',
        borderRadius: 5
    },
    viewAll: {
        flex: 1,
        backgroundColor: '#171921',
        padding: 15
    }
});