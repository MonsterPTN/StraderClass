import React, {useState} from "react";
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import { styles } from "./styles";
import PlaySmallIcon from "../../Icons/PlaySmallIcon";

export default function MyListItem(props) {
    const item = props.item
    const [values, setValue] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
        <TouchableOpacity style={styles.viewMain} onPress={() => props.navigation.navigate("TestScreen", {
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
                <View style={styles.view1}>
                    <Text numberOfLines={2} style={styles.text3}>{item.name}</Text>
                    <Text>{values}</Text>
                    <PlaySmallIcon />
                </View>
            </View>
        </TouchableOpacity>
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
                <View style={{ padding: 10, marginVertical: 10, flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.touchModal} onPress={() => deleteMyList(values)}>
                        <Text style={styles.textTouch}>Yess</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchModal} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textTouch}>No</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    </Modal>
    </View>

    )
}