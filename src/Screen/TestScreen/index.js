import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe';
import { s, scale } from "react-native-size-matters";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";
import IconDown from '../../Icons/DownIcon'
import IconUp from '../../Icons/UpIcon'
import ListNextVideo from '../../Components/ListNextVideo'
export default function TestScreen({ route, navigation }) {
    const [dataNextCourse, setDataNextCourse] = useState([]);
    useEffect(() => {
        getListNextCourse();
        return () => {

        }
    }, [])
    getListNextCourse = () => {
        const apiURL = `https://traderclass.vn/api/video-course/${route.params?.itemId}`;
        fetch(apiURL)
            .then((res) => res.json())
            .then((resJson) => {
                setDataNextCourse(resJson.data);
            }).catch((error) => {
                console.log('Request API ERROR', error);
            }).finally(() => setisLoading(false))
    }
    // const [number, onChangeNumber] = React.useState(null);
    // const [screen, setScreen] = useState(false)
    // const datacmt = [
    //     {
    //         "description": "Bài này hay cực",
    //         "name": "Thanh Nhan",
    //     }, {
    //         "description": "Bài này hay cực",
    //         "name": "Thanh Nhan",
    //     }, {
    //         "description": "Bài này hay cực",
    //         "name": "Thanh Nhan",
    //     },
    // ]
    // const renderItem2 = ({ item }) => {
    //     return (
    //         <View style={styles.viewCmt}>
    //             <Image source={{ uri: route.params?.itemPhotoTeacher }} style={styles.imageCmt} />
    //             <View style={styles.viewCmt1}>
    //                 <Text style={styles.textNameCmt}>{item.name}</Text>
    //                 <Text style={styles.textNameCmt2}>{item.description}</Text>
    //             </View>
    //         </View>
    //     )
    // }
    React.useEffect(() => {
        if (route.params?.itemUrlVideo) {
        }
        if (route.params?.itemNameVideo) {
        }
        if (route.params?.itemPhotoTeacher) {
        }
        if (route.params?.itemNameTeacher) {
        }
        if (route.params?.itemId) {
        }
    },
        [route.params?.itemUrlVideo,
        route.params?.itemNameVideo,
        route.params?.itemPhotoTeacher,
        route.params?.itemNameTeacher,
        route.params?.itemId
        ]);
    return (
        <View style={styles.viewMain}>
            <YoutubePlayer
                height={scale(200)}
                play={true}
                videoId={route.params?.itemUrlVideo}
            />
            <ScrollView style={styles.view1}>
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
                    </View>
                    <View>
                        <TouchableOpacity style={styles.touRe}>
                            <Text style={styles.text2}>Regist Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ListNextVideo
                    data={dataNextCourse}
                    navigation={navigation}
                     />
                    
                {/* <View style={styles.viewComment}>
                    <View style={styles.comment}>
                        <Text style={styles.texcomment}>Comment</Text>
                        <TouchableOpacity onPress={() => setScreen(!screen)} >
                            {screen ? <IconUp /> : <IconDown />}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.currentcomment}>
                        <Image style={styles.Imagecomment} source={{ uri: route.params?.itemPhotoTeacher }}></Image>
                        <TextInput
                            style={styles.inputcomment}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Input Comment..."
                            placeholderTextColor={Colors.sixth}
                        />
                    </View>
                    {screen &&
                        <View >
                            {
                                datacmt.map((item, index) => (
                                    renderItem2({ item })
                                ))
                            }
                        </View>

                    }

                </View> */}
            </ScrollView>

        </View>
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
        flex: 1
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
    text2: {
        margin: 10,
        color: Colors.second,
        fontFamily: Fonts.font_700,
        fontSize: 12
    },
    touRe: {
        backgroundColor: Colors.third,
        borderRadius: 5,
        borderColor: Colors.second,
        borderWidth: 1
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
    }
})