
import React, { useState, useEffect } from 'react';
import { styles } from './styles'
import {Colors} from '../../Until/Colors'

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
    Alert,
} from 'react-native';
import BackIcon from '../../Icons/BackIconLG/BackIconLG'

export default function App({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [fullname, setFullname] = useState('');
    const [confirmpass, setConfirm] = useState('');

    useEffect(() => {
        return () => {
        }
    }, [])

    const handleRegiser = () => {
        console.log(password)
        console.log(confirmpass)
        const apiURL = 'https://traderclass.vn/api/register';
        fetch(apiURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                fullname: fullname,
                password_confirmation: confirmpass,
            }),
        })
            .then((res) => res.json())
            .then((resJson) => {
                console.log(resJson)
                if (!resJson.status) {
                    Alert.alert("message", resJson.msg)
                } else {
                    navigation.navigate('VerifyPhone')
                }
            }).catch((error) => {
                console.log('Error: ', error);
            }).finally()
    }
    return (
        <SafeAreaView style={styles.safeview}>
            <View style={styles.viewTop}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon style={styles.iconBack} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View>
                    <Text style={styles.createText}>Create an account</Text>
                </View>
                <View style={styles.viewinput}>
                    <TextInput
                        value={fullname}
                        onChangeText={setFullname}
                        style={styles.input}
                        placeholder="UserName..."
                        placeholderTextColor={Colors.second}
                    >

                    </TextInput>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        placeholder="Email..."
                        placeholderTextColor={'#FF8600'}
                    >

                    </TextInput>
                    <TextInput
                        value={password}
                        onChangeText={setPassWord}
                        style={styles.input}
                        placeholder="Password..."
                        placeholderTextColor={'#FF8600'}
                        secureTextEntry

                    >

                    </TextInput>
                    <TextInput
                        value={confirmpass}
                        onChangeText={setConfirm}
                        style={styles.input}
                        placeholder="Re-enter password..."
                        placeholderTextColor={'#FF8600'}
                        secureTextEntry
                    >
                    </TextInput>
                </View>

                <View style={styles.viewTouch}>
                    <TouchableOpacity style={[styles.touchSignup]} onPress={(handleRegiser)}>
                        <Text style={[styles.textTouchSigup]}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTextbottom}>
                    <Text style={styles.textBF}>
                        By Click Sign up you to the following
                    </Text>
                    <Text style={styles.textSignup}>
                        Term and
                    </Text>
                </View>
                <View style={styles.viewTextbottom}>
                    <Text style={styles.textSignup}>
                        Conditions
                    </Text>
                    <Text style={styles.textWR}>
                        without reservation
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};