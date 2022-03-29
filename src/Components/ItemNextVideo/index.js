import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { styles } from "./styles";

export default function ItemNextVideo(props) {
    const item = props.item

    return (
        <View>
            <TouchableOpacity onPress={() => props.navigation.navigate('TestScreen', {
                itemUrlVideo: item.id_video,
                itemNameVideo: item.name,
                itemPhotoTeacher: item.teacherPhoto,
                itemNameTeacher: item.teacherName})}
            style={styles.view1} >
                <View style ={styles.view2}>
                    <Image source={{uri:item.photo}} style = {styles.image}/>
                    <View style = {styles.view3}>
                    <Text style = {styles.text1}>{item.name}</Text>
                    <Text style = {styles.text2}>{item.teacherName}</Text>
                    </View>
                </View>
                <View>
                    <Text style = {styles.text3} numberOfLines={5}>{item.description}</Text>
                </View>
                </TouchableOpacity>
        </View>

    )
}