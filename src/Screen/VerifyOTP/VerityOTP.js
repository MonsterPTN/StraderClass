
import React, { useState } from 'react';
import AutoNextInput from '../../Screen/AutoNextInput/AutoNextInput'


import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    TextInput,
    Modal
} from 'react-native';
import BackIcon from '../../Icons/BackIconLG/BackIconLG'


export default function App({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState('')

    const [message, setMessage] = useState(false)
    const handleTouchSend = () => {
        if (message) {
            setMessage(false)
        } else {
            setMessage(true)
        }
    }
    return (
        <SafeAreaView style={styles.safeview}>
            <View style={styles.viewTop}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon style={{ paddingVertical: 35, marginLeft: 20 }} />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1 }}>
                <View>
                    <Text style={styles.verifyText}>Phone Verifycation</Text>
                    <Text style={styles.message}>Enter your OTP code here</Text>
                </View>
                <View style={styles.viewinput}>
                    <AutoNextInput />
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 10, }}>
                <View style={styles.viewLoginWith}>
                    <Text style={{ color: '#FFFFFF', fontWeight: '500', textAlign: 'center' }}>
                        Didn't you received any code
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.textNewCode}>
                            Resend a new code
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTouch}>
                    <TouchableOpacity style={[styles.touchConfirm, { backgroundColor: '#FF8600' }]}>
                        <Text style={[styles.textConfirm, { color: '#000000' }]}>
                            Confirm
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    viewcircle: {
        margin: 10,
        width: 60,
        height: 60,
        backgroundColor: '#273B4A',
        borderRadius: 60 / 2,
        alignItems: 'center',
    },
    PhoneInput: {
    },
    viewLoginWith: {
        justifyContent: 'center',
    },
    textNewCode: {
        color: '#FF8600',
        fontWeight: '500',
        marginLeft: 5,
        textAlign: 'center',
    },
    message: {
        color: '#9A9A9A',
        fontSize: 14,
        fontWeight: '500',
        marginHorizontal: 45,
        textAlign: 'center',
        marginBottom: 70,
    },
    verifyText: {
        marginBottom: 25,
        textAlign: 'center',
        color: '#FF8600',
        fontSize: 33,
        fontWeight: '600',
    },
    viewinput: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#FFFFFF',
    },
    textConfirm: {
        fontSize: 14,
        fontWeight: '700',
    },
    viewTouch: {
        alignItems: 'center',
    },
    touchConfirm: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: 30,
    },
    safeview: {
        flex: 1,
        backgroundColor: '#000000',
    },

});

