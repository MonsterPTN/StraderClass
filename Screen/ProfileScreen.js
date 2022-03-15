import React, { useState } from "react";

import { Text, View, Modal, Pressable, StatusBar, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import ImagePicker from 'react-native-image-crop-picker';
import BackIcon from '../Icon/BackIcon';
import DownIcon from '../Icon/DownIcon'
import NonIcon from '../Icon/NonIcon';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Sae } from 'react-native-textinput-effects';
import SaveIcon from '../Icon/SaveIcon'
// import { TextInput } from "react-native-paper";
import { Picker } from '@react-native-picker/picker';
const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        compressImageQuality: 0.7,
        includeBase64: true,
    }).then(image => {
        // console.log(image);
        this.setState({ image: image.path });
        this.setState({ data: image.data });
        this.bs.current.snapTo(1);
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
        // console.log("Image",image);
        this.setState({ image: image.path });
        this.setState({ data: image.data });
        this.bs.current.snapTo(1);
    });

}



const ProfileScreen = ({ navigation }) => {
    // const refRBSheet = useRef();
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: '#171921', padding: 15 }}>
            <View style={styles.header}>
                <TouchableOpacity style={{ paddingLeft: 6 }} onPress={() => navigation.navigate('UserScreen')}>
                    <BackIcon style={styles.iconHeader} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Account Infomation</Text>
                <View style={{ paddingLeft: 6 }}><NonIcon style={styles.iconHeader} /></View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 17 }}>
                <TouchableOpacity onPress={() => setModalVisible(true)} >
                    <Image style={styles.image} source={require('../Image/imguser.png')}></Image>
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 1, paddingRight: 5 }} >
                        <Text style={{ color: 'white' }}>Name</Text>
                        <TextInput
                            backfaceVisibility={'visible'}
                            color={'white'}
                            borderBottomWidth={2}
                            width={'100%'}
                            borderColor={'gray'}
                            placeholder="Phan Thanh Nhan"
                            placeholderTextColor={'gray'}
                            selectionColor='white'
                        />
                    </View>
                    <View style={{ flex: 1, paddingLeft: 5 }}>
                        <Text style={{ color: 'white' }}>Last Name</Text>
                        <TextInput
                            backfaceVisibility={'visible'}
                            color={'white'}
                            borderBottomWidth={2}
                            width={'100%'}
                            borderColor={'gray'}
                            placeholder="Phone Number"
                            placeholderTextColor={'gray'}
                            selectionColor='white'
                        />
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ color: 'white' }}>Number phone</Text>
                    <TextInput
                        backfaceVisibility={'visible'}
                        color={'white'}
                        borderBottomWidth={2}
                        width={'100%'}
                        borderColor={'gray'}
                        placeholder="0369741095"
                        placeholderTextColor={'white'}
                        selectionColor='white'
                    />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ color: 'white' }}>Address</Text>
                    <TextInput
                        backfaceVisibility={'visible'}
                        color={'white'}
                        borderBottomWidth={2}
                        width={'100%'}
                        borderColor={'gray'}
                        placeholder="Ho Chi Minh"
                        placeholderTextColor={'white'}
                        selectionColor='white'
                    />
                </View>

            </View>
            <View style={{ marginTop: 49 }}>
                <TouchableOpacity style={{ flexDirection: 'row', borderRadius: 5, borderColor: '#FF8600', borderWidth: 1, justifyContent: 'center', paddingVertical: 9,backgroundColor:'#272A38' }}>
                    <SaveIcon />
                    <Text style={{ color: '#FF8600', fontSize: 18, marginLeft: 3 }} >Save</Text>
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
    textInput: { fontSize: 15, color: 'blue', marginVertical: 5 },

    textInput1: { fontSize: 15, color: 'blue', width: 170, marginVertical: 5 },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        margin: 20,
        backgroundColor: "#272A38",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    textTouch: {
        color: '#FF8600', fontSize: 14
    },
    touchModal: {
        borderRadius: 5,
        borderColor: '#FF8600',
        borderWidth: 1,
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        width: 220
    },
    image: {
        width: scale(120),
        height: scale(120),
        borderRadius: 70
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        justifyContent: 'space-between'
    }

});
