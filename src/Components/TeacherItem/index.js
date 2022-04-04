import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RectangleIcon from '../../Icons/RectangleIcon';
import { styles } from "./styles";

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
        <ImageBackground source={{uri:item.photo}} style={styles.item}>
          {/* <StatusIcon/> */}
          <LinearGradient colors={['transparent', '#171921']}
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