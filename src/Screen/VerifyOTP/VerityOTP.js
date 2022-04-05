
import React, { useState } from 'react';
import AutoNextInput from '../../Screen/AutoNextInput/AutoNextInput'

import { styles } from './styles'


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
                    <BackIcon style={styles.iconBack} />
                </TouchableOpacity>
            </View>

            <View style={styles.viewEnterCode}>
                <View>
                    <Text style={styles.verifyText}>Phone Verifycation</Text>
                    <Text style={styles.message}>Enter your OTP code here</Text>
                </View>
                <View style={styles.viewinput}>
                    <AutoNextInput />
                </View>
            </View>
            <View style={styles.viewResendCode}>
                <View style={styles.viewLoginWith}>
                    <Text style={styles.textDC}>
                        Didn't you received any code
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.textNewCode}>
                            Resend a new code
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTouch}>
                    <TouchableOpacity style={[styles.touchConfirm]}>
                        <Text style={[styles.textConfirm]}>
                            Confirm
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
