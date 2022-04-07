
import React, { useState, useEffect, useContext } from 'react';
import { styles } from './styles'
import { Colors } from '../../Until/Colors'

import {
    SafeAreaView,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Alert,
    ImageBackground
} from 'react-native';
import { AuthContext } from '../../Redux/AuthContext';


export default function App({ navigation }) {
    const { setToken } = useContext(AuthContext)
    const [email, setEmail] = useState('admin@gmail.com');
    const [password, setPassWord] = useState('1234567');
    const { token } = useContext(AuthContext)

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
            <ImageBackground source={require('../../Static/Image/images.jpg')} style = {{height:'100%',flex:1,justifyContent:'center'}} imageStyle = {{height:'100%'}}>
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
                        placeholderTextColor={Colors.second}
                    >

                    </TextInput>
                    <TextInput
                        value={password}
                        onChangeText={setPassWord}
                        style={styles.input}
                        placeholder="Password..."
                        placeholderTextColor={Colors.second}
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
            </ImageBackground>
            

        </SafeAreaView>
    );
};



