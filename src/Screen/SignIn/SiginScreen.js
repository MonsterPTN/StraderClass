
import React, { useState, useEffect, useContext } from 'react';
import { styles } from './styles'

import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';
import { AuthContext } from '../../Redux/AuthContext';


export default function App({ navigation }) {
    const { setToken } = useContext(AuthContext)
    const [email, setEmail] = useState('trader999@gmail.com');
    const [password, setPassWord] = useState('kaito123');


    useEffect(() => {
        return () => {
        }
    }, [])

    const getLogin = async () => {
        const apiURL = 'https://traderclass.vn/api/login';
        fetch(apiURL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((resJson) => {
                if (!resJson.status) {
                    Alert.alert("message", resJson.msg)

                } else {
                    setToken({ loading: false, userToken: resJson.data})
                    navigation.navigate('MainTabScreen')

                }

            }).catch((error) => {
                console.log('Error: ', error);
            })
    }

    return (


        <SafeAreaView style={styles.safeview}>
            <View style={styles.viewTop}>
            </View>

            <View style={styles.viewBot}>
                <View>
                    <Text style={styles.welcomeText}>Welcome back</Text>
                    <Text style={styles.descripText}>Login to your account</Text>
                </View>
                <View style={styles.viewinput}>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        placeholder="User..."
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
                </View>

                <View style={styles.viewTouch}>
                    <TouchableOpacity style={[styles.touchLogin]} onPress={() => getLogin()}>
                        <Text style={[styles.textTouch]}>
                            Log in
                        </Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <Text>

                    </Text>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text style={styles.textForgot}>Forgot yout Password</Text>
                        </TouchableOpacity>

                        <View style={styles.viewTouchSignup}>
                            <Text style={styles.textDA}>
                                Don't have an account ?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                                <Text style={styles.textSignup}>
                                    Sign up now !
                                </Text>
                            </TouchableOpacity>
                        </View>


                    </View>

                </View>
            </View>

        </SafeAreaView>
    );
};



