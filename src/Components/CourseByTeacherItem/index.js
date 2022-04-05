import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RectangleIcon from '../../Icons/RectangleIcon';
import { styles } from "./styles";

export default function CourseIByTeachertem(props) {
    const item = props.item

    return (
        <View>
            <TouchableOpacity onPress={() => props.navigation.navigate('TestScreen', {
                itemUrlVideo: item.video_id,
                itemNameVideo: item.name,
                itemPhotoTeacher: item.teacherPhoto,
                itemNameTeacher: item.teacherName,
                itemId:item.id
            }
            )} style={props.style}>
                <View style={styles.viewitem2}>
                    <ImageBackground source={{ uri: item.photo }} style={styles.imglist2} imageStyle={{ borderRadius: 5 }}>
                        <LinearGradient colors={['transparent', '#171921',]} style={styles.gradientList}>
                            <Text style={styles.caption}>{item.name}</Text>
                        </LinearGradient>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        </View>

    )
}