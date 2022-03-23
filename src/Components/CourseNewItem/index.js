import React from "react";
import { View, Text, TouchableOpacity, ImageBackground,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RectangleIcon from '../../Icons/RectangleIcon';
import { styles } from "./styles";

export default function CourseItem(props) {
    const item = props.item

    return (
        <View>
            <TouchableOpacity style={styles.view1}>
                <ImageBackground source={{ uri: item.photo }} style={styles.imgBackground}></ImageBackground>
            </TouchableOpacity>
            <View style={styles.view2}>
                <TouchableOpacity style={styles.touch}>
                    <View>
                        <Image source={{ uri: item.teacherPhoto }} style={styles.imageAvt}></Image>
                    </View>
                    <View style={styles.view3}>
                        <Text style={styles.textItemName}>{item.teacherName}</Text>
                        <Text style={styles.textItemVideo}>{item.score} video</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center' }} >
                    <Text style={styles.buttonRegistNow}>Regist Now</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.view4}>
                <Text style={styles.textTille}>{item.name}</Text>
                <Text style={styles.textDetail} numberOfLines={5}>{item.description}</Text>
            </View>
        </View>

    )
}