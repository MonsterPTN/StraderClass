import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, } from 'react-native'
import { styles } from './styles';
import CourseByTeacherItem from '../CourseByTeacherItem'


export default function ListCourseByTeacher(props) {
    return (
        <View>
            <FlatList
                data={props.data}
                renderItem={({index, item}) =>(
                    <CourseByTeacherItem
                    key={item.id}
                        navigation = {props.navigation}
                        item = {item}
                        style = {index == 0? styles.firstItem:
                            index == props.data.length -1 ?
                        styles.lastItem : styles.centerItem}
                        />
                )}
                horizontal
            />
        </View>
    )
}