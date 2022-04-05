import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import BackIcon from '../../Icons/BackIcon'
import NonIcon from '../../Icons/NonIcon'
import SaveIcon from '../../Icons/SaveIcon'
import { styles } from "./styles";
import { Colors } from "../../Until/Colors";
import GoBack from '../../Components/GoBack'
const UpdateEmailScreen = (props) => {
    return (
        <View style={styles.viewMain}>
            <View style={styles.view1}>
            <GoBack navigation={props.navigation}/>
                <Text style={styles.textHeader}>Update Email</Text>
                <View style={{ paddingLeft: 6 }}><NonIcon style={styles.iconHeader} /></View>
            </View>
            <View style={{ marginTop: 42 }}>
                <Text style={styles.textInfo}>Your email address will not change until it`s been verified. Resend verification email</Text>
            </View>
            <View>
                <View style={styles.viewTouch}>
                    <Text style={styles.textEmail}>
                        Email
                    </Text>
                    <TextInput
                        backgroundColor={Colors.third}
                        style={{ height: 50 }}
                    />
                </View>
                <View style={styles.viewTouch2}>
                    <Text style={styles.textEmail}>
                        New Email
                    </Text>
                    <TextInput
                        backgroundColor={Colors.third}
                        style={{ height: 50 }}
                    />
                </View>
                <View style={styles.viewTouch2}>
                    <Text style={styles.textEmail}>
                        Re-enter Email
                    </Text>
                    <TextInput
                        backgroundColor={Colors.third}
                        style={{ height: 50 }}
                    />
                </View>
                <View style={styles.view2}>
                    <TouchableOpacity style={styles.touchSave}>
                        <SaveIcon />
                        <Text style={styles.textTouchSave} >Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default UpdateEmailScreen;

