import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, } from 'react-native'
import { styles } from './styles';
import ItemNextVideo from '../ItemNextVideo'


export default function ListTopCourseNew(props) {
    return (
        <View>

            <FlatList
                data={props.data}
                renderItem={({ index, item }) => (
                    <ItemNextVideo
                        key={item.id}
                        navigation={props.navigation}
                        item={item}
                        style={index == 0 ? styles.firstItem :
                            index == props.data.length - 1 ?
                                styles.lastItem : styles.centerItem}
                    />
                )}
            />
            
        </View>
    )
}