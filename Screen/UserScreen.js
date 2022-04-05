import React, { useContext } from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import NonIcon from '../Icon/NonIcon';
import BackIcon from '../Icon/BackIcon';
import RightIcon from '../Icon/RightIcon';
import RectagleLongIcon from '../Icon/RectagleLongIcon';
import VipIcon from '../Icon/VipIcon'
import GroupAddIcon from '../Icon/GroupAddIcon'
import EmailIcon from '../Icon/EmailIcon'
import LockIcon from '../Icon/LockIcon'
import PinIcon from '../Icon/PinIcon'
import LogOutIcon from '../Icon/LogOutIcon'
import TempIcon from '../Icon/TempIcon'
import TouchHistoryMath from "react-native/Libraries/Interaction/TouchHistoryMath";
import { AuthContext } from "../src/Redux/AuthContext";

const UserScreen = ({ navigation }) => {
    const { token } = useContext(AuthContext)

    return (
        <View style={{ backgroundColor: '#171921', padding: 15 }}>

            
            <View style={styles.header}>

                <TouchableOpacity style={{ paddingLeft: 6 }} onPress={() => navigation.navigate('MainTabScreen')}>
                    <BackIcon style={styles.iconHeader} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>User</Text>
                <View style={{ paddingLeft: 6 }}><NonIcon style={styles.iconHeader} /></View>
            </View>
            <ScrollView style={{ marginBottom: 25 }} >

                <View style={{ backgroundColor: '#272A38' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>

                        <View style={styles.viewTouch}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../Image/imguser.png')} style={styles.imgUser}></Image>
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={styles.nameUser}>{token.userToken}</Text>
                                    <Text style={styles.number}>0366478995</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <RightIcon />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <RectagleLongIcon />
                    <TouchableOpacity onPress={() => navigation.navigate('MembershipScreen')}>

                        <View style={styles.viewTouch}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <VipIcon />
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={styles.textTitle}>Membership package</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <RightIcon />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 17, backgroundColor: '#272A38' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('IntroduceScreen')} >

                        <View style={styles.viewTouch}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <GroupAddIcon />
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={styles.textTitle}>Referral</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <RightIcon />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <RectagleLongIcon />
                    <TouchableOpacity onPress={() => navigation.navigate('UpdateEmailScreen')}>

                        <View style={styles.viewTouch}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <EmailIcon />
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={styles.textTitle}>Update Email</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <RightIcon />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 17, backgroundColor: '#272A38' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('UpdatePasswordScreen')} >

                        <View style={styles.viewTouch}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <LockIcon />
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={styles.textTitle}>Change the password</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <RightIcon />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <RectagleLongIcon />
                    <TouchableOpacity onPress={() => navigation.navigate('ChagePinScreen')}>

                        <View style={styles.viewTouch}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <PinIcon />
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={styles.textTitle}>Change pin code</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <RightIcon />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 17, backgroundColor: '#272A38' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('LanguageScreen')}>

                        <View style={styles.viewTouch}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../Image/languageIcon.png')} />
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={styles.textTitle}>Language</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <RightIcon />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <RectagleLongIcon />
                    <TouchableOpacity onPress={() => navigation.navigate('TermsConditionsScreen')} >
                        <View style={styles.viewTouch}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TempIcon />
                                <View style={{ justifyContent: 'center' }}>
                                    <Text style={styles.textTitle}>Terms & Conditions</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center' }}>
                                <RightIcon />
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ marginTop: 21, flexDirection: 'row' }}>
                    <Text style={{ color: 'white', fontSize: 11 }}>Note</Text>
                    <Text style={{ color: '#9A9A9A', fontSize: 11 }}> Each account can only use one device. Do not share the account with others.</Text>
                </View>
                <TouchableOpacity style={styles.touSave}>
                    <LogOutIcon />
                    <Text style={{ paddingVertical: 9, marginLeft: 10, color: '#FF8600', fontSize: 19 }}>Log Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default UserScreen;
const styles = StyleSheet.create({
    textHeader: {
        // height: 40,
        textAlign: 'center',
        color: 'white',
        fontSize: 19,
        fontFamily: 'Poppins',
        fontWeight: 'bold',

    },
    iconHeader: {
        paddingTop: 25,
    },
    nameUser: {
        color: 'white',
        marginLeft: 25,
        fontWeight: 'bold',
        marginVertical: 3,
        fontSize: 15
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        justifyContent: 'space-between',
        marginBottom: 23
    },
    imgUser: {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderColor: '#FF8600'
        , borderWidth: 1,
    },
    number: {
        color: '#FF8600',
        marginLeft: 25,
        fontWeight: 'bold',
        marginVertical: 3,
        fontSize: 15
    },
    viewTouch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 15
    },
    textTitle: {
        color: 'white',
        marginLeft: 25,
        fontWeight: 'normal',
        marginVertical: 3,
        fontSize: 15
    },
    touSave: {
        marginHorizontal: 25,
        marginVertical: 45,
        borderRadius: 10,
        borderColor: '#FF8600',
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#272A38'
    }
});