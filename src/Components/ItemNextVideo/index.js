import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { styles } from "./styles";

export default function ItemNextVideo(props) {
    const item = props.item

    return (
        <View>
            <TouchableOpacity onPress={() => props.navigation.navigate('TestScreen', {
                itemUrlVideo: item.video_id,
                itemNameVideo: item.name,
                itemPhotoTeacher: item.teacherPhoto,
                itemNameTeacher: item.teacherName})}
            style={styles.view1} >
                <ImageBackground source={{ uri: item.photo }} style={styles.imgBackground}></ImageBackground>
            </TouchableOpacity>
            <View style={styles.view2}>
                <TouchableOpacity style={styles.touch}>
                    <View>
                        <Image source={{ uri: item.teacherPhoto }} style={styles.imageAvt}></Image>
                    </View>
                    <View style={styles.view3}>
                            <Text style={styles.textItemName}
                                numberOfLines={1}>{item.name}</Text>
                        <View style={styles.view5}>
                            <Text style={styles.textItemVideo}>{item.teacherName}</Text>
                            <Text style={styles.textItemVideo}>{item.count_user_course} view</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    )
}