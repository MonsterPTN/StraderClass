import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RectangleIcon from '../../Icons/RectangleIcon';
import PlaySmallIcon from "../../Icons/PlaySmallIcon";
import { styles } from "./styles";

export default function CourseItem(props) {
    const item = props.item

    return (
      <TouchableOpacity style={styles.viewItem}>
      <View style={{ flexDirection: 'row' }}>
          <Image source={{uri:item.photo}} style = {styles.image}></Image>
          <View style={styles.textItem}>
              <Text style={styles.text3} numberOfLines = {1}>{item.name}</Text>
              <Text style={styles.text5}>{item.teacherName}</Text>
          </View>
      </View>
      <View style={{ justifyContent: 'center', marginRight: 9 }}>
          <PlaySmallIcon />
      </View>
  </TouchableOpacity>
    )
}