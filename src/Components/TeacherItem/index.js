import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RectangleIcon from '../../Icons/RectangleIcon';
import { styles } from "./styles";
import { Colors } from "../../Until/Colors";

export default function TeacherItem(props) {
    const item = props.item

    return (

        <TouchableOpacity onPress={() => props.navigation.navigate('Lesturers', {
          itemNameTeacher: item.fullname,
          itemPositionName: item.position,
          itemPhoto:item.photo,
          itemId:item.id,
          itemVideo:item.video_id
        }
        
        
        )} style={props.style}>
        <ImageBackground source={item.photo ? { uri: item.photo } : require('../../Static/Image/image.png')} style={styles.item}>
          {/* <StatusIcon/> */}
          <LinearGradient colors={['transparent', Colors.primary]}
            style={styles.linearGradient2}>
            <Text style={styles.text3}
            adjustsFontSizeToFit = {true}
            >{item.fullname}</Text>
            <RectangleIcon />
            <Text style={styles.text5}>{item.position}</Text>

          </LinearGradient>
        </ImageBackground>
        </TouchableOpacity>
    )
}