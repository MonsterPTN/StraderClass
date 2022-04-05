
import React, { useState } from 'react';
import PhoneInput from 'react-native-phone-number-input';
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
            <View style={styles.viewTextTop}>
                <View>
                    <Text style={styles.verifyText}>VerifyPhone your number phone</Text>
                    <Text style={styles.message}>We have send you an SMS with a code to number +84 369741095</Text>
                </View>
                <View style={styles.viewinput}>
                    <PhoneInput
                        defaultCode='VN'
                        placeholder='Phone number'
                        codeTextStyle={{ color: '#FFFFFF' }}

                        flagButtonStyle={styles.flagbutton}
                        textInputStyle={styles.textinput}
                        textContainerStyle={styles.textContainer}
                        containerStyle={styles.container}
                    ></PhoneInput>
                </View>
            </View>
            <View style={styles.viewBot}>
                <View style={styles.viewLoginWith}>
                    <Text style={styles.textOW}>
                        Or login with
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('StartScreen')}>
                        <Text style={styles.textSignup}>
                            Social network
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTouch}>
                    <TouchableOpacity style={[styles.touchSend]} onPress={() => navigation.navigate('VerifyOTP')} >
                        <Text style={[styles.textTouchSend]}>
                            Send
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};