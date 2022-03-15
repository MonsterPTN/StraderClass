import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native'

const ChangPinScreen = () => {
    return (
        <View >
            <View>
                <Text style={styles.text1231231}>
                    thang
                </Text>
            </View>
            <View style = {{backgroundColor:'gray'}}>
                <TextInput 
                placeholder="Thanh thang"
                placeholderTextColor={'black'}
                borderColor = 'red'
                borderBottomWidth={2}
                >

                </TextInput>
            </View>
        </View>

    )
}
export default ChangPinScreen;



const styles = StyleSheet.create({
    text1231231: {
        color: 'black',
        fontSize: 50,
        fontWeight: 'bold',
        selectionColor: 'black',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 2,
        paddingHorizontal: 50

    }
})