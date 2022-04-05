import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import BackIcon from '../../Icons/BackIcon'
import NonIcon from '../../Icons/NonIcon'
import SaveIcon from '../../Icons/SaveIcon'
import { styles } from "./styles";
import GoBack from '../../Components/GoBack'
const UpdatePasswordScreen = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#171921', padding: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 25, justifyContent: 'space-between' }}>
            <GoBack navigation={props.navigation}/>
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
                        backgroundColor={'#272A38'}
                        style={{ height: 50 }}
                    />
                </View>
                <View style={styles.viewTouch2}>
                    <Text style={styles.textEmail}>
                        New Password
                    </Text>
                    <TextInput
                        backgroundColor={'#272A38'}
                        style={{ height: 50 }}
                    />
                </View>
                <View style={styles.viewTouch2}>
                    <Text style={styles.textEmail}>
                        Re-enter Password
                    </Text>
                    <TextInput
                        backgroundColor={'#272A38'}
                        style={{ height: 50 }}
                    />
                </View>
                <View style={{ marginTop: 16, marginHorizontal: 11 }}>
                    <TouchableOpacity style={styles.touchSave}>
                        <SaveIcon />
                        <Text style={styles.textTouchSave} >Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default UpdatePasswordScreen;

