import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from "./styles";
import PlaySmallIcon from "../../Icons/PlaySmallIcon";

export default function MyListItem(props) {
    const item = props.item

    return (
        <View style={styles.viewMain}>

                <View style={{ flexDirection: 'row', flex:1,alignItems:'center' }}>
                    <Image source={require('../../Static/Image/imageSearch.png')}></Image>
                    <View style={styles.view1}>
                        <Text numberOfLines={2} style={styles.text3}>{item.name}</Text>
                        <PlaySmallIcon />
                    </View>
                </View>

            </View>

    )
}