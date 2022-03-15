import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import BackIcon from '../Icon/BackIcon'
import NonIcon from '../Icon/NonIcon'
import SaveIcon from '../Icon/SaveIcon'
const UpdateEmailScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#171921', padding: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 25, justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ paddingLeft: 6 }} onPress={() => navigation.navigate('UserScreen')}>
                    <BackIcon style={styles.iconHeader} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Update Email</Text>
                <View style={{ paddingLeft: 6 }}><NonIcon style={styles.iconHeader} /></View>
            </View>
            <View style={{ marginTop: 42 }}>
                <Text style={styles.textInfo}>Your email address will not change until it`s been verified. Resend verification email</Text>
            </View>
            <View>
                <View style={styles.viewTouch}>
                    <Text style={styles.textEmail}>
                        Email
                    </Text>
                    <TextInput
                        backgroundColor={'#272A38'}
                        style={{ height: 50 }}
                    />
                </View>
                <View style={styles.viewTouch2}>
                    <Text style={styles.textEmail}>
                        New Email
                    </Text>
                    <TextInput
                        backgroundColor={'#272A38'}
                        style={{ height: 50 }}
                    />
                </View>
                <View style={styles.viewTouch2}>
                    <Text style={styles.textEmail}>
                        Re-enter Email
                    </Text>
                    <TextInput
                        backgroundColor={'#272A38'}
                        style={{ height: 50 }}
                    />
                </View>
                <View style={{ marginTop: 16, marginHorizontal: 11 }}>
                    <TouchableOpacity style={styles.touchSave}>
                        <SaveIcon />
                        <Text style={styles.textTouchSave} >Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default UpdateEmailScreen;

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
        fontSize: 10,
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
        justifyContent: 'center',
        paddingVertical: 9
    },
    textEmail: {
        color: '#FF8600',
        fontSize: 11,
        fontWeight: 'bold'
    },
    textTouchSave: {
        color: '#FF8600',
        fontSize: 18,
        marginLeft: 3
    }
})