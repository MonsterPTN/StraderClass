import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from "./styles";

export default function TeacherFilterItem(props) {
  const item = props.item

  return (
    <TouchableOpacity style={styles.viewTeacher} onPress={() => props.navigation.navigate('Lesturers', {
      itemNameTeacher: item.teacherName,
      itemPositionName: item.title,
      itemPhoto:item.teacherPhoto,
      itemId:item.id,
      itemVideo:item.video_id
    }
    
    
    )}>
      <View style={styles.viewItem1}>
        <View style={styles.viewItem2}>
          <Image source={item.teacherPhoto ? { uri: item.teacherPhoto } : require('../../Static/Image/image.png')} style={styles.image}></Image>
        </View>
        <View style={styles.view1}>
          <Text style={styles.textTeacher}>{item.teacherName}</Text>
          <Text style={styles.textTitleTeacher}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}