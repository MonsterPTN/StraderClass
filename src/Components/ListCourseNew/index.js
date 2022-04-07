import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, } from 'react-native'
import { styles } from './styles';
import CourseNewItem from '../CourseNewItem'


export default function ListCourseNew(props) {
    return (
        <View>
            {/* <FlatList
                data={props.data}
                renderItem={({index, item}) =>(
                    <CourseNewItem
                        navigation = {props.navigation}
                        item = {item}
                        style = {index == 0? styles.firstItem:
                            index == props.data.length -1 ?
                        styles.lastItem : styles.centerItem}
                        />
                )}
                keyExtractor = {(item) => item.id}
            /> */}
            {
                props.data.map((item) => {
                    return (
                        <CourseNewItem
                            navigation={props.navigation}
                            item={item}
                            key={item.id}
                        />
                    )
                })
            }
        </View>
    )
}