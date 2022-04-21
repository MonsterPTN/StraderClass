import React, { useContext, useEffect, useState } from "react";
import { Text, View, Modal, Pressable, StatusBar, StyleSheet, FlatList, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import BackIcon from '../../Icons/BackIcon';
import NonIcon from '../../Icons/NonIcon';
import { styles } from "./styles";
import SaveIcon from '../../Icons/SaveIcon'
import { AuthContext } from "../../Redux/AuthContext";

import GoBack from '../../Components/GoBack'



const ProfileScreen = (props) => {
    // const refRBSheet = useRef();
    const [modalVisible, setModalVisible] = useState(false);
    const { token } = useContext(AuthContext)
    const [fullname, setFullname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [photo, setPhoto] = useState("");
    const [imageFile, setImageFile] = useState({});
    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            setPhoto(image.path)
            setImageFile({
                uri: image.path,
                type: image.mime,
                name: image.modificationDate
            })
            setModalVisible(!modalVisible)
        });
    }


    const takePhotoFromCamra = () => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true,
            compressImageQuality: 0.7,
            multiple: true,
            includeBase64: true,
        }).then(image => {
            setPhoto(image.path)
            setImageFile({
                uri: image.path,
                type: image.mime,
                name: image.modificationDate
            })
            setModalVisible(!modalVisible)
        });
    
    }
    
    let getUpDaTe = async () => {
        const data = new FormData()
        data.append('photo', imageFile)
        data.append('fullname', fullname)
        data.append('phone', phone)
        data.append('address', address)
        let res = await fetch(
            'https://traderclass.vn/api/update-user',
            {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data; ',
                    'Authorization': token.userToken != "" ? `Bearer ${token.userToken}` : ""
                },
            }
        );
        const responseJson = await res.json();
        console.log("sdfs" , responseJson)
        if (responseJson.status) {
            props.navigation.navigate('User')
        }
    };
    const geProfile = () => {
        const apiURL = 'https://traderclass.vn/api/user';
        fetch(apiURL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token.userToken ? `Bearer ${token.userToken}` : ""
            },
        })
            .then((res) => res.json())
            .then((resJson) => {
                console.log("asdasd", resJson)
                if (!resJson.status) {
                    Alert.alert("message", resJson.msg)
                } else {
                    setFullname(resJson.data.fullname + "")
                    setPhone(resJson.data.phone + "")
                    setPhoto(resJson.data.photo + "")
                    setAddress(resJson.data.address + "")

                }

            }).catch((error) => {
                console.log('Error: ', error);
            })
    }

    useEffect(() => {
        geProfile()
    }, [])
    return (
        <View style={styles.viewMain}>
            <View style={styles.header}>
                <GoBack navigation={props.navigation} />
                <Text style={styles.textHeader}>Account Infomation</Text>
                <View style={{ paddingLeft: 6 }}><NonIcon style={styles.iconHeader} /></View>
            </View>
            <View style={styles.view1}>
                <TouchableOpacity onPress={() => setModalVisible(true)} >
                    <Image value={photo} style={styles.image} source={{ uri: photo }}></Image>
                </TouchableOpacity>

            </View>
            <View style={styles.view2}>
                <View style={styles.view3}>
                    <View style={styles.view4} >
                        <Text style={{ color: 'white' }}>Name</Text>
                        <TextInput
                            value={fullname}
                            onChangeText={setFullname}
                            placeholder={fullname}
                            style={styles.textinput}
                        />
                    </View>

                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ color: 'white' }}>Number phone</Text>
                    <TextInput
                        value={phone}
                        onChangeText={setPhone}
                        style={styles.textinput}
                        placeholder={phone}

                    />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ color: 'white' }}>Address</Text>
                    <TextInput
                        value={address}
                        onChangeText={setAddress}
                        style={styles.textinput}
                        borderColor={'gray'}
                        placeholder={address}
                    />
                </View>

            </View>
            <View style={{ marginTop: 49 }}>
                <TouchableOpacity style={[styles.touSave]} onPress={() => getUpDaTe()} >
                    <SaveIcon />
                    <Text style={styles.textSave} >Save</Text>
                </TouchableOpacity>
            </View>
            <View>
            </View>
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
                        <View style={{ padding: 10, marginVertical: 10 }}>
                            <TouchableOpacity style={styles.touchModal} onPress={takePhotoFromCamra}>
                                <Text style={styles.textTouch}>Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchModal} onPress={choosePhotoFromLibrary}>
                                <Text style={styles.textTouch}>Graly</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchModal} onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textTouch}>Cancel</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    );
}
export default ProfileScreen;