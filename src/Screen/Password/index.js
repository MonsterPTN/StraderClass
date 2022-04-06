import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from "react-native";
import BackIcon from '../../Icons/BackIcon'
import NonIcon from '../../Icons/NonIcon'
import SaveIcon from '../../Icons/SaveIcon'
import { styles } from "./styles";
import GoBack from '../../Components/GoBack'
import { AuthContext } from "../../Redux/AuthContext";
const UpdatePasswordScreen = (props) => {
    const { token } = useContext(AuthContext)
    const [currentPassword, setCurrentPassword] = useState();
    const [password, setPassword] = useState();
    const [password_confirmation, setPassword_confirmation] = useState();
    const getUpDaTePassword = () => {
        const apiURL = 'https://traderclass.vn/api/update-password';
        fetch(apiURL, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token.userToken.token != "" ? `Bearer ${token.userToken.token}` : ""
            },
            body: JSON.stringify({
                currentPassword: currentPassword,
                password: password,
                password_confirmation: password_confirmation,
            })
        })
            .then((res) => res.json())
            .then((resJson) => {
                console.log(resJson)
                if (!resJson.status) {
                    Alert.alert("message", resJson.msg)
                } else {
                    props.navigation.navigate('SiginScreen')
                }
            }).catch((error) => {
                console.log('Error: ', error);
            }).finally()
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#171921', padding: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 25, justifyContent: 'space-between' }}>
                <GoBack navigation={props.navigation} />
                <Text style={styles.textHeader}>Change Password</Text>
                <View style={{ paddingLeft: 6 }}><NonIcon style={styles.iconHeader} /></View>
            </View>
            <View style={{ marginTop: 42 }}>
                <Text style={styles.textInfo}>The password will be changed and the account will be logged out and required to log in again.</Text>
            </View>
            <View>
                <View style={styles.viewTouch}>
                    <Text style={styles.textEmail}>
                        Password
                    </Text>
                    <TextInput
                        value={currentPassword}
                        onChangeText={setCurrentPassword}
                        backgroundColor={'#272A38'}
                        style={{ height: 50 }}
                    />
                </View>
                <View style={styles.viewTouch2}>
                    <Text style={styles.textEmail}>
                        New Password
                    </Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        backgroundColor={'#272A38'}
                        style={{ height: 50 }}
                    />
                </View>
                <View style={styles.viewTouch2}>
                    <Text style={styles.textEmail}>
                        Re-enter Password
                    </Text>
                    <TextInput
                        value={password_confirmation}
                        onChangeText={setPassword_confirmation}
                        backgroundColor={'#272A38'}
                        style={{ height: 50 }}
                    />
                </View>
                <View style={{ marginTop: 16, marginHorizontal: 11 }}>
                    <TouchableOpacity style={[styles.touchSave]} onPress={() => getUpDaTePassword()}>
                        <SaveIcon />
                        <Text style={styles.textTouchSave} >Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default UpdatePasswordScreen;

