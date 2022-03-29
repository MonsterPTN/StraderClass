
import React, { useState, useEffect } from 'react';

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
    Alert
} from 'react-native';


import allReducter from '../../Redux';
import { createStore } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
// import { State } from 'react-native-gesture-handler';

export default function App({ navigation }) {
    const [email, setEmail] = useState('trader123456@gmail.com');
    const [password, setPassWord] = useState('kaito123');
    const Name = useSelector(State => State.name);
    const tonkon = useSelector(State => State.usertoken);

    const store = createStore(allReducter);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
        }
    }, [])

    const getLogin = () => {
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
           
                    store.dispatch({ type: "Login", payload: resJson.data.token })
                    navigation.navigate('MainTabScreen')

                    // console.log("name " + resJson.data.token)
                    

                }

            }).catch((error) => {
                console.log('Error: ', error);
            }).finally()
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
                    <TouchableOpacity style={[styles.touchLogin, { backgroundColor: '#FF8600' }]} onPress={getLogin}>
                        <Text style={[styles.textTouch, { color: '#000000' }]}>
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
                            <Text style={{ color: '#FFFFFF', fontWeight: '500' }}>
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

const styles = StyleSheet.create({
    descripText: {
        textAlign: 'center',
        color: '#FF8600',
        marginBottom: 30,

    },
    welcomeText: {
        marginTop: 30,
        textAlign: 'center',
        color: '#FF8600',
        fontSize: 33,
        fontWeight: '600',

    },
    textForgot: {
        margin: 10,
        color: '#FFFFFF',
        fontWeight: '500',
        textAlign: 'center',
    },
    textSignup: {
        color: '#FF8600',
        fontWeight: '500',
        marginLeft: 5,
    },
    viewTouchSignup: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20,

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
        margin: 6,

    },
    textTouch: {
        fontSize: 14,
        fontWeight: '700',
    },
    viewTouch: {
        alignItems: 'center',
    },
    touchLogin: {
        width: '90%',
        alignItems: 'center',
        paddingVertical: 17,
        borderRadius: 30,
        marginTop: 35,
    },
    safeview: {
        flex: 1,
        backgroundColor: '#171921',
    },
    viewTop: {
        flex: 2,
        backgroundColor: '#171921',
    },
    viewBot: {
        flex: 3,
        backgroundColor: '#000000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }

});

