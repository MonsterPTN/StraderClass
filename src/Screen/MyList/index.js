import React, { useState, useEffect, useContext } from 'react';
import { Text, View, SafeAreaView, ScrollView, RefreshControl, Modal, Image, TouchableOpacity } from 'react-native';
import PlaySmallIcon from '../../Icons/PlaySmallIcon'
import { styles } from './styles';
import { AuthContext } from "../../Redux/AuthContext";
import ListMyList from '../../Components/ListMyList'
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const MyList = (props) => {
    const { token } = useContext(AuthContext)
    const [dataMyList, setDataMyList] = useState([]);
    const [values, setValue] = useState('')
    const [isloading, setisLoading] = useState(true);
    useEffect(() => {
        getMyList();
        return () => {
        }
    }, [])
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
        getMyList()
    }, []);

    const getMyList = () => {
        const apiURL = 'https://traderclass.vn/api/my-course';
        fetch(apiURL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token != "" ? `Bearer ${token.userToken}` : ""
            },
        })
            .then((res) => res.json())
            .then((resJson) => {
                setDataMyList(resJson.data);

            }).catch((error) => {
                console.log('Request API ERROR', error);
            }).finally(() => setisLoading(false))
    }
    const deleteMyList = () => {
        
        const apiURL = `https://traderclass.vn/api/delete-course/${values}`;
        fetch(apiURL, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token != "" ? `Bearer ${token.userToken}` : ""
            },
        })
            .then((res) => res.json())
            .then((resJson) => {
                setModalVisible(!modalVisible)
                onRefresh();
            }).catch((error) => {
                console.log('Request API ERROR', error);
            }).finally(() => setisLoading(false))
    }
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={styles.viewMain}>
            {console.log(token.userToken)}
            <ScrollView
                nestedScrollEnabled={true}
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <View style={styles.view1}>
                    <Text style={styles.textHeader}>My List</Text>
                </View>
                {/* <ListMyList
                data={dataMyList}
                navigation = {props.navigation}
            /> */}
                {
                    dataMyList.map((item) => {
                        return (
                            <TouchableOpacity style={styles.viewMain1} onPress={() => props.navigation.navigate("TestScreen", {
                                itemUrlVideo: item.video_id,
                                itemNameVideo: item.name,
                                itemPhotoTeacher: item.teacherPhoto,
                                itemNameTeacher: item.teacherName,
                                itemId: item.id,
                            })}
                                onLongPress={() => {
                                    setValue(item.id) 
                                    setModalVisible(true)
                                }}
                            >
                                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                                    <Image source={require('../../Static/Image/imageSearch.png')}></Image>
                                    <View style={styles.view11}>
                                        <Text numberOfLines={2} style={styles.text3}>{item.name}</Text>
                                        <PlaySmallIcon />
                                    </View>
                                </View>
                                
                            </TouchableOpacity>
                        )
                    })
                }
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
                        <Text style={{ color: '#FF8600', fontSize: 16 }}>Chosse acction</Text>
                        <View style={{ padding: 10, marginVertical: 10 , flexDirection:'row'}}>
                            <TouchableOpacity style={styles.touchModal} onPress={()=>deleteMyList(values)}>
                                <Text style={styles.textTouch}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchModal} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textTouch}>No</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );

}
export default MyList;
