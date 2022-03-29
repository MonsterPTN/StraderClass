
import React from 'react';

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
} from 'react-native';
import BackIcon from '../../Icons/BackIconLG/BackIconLG'


export default function App({ navigation }) {

    return (


        <SafeAreaView style={styles.safeview}>
            <View style={styles.viewTop}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIcon style={{ paddingVertical: 35, marginLeft: 20 }} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View>
                    <Text style={styles.createText}>Create an account</Text>
                </View>
                <View style={styles.viewinput}>
                    <TextInput
                        style={styles.input}
                        placeholder="UserName..."
                        placeholderTextColor={'#FF8600'}
                    >

                    </TextInput>
                    <TextInput
                        style={styles.input}
                        placeholder="Email..."
                        placeholderTextColor={'#FF8600'}
                    >

                    </TextInput>
                    <TextInput
                        style={styles.input}
                        placeholder="Password..."
                        placeholderTextColor={'#FF8600'}
                        secureTextEntry

                    >

                    </TextInput>
                    <TextInput
                        style={styles.input}
                        placeholder="Re-enter password..."
                        placeholderTextColor={'#FF8600'}
                        secureTextEntry
                    >
                    </TextInput>
                </View>

                <View style={styles.viewTouch}>
                    <TouchableOpacity style={[styles.touchSignup, { backgroundColor: '#FF8600' }]} onPress={()=>navigation.navigate('VerifyPhone')}>
                        <Text style={[styles.textTouchSigup, { color: '#000000' }]}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewTextbottom}>
                    <Text style={{ color: '#FFFFFF', fontWeight: '500' }}>
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
                    <Text style={{ color: '#FFFFFF', fontWeight: '500' }}>
                        without reservation
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    descripText: {
        textAlign: 'center',
        color: '#FF8600',
        marginBottom: 30,

    },
    createText: {
        marginBottom: 70,
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
    viewTextbottom: {
        flexDirection: 'row',
        justifyContent: 'center',

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
        marginBottom: 40,
    },
    touchSignup: {
        width: '90%',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 35,
    },
    safeview: {
        flex: 1,
        backgroundColor: '#000000',
    },
});

