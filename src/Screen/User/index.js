import React, { useContext, useEffect, useState } from "react";
import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import NonIcon from '../../Icons/NonIcon';
import BackIcon from '../../Icons/BackIcon';
import RightIcon from '../../Icons/RightIcon';
import RectagleLongIcon from '../../Icons/RectagleLongIcon';
import VipIcon from '../../Icons/VipIcon'
import GroupAddIcon from '../../Icons/GroupAddIcon'
import EmailIcon from '../../Icons/EmailIcon'
import LockIcon from '../../Icons/LockIcon'
import PinIcon from '../../Icons/PinIcon'
import LogOutIcon from '../../Icons/LogOutIcon'
import TempIcon from '../../Icons/TempIcon'
import LanguageIcon from '../../Icons/LanguageIcon'
import { styles } from "./styles";
import GoBack from '../../Components/GoBack'
import { AuthContext } from "../../Redux/AuthContext";
const UserScreen = (props) => {
    const { token } = useContext(AuthContext)
    const [fullname, setFullname] = useState('');
    const [phone, setphone] = useState('');
    const [photo, setphoto] = useState('');
    const [address, setAddress] = useState('');
    
    useEffect(()=>{

    },[])
    const getUser = () => {
        const apiURL = 'https://traderclass.vn/api/user';
        fetch(apiURL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token.userToken.token  ? `Bearer ${token.userToken.token}` : ""
            },
        })
            .then((res) => res.json())
            .then((resJson) => {
                console.log("asdasd" ,resJson)
                if (!resJson.status) {
                    Alert.alert("message", resJson.msg)
                } else {
                    setFullname(resJson.data.fullname + "")
                    setphone(resJson.data.phone + "")
                    setphoto(resJson.data.photo + "")
                    setAddress(resJson.data.address + "")

                }

            }).catch((error) => {
                console.log('Error: ', error);
            }).finally()
    }

    useEffect(() => {
       getUser()
    }, [])
 
    const getLogout = () => {
    const apiURL = 'https://traderclass.vn/api/logout';
    fetch(apiURL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token.data != "" ? `Bearer ${token.data}` : ""
        },
        body: JSON.stringify({
           
        })
    })
        .then((res) => res.json())
        .then((resJson) => {
            console.log(resJson)
            if (!resJson.status) {
                Alert.alert("message", resJson.msg)
            } else {
                props.navigation.navigate('StartScreen')
            }
        }).catch((error) => {
            console.log('Error: ', error);
        }).finally()
}
    return (
        <View style={styles.viewMain}>
            <View style={styles.header}>

                <TouchableOpacity style={{ paddingLeft: 6 }}  onPress={() => props.navigation.goBack()}>
                   <GoBack navigation={props.navigation}/>
                </TouchableOpacity>
                <Text style={styles.textHeader}>User</Text>
                <View style={{ paddingLeft: 6 }}><NonIcon style={styles.iconHeader} /></View>
            </View>
            <ScrollView style={{ marginBottom: 25 }} >

                <View style={styles.view1}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>

                        <View style={styles.viewTouch}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={{uri: photo}} style={styles.imgUser}></Image>
                                <View style={styles.view2}>
                                    <Text style={styles.nameUser}>{fullname}</Text>
                                    <Text style={styles.number}>{phone}</Text>
                                </View>
                            </View>
                            <View style={styles.view2}>
                                <RightIcon />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <RectagleLongIcon />
                    <TouchableOpacity onPress={() => props.navigation.navigate('Membership')}>

                        <View style={styles.viewTouch}>
                            <View style={styles.view3}>
                                <VipIcon />
                                <View style={styles.view2}>
                                    <Text style={styles.textTitle}>Membership package</Text>
                                </View>
                            </View>
                            <View style={styles.view2}>
                                <RightIcon />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.view4}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Referall')}>

                        <View style={styles.viewTouch}>
                            <View style={styles.view3}>
                                <GroupAddIcon />
                                <View style={styles.view2}>
                                    <Text style={styles.textTitle}>Referral</Text>
                                </View>
                            </View>
                            <View style={styles.view2}>
                                <RightIcon />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <RectagleLongIcon />
                    <TouchableOpacity onPress={() => props.navigation.navigate('UpdateEmail')}>

                        <View style={styles.viewTouch}>
                            <View style={styles.view3}>
                                <EmailIcon />
                                <View style={styles.view2}>
                                    <Text style={styles.textTitle}>Update Email</Text>
                                </View>
                            </View>
                            <View style={styles.view2}>
                                <RightIcon />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.view4}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Password')}>

                        <View style={styles.viewTouch}>
                            <View style={styles.view3}>
                                <LockIcon />
                                <View style={styles.view2}>
                                    <Text style={styles.textTitle}>Change the password</Text>
                                </View>
                            </View>
                            <View style={styles.view2}>
                                <RightIcon />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <RectagleLongIcon />
                    <TouchableOpacity >

                        <View style={styles.viewTouch}>
                            <View style={styles.view3}>
                                <PinIcon />
                                <View style={styles.view2}>
                                    <Text style={styles.textTitle}>Change pin code</Text>
                                </View>
                            </View>
                            <View style={styles.view2}>
                                <RightIcon />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.view4}>
                    <TouchableOpacity >

                        <View style={styles.viewTouch}>
                            <View style={styles.view3}>
                                <LanguageIcon />
                                <View style={styles.view2}>
                                    <Text style={styles.textTitle}>Language</Text>
                                </View>
                            </View>
                            <View style={styles.view2}>
                                <RightIcon />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <RectagleLongIcon />
                    <TouchableOpacity onPress={() => props.navigation.navigate('Terms')}>
                        <View style={styles.viewTouch}>
                            <View style={styles.view3}>
                                <TempIcon />
                                <View style={styles.view2}>
                                    <Text style={styles.textTitle}>Terms & Conditions</Text>
                                </View>
                            </View>
                            <View style={styles.view2}>
                                <RightIcon />
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.view5}>
                    <Text style={styles.text1}>Note</Text>
                    <Text style={styles.text2}> Each account can only use one device. Do not share the account with others.</Text>
                </View>
                <TouchableOpacity style={[styles.touSave]} onPress={() => getLogout()}>
                    <LogOutIcon />
                    <Text style={styles.text3}>Log Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default UserScreen;
