import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground, } from 'react-native'
import { styles } from './styles';
import MyListItem from '../MyListItem'


export default function ListMyList(props) {
    return (
        <View>
            {/* <FlatList
                data={props.data}
                renderItem={({index, item}) =>(
                    <MyListItem
                        navigation = {props.navigation}
                        item = {item}
                        style = {index == 0? styles.firstItem:
                            index == props.data.length -1 ?
                        styles.lastItem : styles.centerItem}
                        />
                )}
                keyExtractor = {(item) => item.id}
                refreshing = {isloading}
            /> */}
            {
                props.data.map((item) =>{
                    return(
                        <MyListItem
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