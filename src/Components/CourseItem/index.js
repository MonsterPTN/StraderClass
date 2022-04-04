import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RectangleIcon from '../../Icons/RectangleIcon';
import { styles } from "./styles";
import { Colors } from "../../Until/Colors";

export default function CourseItem(props) {
    const item = props.item

    return (
        <View>
            <TouchableOpacity onPress={() => props.navigation.navigate('TestScreen', {
                itemUrlVideo: item.video_id,
                itemNameVideo: item.name,
                itemPhotoTeacher: item.teacherPhoto,
                itemNameTeacher: item.teacherName,
                itemId: item.id,

            }

            )} style={props.style}>
                <ImageBackground source={item.photo ? { uri: item.photo } : require('../../Static/Image/image.png')} style={styles.item}>
                    {/* <StatusIcon/> */}
                    <LinearGradient colors={['transparent', Colors.primary]}
                        style={styles.linearGradient2}>
                        <Text style={styles.text3}
                            numberOfLines={2}
                        >{item.name}</Text>
                        <RectangleIcon />
                        <Text style={styles.text5}>{item.teacherName}</Text>

                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
        </View>

    )
}