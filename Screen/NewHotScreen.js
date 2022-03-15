import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, FlatList, ImageBackground, Image, TouchableOpacity } from 'react-native';


renderItemNew = ({ item, index }) => {
    return (
        <View>
            <View style={{ height: 180, width: 384 }}>
                <ImageBackground source={require('../Image/imageVideo.png')} style={styles.imgBackground}></ImageBackground>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View>
                    <Image source={require('../Image/ted1.png')} style={styles.imageAvt}></Image>
                    </View>
                    <View style={{ flexDirection: 'column',justifyContent:'center', marginLeft:15}}>
                        <Text style={styles.textItemName}>{item.name}</Text>
                        <Text style={styles.textItemVideo}>{item.video}</Text>
                    </View>
                </View>
                <TouchableOpacity style = {{alignItems:'center'}} >
                    <Text style={styles.buttonRegistNow}>Regist Now</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 16, marginBottom: 30 }}>
                <Text style={styles.textTille}>{item.title}</Text>
                <Text style={styles.textDetail}>{item.detail}</Text>
            </View>
        </View>
    )
}

const NewHotScreen = () => {
    return (
        <View style={{ backgroundColor: '#171921', paddingLeft: 15, paddingRight: 15 }} >
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 25, justifyContent: 'center', paddingBottom: 28 }}>
                <Text style={styles.textHeader}>New & Hot </Text>
            </View>
            <ScrollView  style = {{marginBottom:80}}>
                <StatusBar style="auto" />

                <FlatList
                    data={[
                        { video: '300 videos', name: 'Thanh Nhan', title: '7 essential qualities of a successful businessman', detail: 'Currently, taking business photos has become a trend favored by many leaders and entrepreneurs. In addition to enhancing the image and personal brand in the eyes of customers and employees, this is also a way to help business owners PR businesses skillfully. But how to choose a professional and reputable business photography unit. Lets find out with TuArt' },
                        { video: '300 videos', name: 'Thanh Nhan', title: '7 essential qualities of a successful businessman', detail: 'Currently, taking business photos has become a trend favored by many leaders and entrepreneurs. In addition to enhancing the image and personal brand in the eyes of customers and employees, this is also a way to help business owners PR businesses skillfully. But how to choose a professional and reputable business photography unit. Lets find out with TuArt' },
                        { video: '300 videos', name: 'Thanh Nhan', title: '7 essential qualities of a successful businessman', detail: 'Currently, taking business photos has become a trend favored by many leaders and entrepreneurs. In addition to enhancing the image and personal brand in the eyes of customers and employees, this is also a way to help business owners PR businesses skillfully. But how to choose a professional and reputable business photography unit. Lets find out with TuArt' },
                        { video: '300 videos', name: 'Thanh Nhan', title: '7 essential qualities of a successful businessman', detail: 'Currently, taking business photos has become a trend favored by many leaders and entrepreneurs. In addition to enhancing the image and personal brand in the eyes of customers and employees, this is also a way to help business owners PR businesses skillfully. But how to choose a professional and reputable business photography unit. Lets find out with TuArt' },
                        { video: '300 videos', name: 'Thanh Nhan', title: '7 essential qualities of a successful businessman', detail: 'Currently, taking business photos has become a trend favored by many leaders and entrepreneurs. In addition to enhancing the image and personal brand in the eyes of customers and employees, this is also a way to help business owners PR businesses skillfully. But how to choose a professional and reputable business photography unit. Lets find out with TuArt' },
                    ]}
                    renderItem={renderItemNew}

                />
            </ScrollView>
        </View>
    );

}
export default NewHotScreen;
const styles = StyleSheet.create({
    textHeader: {
        textAlign: 'center',
        color: 'white',
        fontSize: 19,
        fontFamily: 'PoppinsVN-700',
        fontWeight: 'normal',
        lineHeight:28

    },
    linearGradient: {
        height: 86,
        justifyContent: 'flex-end',
        width: 120,
        alignItems: 'center',
    },
    imageAvt: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginTop: 16
    },
    textTille: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'normal',
        fontFamily: 'PoppinsVN-600',
    },
    textDetail: {
        color: '#9A9A9A',
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'Poppins',
    },
    buttonRegistNow: {
        borderRadius: 5,
        borderColor: '#FF8600',
        borderWidth: 1,
        color: '#FF8600',
        fontWeight: 'normal', padding: 9,
        fontFamily: 'PoppinsVN-700',
        marginTop:15

    },
    textItemVideo: {
        color: '#828282',
        fontSize: 11,
        fontWeight: 'normal',
        fontFamily: 'PoppinsVN-500',
    },
    textItemName:
    {
        color: 'white',
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'PoppinsVN-700',
        lineHeight:24,
        marginTop:15
        

    },
    imgBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    }
});