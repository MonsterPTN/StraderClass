import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, } from 'react-native'
import TeacherFilterItem from '../TeacherFilterItem'
import {styles} from './styles'


export default function ListTeacherFilter(props) {
    return (
        <View>
            <FlatList
                data={props.data}
                renderItem={({index, item}) =>(
                    <TeacherFilterItem
                        navigation = {props.navigation}
                        item = {item}
                        style = {index == 0? styles.firstItem:
                            index == props.data.length -1 ?
                        styles.lastItem : styles.centerItem}
                        />
                )}
                keyExtractor = {(item) => item.id}
            />
        </View>
    )
}