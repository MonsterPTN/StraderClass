import React, { useContext, useEffect, useState } from "react";
import { Text, View, Modal, Pressable, StatusBar, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import BackIcon from '../../Icons/BackIcon';
import NonIcon from '../../Icons/NonIcon';
import { styles } from "./styles";
import SaveIcon from '../../Icons/SaveIcon'
<<<<<<< HEAD
import { AuthContext } from "../../Redux/AuthContext";

=======
import GoBack from '../../Components/GoBack'
>>>>>>> origin/main
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



const ProfileScreen = (props) => {
    // const refRBSheet = useRef();
    const [modalVisible, setModalVisible] = useState(false);
    const { token } = useContext(AuthContext)
    const [user, setUser] = useState({
        fullname: "",
        phone: "",
        address: "",
        photo: "",
        })

    

    
    useEffect(()=>{

    },[])
    return (
        <View style={styles.viewMain}>
            <View style={styles.header}>
            <GoBack navigation={props.navigation}/>
                <Text style={styles.textHeader}>Account Infomation</Text>
                <View style={{ paddingLeft: 6 }}><NonIcon style={styles.iconHeader} /></View>
            </View>
            <View style={styles.view1}>
                <TouchableOpacity onPress={() => setModalVisible(true)} >
                    <Image style={styles.image} source={{uri: token.userToken.user.photo}}></Image>
                </TouchableOpacity>

            </View>
            <View style={styles.view2}>
                <View style={styles.view3}>
                    <View style={styles.view4} >
                        <Text style={{ color: 'white' }}>Name</Text>
                        <TextInput
                            backfaceVisibility={'visible'}
                            color={'white'}
                            borderBottomWidth={2}
                            width={'100%'}
                            borderColor={'gray'}
                            placeholder={token.userToken.user.fullname}
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
                        placeholder={token.userToken.user.phone}
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
                        placeholder={token.userToken.user.address}
                        placeholderTextColor={'white'}
                        selectionColor='white'
                    />
                </View>

            </View>
            <View style={{ marginTop: 49 }}>
                <TouchableOpacity style={styles.touSave}>
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
