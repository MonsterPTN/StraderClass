import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import BackIcon from '../Icon/BackIcon'
import NonIcon from '../Icon/NonIcon'
import SaveIcon from '../Icon/SaveIcon'
const UpdatePasswordScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#171921', padding: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 25, justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ paddingLeft: 6 }} onPress={() => navigation.navigate('UserScreen')}>
                    <BackIcon style={styles.iconHeader} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Language</Text>
                <View style={{ paddingLeft: 6 }}><NonIcon style={styles.iconHeader} /></View>
            </View>
            <View style={{ marginTop: 42 }}>
                <Text style={styles.textInfo}>Select language</Text>
            </View>
            <View>
                <View style={{ marginTop: 16,  }}>
                    <TouchableOpacity style={styles.touchSave}>
                        <Text style={styles.textTouchLanguage} >English</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={{ marginTop: 16,  }}>
                    <TouchableOpacity style={styles.touchSave}>
                        <Text style={styles.textTouchLanguage} >Viet Nam</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default UpdatePasswordScreen;

const styles = StyleSheet.create({
    textHeader: {
        // height: 40,
        textAlign: 'center',
        color: 'white',
        fontSize: 19,
        fontFamily: 'Poppins',
        fontWeight: 'bold',

    },
    iconHeader: {
        paddingTop: 25,
    },
    textInfo: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'Poppins'
    },
    viewTouch2: {
        marginTop: 13
    },
    viewTouch: {
        marginTop: 23
    },
    touchSave: {
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: '#FF8600',
        borderWidth: 1,
        justifyContent: 'flex-start',
        paddingVertical: 9
    },
    textEmail: {
        color: '#FF8600',
        fontSize: 11,
        fontWeight: 'bold'
    },
    textTouchLanguage: {
        color: '#FF8600',
        fontSize: 18,
        marginLeft: 15,
    }
})