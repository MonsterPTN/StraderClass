
import React, { useState } from 'react';
import PhoneInput from 'react-native-phone-number-input';


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
                    <Text style={styles.verifyText}>VerifyPhone your number phone</Text>
                    <Text style={styles.message}>We have send you an SMS with a code to number +84 369741095</Text>
                </View>
                <View style={styles.viewinput}>
                    <PhoneInput
                        defaultCode='VN'
                        placeholder='Phone number'
                        codeTextStyle={{ color: '#FFFFFF' }}
                        

                        flagButtonStyle={{
                            backgroundColor: '#272A38',
                            borderTopLeftRadius: 30,
                            borderBottomLeftRadius: 30,
                            borderWidth: 1,
                            borderColor: '#FF8600',
                        }}
                        textInputStyle={{
                            backgroundColor: '#272A38',
                            height: 45,
                            color: '#FFFFFF',
                        }}

                        textContainerStyle={{
                            width: '100%',
                            height: 60,
                            alignItems: 'center',
                            borderTopRightRadius: 30,
                            borderBottomRightRadius: 30,
                            backgroundColor: '#272A38',
                            borderWidth: 1,
                            borderColor: '#FF8600',
                        }}

                        containerStyle={{
                            borderRadius: 30,
                            backgroundColor: 'white'
                        }}

                    ></PhoneInput>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 10, }}>
                <View style={styles.viewLoginWith}>
                    <Text style={{ color: '#FFFFFF', fontWeight: '500' }}>
                        Or login with
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('StartScreen')}>
                        <Text style={styles.textSignup}>
                            Social network
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTouch}>
                    <TouchableOpacity style={[styles.touchSend, { backgroundColor: '#FF8600' }]} onPress={() => navigation.navigate('VerifyOTP')} >
                        <Text style={[styles.textTouchSend, { color: '#000000' }]}>
                            Send
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    PhoneInput: {
    },
    viewLoginWith: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 55,

    },
    textSignup: {
        color: '#FF8600',
        fontWeight: '500',
        marginLeft: 5,
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
        marginHorizontal: 30,

    },
    viewinput: {
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        width: '90%',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: '#272A38',
        borderColor: '#FF8600',
        paddingHorizontal: 25,
        color: '#FF8600',
        margin: 10,

    },
    textTouchSend: {
        fontSize: 14,
        fontWeight: '700',
    },
    viewTouch: {
        alignItems: 'center',
    },
    touchSend: {
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

