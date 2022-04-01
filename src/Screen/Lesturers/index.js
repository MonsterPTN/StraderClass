import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, Modal, ImageBackground, ScrollView, TouchableOpacity, Alert } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import RectangleIcon from "../../Icons/RectangleIcon"
import SubtractIcon from "../../Icons/SubtractIcon"
import StarOrangeIcon from "../../Icons/StarOrangeIcon"
import PlaySmallOrangeIcon from "../../Icons/PlaySmallOrangeIcon"
import WatchIcon from "../../Icons/WatchIcon"
import BackIcon from "../../Icons/BackIcon"
import CloseIcon from "../../Icons/CloseIcon";
import { styles } from "./styles";
import { scale } from "react-native-size-matters";
import YoutubePlayer from 'react-native-youtube-iframe';
import ListCourseByTeacher from '../../Components/ListCourseByTeacher'
export default function Lesturers({ route, navigation }) {
    const [dataCourse, setDataCourse] = useState([]);
    useEffect(() => {
        getListCourse();
        return () => {

        }
    }, [])
    getListCourse = () => {
        const apiURL = `https://traderclass.vn/api/course-by-teacher/${route.params?.itemId}`;
        fetch(apiURL)
            .then((res) => res.json())
            .then((resJson) => {
                setDataCourse(resJson.data);
            }).catch((error) => {
                console.log('Request API ERROR', error);
            }).finally(() => setisLoading(false))
    }
    React.useEffect(() => {
        if (route.params?.itemNameTeacher) {
        }
        if (route.params?.itemPositionName) {
        }
        if (route.params?.itemPhoto) {
        }
        if (route.params?.itemId) {
        }

    }, [route.params?.itemNameTeacher, route.params?.itemPositionName, route.params?.itemPhoto, route.params?.itemId]);
    const renderItem2 = ({ item }) => {
        return (
            <View style={styles.viewitem2}>
                <ImageBackground source={{ uri: item.photo }} style={styles.imglist2} imageStyle={{ borderRadius: 5 }}>
                    <LinearGradient colors={['transparent', '#171921',]} style={styles.gradientList}>
                        <Text style={styles.caption}>{item.name}</Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <BackIcon />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Lesturers</Text>
                <View style={{ paddingRight: 15 }}>
                    {/* <TouchableOpacity onPress={()=>navigation.navigate('UserScreen')}>
              <UserIcon style={styles.iconHeader} />
            </TouchableOpacity> */}
                </View>
            </View>
            <ScrollView style={{ backgroundColor: '#171921', padding: 15, flex: 1 }}>

                <View>
                    <View style={{ height: 384 }}>
                        <ImageBackground style={{ width: "100%", height: "100%", justifyContent: 'flex-end' }} source={{ uri: route.params?.itemPhoto }} imageStyle={{ borderRadius: 5 }} >
                            <LinearGradient colors={['transparent', '#171921',]} style={styles.linearGradient}
                            >
                                <Text style={styles.text1}>{route.params?.itemNameTeacher}</Text>

                                <RectangleIcon />
                                <Text style={styles.text2}>{route.params?.itemPositionName}</Text>
                            </LinearGradient>
                        </ImageBackground>
                    </View>
                    {/* <TouchableOpacity
                        style={styles.playss}
                    >
                        <Text style={styles.touch1}> PLAY LESSION 1</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity
                        style={styles.watch}
                        onPress={() => setModalVisible(true)}
                    >
                        <WatchIcon />
                        <Text style={styles.touch2}> WATCH TRAILER</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.title}>
                        Sale Management Application:
                    </Text>
                    <Text style={styles.description}>
                        Programming phone applications at the company.- Support consulting sales of computer components, laptops, office gear.- Prepare weekly sales report and statistics.- Design logos for customers.- Programming store management applications on phones using React Native language.
                    </Text>
                </View>
                <View >
                    <Text style={styles.title2}>
                        What you'll get</Text>
                </View>
                <View style={styles.viewicon}>
                    <View style={styles.icon}>
                        <SubtractIcon />
                        <Text style={styles.textinviewicon}>  15 video lessons</Text>
                    </View>
                    <View style={styles.icon}>
                        <StarOrangeIcon />
                        <Text style={styles.textinviewicon}>  Exclusive learning material</Text>
                    </View>
                    <View style={styles.icon}>
                        <PlaySmallOrangeIcon />
                        <Text style={styles.textinviewicon}>  100% guaranteed</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.tilebottom}>What you'll learn</Text>
                </View>
                {/* <FlatList
                    data={dataCourse}
                    renderItem={renderItem2}
                    horizontal
                /> */}
                <ListCourseByTeacher
                    data={dataCourse}
                    navigation={navigation} />
                <View>
                    <Text style={styles.tilebottom}>
                        How to enroll
                    </Text>
                    <View style={styles.viewbottom}>
                        <Text style={styles.alllessons}>
                            All lessons
                        </Text>
                        <Text style={styles.capp}>Enjoy the course, can watch it over and over again for only</Text>
                        <Text style={styles.price}>499.000 Đ</Text>

                        <TouchableOpacity
                            style={styles.touch4}
                        >
                            <Text style={styles.regist}>Regist now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={styles.viewClose} onPress={() => setModalVisible(!modalVisible)}>
                            <CloseIcon />
                        </TouchableOpacity>
                        <View style = {{marginTop:10}}>
                            <YoutubePlayer
                                height={scale(250)}
                                play={true}
                                videoId={'lZYOp1B_OZs'}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    );
};



