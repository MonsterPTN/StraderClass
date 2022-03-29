
import React, { useState } from 'react';

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
import ResetIcon from '../../Icons/ResetIcon/ResetIcon'


export default function App({ navigation }) {

    const [message, setMessage] = useState(false)
    const handleTouchSend = () => {
        if(message) {
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
            <View>
                <Text style={styles.forgotText}>Forgot Password</Text>
                <Text style={styles.message}>Please enter your email address, You will rececive a link to create a new password via email.</Text>
            </View>
            <View style={styles.viewinput}>
                <TextInput
                    style={styles.input}
                    placeholder="Your Email..."
                    placeholderTextColor={'#FF8600'}
                >
                </TextInput>
            </View>
            <View style={styles.viewTouch}>
                <TouchableOpacity style={[styles.touchSignup, { backgroundColor: '#FF8600' }]} onPress={handleTouchSend} >
                    <Text style={[styles.textTouchSigup, { color: '#000000' }]}>
                        Send
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal
                visible={message}
                animationType='fade'
                onRequestClose={() => console.log('no warning')}
                transparent>
                <View style={styles.viewMesage}>
                    <ResetIcon style={{ margin: 20 }} />
                    <Text style={styles.messageText1}>You password has been resend</Text>
                    <Text style={styles.messageText2}>You’ll shortly receive an email with a code to setup a new password</Text>
                    <TouchableOpacity style={[styles.touchDone, { backgroundColor: '#FF8600' }]} onPress={handleTouchSend}>
                        <Text style={[styles.textTouchDone, { color: '#000000' }]}>
                            Done
                        </Text>
                    </TouchableOpacity>

                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textTouchDone: {
        fontSize: 14,
        fontWeight: '500',

    },
    touchDone: {
        width: '70%',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 50,
        
    },
    messageText2: {
        color: '#9A9A9A',
        fontSize: 12,
        marginHorizontal: 50,
        textAlign: 'center',
        margin: 20,

    },
    messageText1: {
        color: '#FFFFFF',
        fontSize: 21,
        marginHorizontal: 85,
        textAlign: 'center',
        fontWeight: '700',
    },
    viewMesage: {
        flex: 1,
        backgroundColor: '#171921',
        height: '100%',
        marginHorizontal: 20,
        marginVertical: 200,
        borderRadius: 15,
        alignItems: 'center',

    },
    message: {
        color: '#9A9A9A',
        fontSize: 14,
        fontWeight: '500',
        marginHorizontal: 45,
        textAlign: 'center',
        marginBottom: 70,
    },

    forgotText: {
        marginBottom: 25,
        textAlign: 'center',
        color: '#FF8600',
        fontSize: 33,
        fontWeight: '600',

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
    textTouchSigup: {
        fontSize: 14,
        fontWeight: '700',
    },
    viewTouch: {
        alignItems: 'center',
    },
    touchSignup: {
        width: '90%',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 30,
    },
    safeview: {
        flex: 1,
        backgroundColor: '#000000',
    },
    viewBot: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }

});

