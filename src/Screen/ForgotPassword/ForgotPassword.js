
import React, { useState } from 'react';
import { styles } from './styles';

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
    Modal,
    ImageBackground
} from 'react-native';

import BackIcon from '../../Icons/BackIconLG/BackIconLG'
import ResetIcon from '../../Icons/ResetIcon/ResetIcon'


export default function App({ navigation }) {

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
            <ImageBackground source={require('../../Static/Image/background.png')} style={{ height: '100%', flex: 1 }} imageStyle={{ height: '100%' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon style={styles.iconstyle} />
                </TouchableOpacity>
                <View style = {{justifyContent:'center', flex:0.9}}>
                    
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
                    <TouchableOpacity style={[styles.touchSignup]} onPress={handleTouchSend} >
                        <Text style={[styles.textTouchSigup]}>
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
                        <ResetIcon style={styles.ResetIconStyle} />
                        <Text style={styles.messageText1}>You password has been resend</Text>
                        <Text style={styles.messageText2}>You’ll shortly receive an email with a code to setup a new password</Text>
                        <TouchableOpacity style={[styles.touchDone]} onPress={handleTouchSend}>
                            <Text style={[styles.textTouchDone]}>
                                Done
                            </Text>
                        </TouchableOpacity>

                    </View>
                </Modal>
                </View>
            </ImageBackground>

        </SafeAreaView>
    );
};


