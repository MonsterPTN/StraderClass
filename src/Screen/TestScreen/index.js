import React, { useState, useEffect,useContext } from "react";
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';
import { s, scale } from "react-native-size-matters";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";
import ListNextVideo from '../../Components/ListNextVideo'
import { SafeAreaView } from "react-navigation";
import { AuthContext } from "../../Redux/AuthContext";
export default function TestScreen({ route, navigation }) {
    const [dataNextCourse, setDataNextCourse] = useState([]);
    const { token } = useContext(AuthContext)
    const [isloading, setisLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            getListNextCourse();
            }, 1000);
        return () => {

        }
    }, [])
    const getMyList = () => {
        const apiURL = `https://traderclass.vn/api/add-course/${route.params?.itemId}`;
        fetch(apiURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token != "" ? `Bearer ${token.userToken}` : ""
            },
        })
            .then((res) => res.json())
            .then((resJson) => {
              console.log("Add My List Success")
              Alert.alert("Messenger",'Add My List Success');
            }).catch((error) => {
                console.log('Request API ERROR', error);
            }).finally(() => setisLoading(false))
    }
    const getListNextCourse = async () => {
        const apiURL = `https://traderclass.vn/api/video-course/${route.params?.itemId}`;
        fetch(apiURL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((resJson) => {
                setDataNextCourse(resJson.data);
console.log(resJson.data)
            }).catch((error) => {
                console.log('Request API ERROR', error);
            }).finally(() => setisLoading(false))
    }
    return (
        <SafeAreaView style={styles.viewMain}>
            <View>
                <YoutubePlayer
                    height={scale(200)}
                    play={true}
                    videoId={route.params?.itemUrlVideo}
                />
            </View>
            <View style={styles.view1}>
                <View>
                    <Text style={styles.nameVideo}>{route.params?.itemNameVideo}</Text>
                </View>
                <View style={styles.view4}>
                    <View style={styles.view2}>
                        <View>
                            <Image source={{ uri: route.params?.itemPhotoTeacher }} style={styles.imageTeacher} />
                        </View>
                        <View style={styles.view3}>
                            <Text style={styles.nameVideo}>{route.params?.itemNameTeacher}</Text>
                            <Text style={styles.text1}>300 video</Text>
                        </View>
                        <View style = {styles.view5}>
                        <TouchableOpacity style = {styles.touWish} onPress={()=> getMyList()}>
                            <Text style= {styles.textWish}>Add My List</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style = {{marginBottom:100}}>
                    <ListNextVideo
                        data={dataNextCourse}
                        navigation={navigation}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    nameVideo: {
        fontFamily: Fonts.font_600,
        fontSize: 18,
        color: Colors.fourth
    },
    view1: {
        padding: 16,
        flex: 1,
    },
    viewMain: {
        backgroundColor: Colors.primary,
        flex: 1,
    },
    imageTeacher: {
        height: 64,
        width: 64,
        backgroundColor: 'white',
        borderRadius: 30,
        borderColor: Colors.second,
        borderWidth: 1
    },
    view2: {
        flexDirection: 'row',
        marginTop: 12
    },
    view3: {
        marginLeft: 16,
        justifyContent: 'center',
    },
    view4: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text1: {
        color: Colors.sixth
    },

    viewComment: {
        marginTop: 18,
        backgroundColor: Colors.third,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    comment: {
        marginTop: 4,
        marginBottom: 5,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    texcomment: {
        color: Colors.second,
        fontFamily: Fonts.font_700,
        fontSize: 12,

    },
    currentcomment: {
        flexDirection: "row",
        alignItems: 'center'
    },
    Imagecomment: {
        height: 42,
        width: 42,
        borderRadius: 50,
        borderColor: Colors.second,
        borderWidth: 1
    },
    inputcomment: {
        marginLeft: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.second,
        flex: 1,
        marginBottom: 4
    },
    imageCmt: {
        height: 36,
        width: 36,
        borderRadius: 30
    },
    viewCmt: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        marginLeft: 10
    },
    textNameCmt: {
        color: Colors.second,
        fontFamily: Fonts.font_700,
        fontSize: 14,
    },
    textNameCmt2: {
        color: Colors.sixth,
        fontFamily: Fonts.font_400,
        fontSize: 12,
    },
    viewCmt1: {
        marginLeft: 14
    },
    view5:{
        justifyContent:'center',
        alignItems:'flex-end',
        flex:1,
        marginRight:14,
        
    },
    touWish:{
        
    },
    textWish:{
        color:Colors.fourth,
        fontFamily:Fonts.font_500,
        fontSize:14,
    }
})