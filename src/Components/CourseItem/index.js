import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RectangleIcon from '../../Icons/RectangleIcon';
import { styles } from "./styles";

export default function CourseItem(props) {
    const item = props.item

    return (
        <View>
            <TouchableOpacity onPress={() => props.navigation.navigate('TestScreen', {
                itemUrlVideo: item.video_id,
                itemNameVideo: item.name,
                itemPhotoTeacher: item.teacherPhoto,
                itemNameTeacher: item.teacherName
            }

            )} style={props.style}>
                <ImageBackground source={{ uri: item.photo }} style={styles.item}>
                    {/* <StatusIcon/> */}
                    <LinearGradient colors={['transparent', '#171921']}
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