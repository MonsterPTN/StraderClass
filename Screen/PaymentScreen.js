import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import BackIcon from '../Icon/BackIcon'
import NonIcon from '../Icon/NonIcon'
import VNDIcon from '../Icon/VNDIcon'
import PaymentWalletIcon from '../Icon/PaymentWalletIcon'
import DouTickIcon from '../Icon/DouTickIcon'
import RitghtOrangeIcon from '../Icon/RitghtOrangeIcon'
import { ScrollView } from "react-native-gesture-handler";
const RadioButton = ({ onPress, selected, children }) => {
    return (


        <View style={{ backgroundColor: '#272A38', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 5, paddingVertical: 10, borderRadius: 5 }}>
            <View flexDirection={'row'} marginLeft={5}>
                <TouchableOpacity onPress={onPress}>
                    <PaymentWalletIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress} style={{ flexDirection: 'column' }}>
                    <Text style={styles.radioButtonText}>{children}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={onPress} style={styles.radioButton}>
                {selected ? <View style={styles.radioButtonIcon} /> : null}
            </TouchableOpacity>

        </View>

    );
};

const PaymentScreen = ({ navigation }) => {
    const [isLiked, setIsLiked] = useState([
        { id: 1, value: true, name: "Google Play", name2: "Support payment via Momo, ZaloPay", selected: true },
        { id: 2, value: false, name: "Bank card", name2: "MasterCard, Visa, JCB", selected: false }
    ]);
    const onRadioBtnClick = (item) => {
        let updatedState = isLiked.map((isLikedItem) =>
            isLikedItem.id === item.id
                ? { ...isLikedItem, selected: true }
                : { ...isLikedItem, selected: false }
        );
        setIsLiked(updatedState);
    };
    return (
        <View style={{ flex: 1, backgroundColor: '#171921', padding: 15 , }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 25, justifyContent: 'space-between',marginBottom:24 }}>
                <TouchableOpacity style={{ paddingLeft: 6 }} onPress={() => navigation.navigate('Lesturers')}>
                    <BackIcon style={styles.iconHeader} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Payment</Text>
                <View style={{ paddingLeft: 6 }}><NonIcon style={styles.iconHeader} /></View>
            </View>

            <ScrollView >
                <View>
                    <View >
                        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'normal' }}>Your order</Text>
                        <View style={{ backgroundColor: '#272A38', height: 90, marginTop: 7, flexDirection: 'row', borderRadius: 5 }}>
                            <View style={{ flex: 1.4 }}>
                                <Text style={{ marginLeft: 5, marginTop: 14, color: 'white', fontSize: 12, fontWeight: 'normal' }}>Month package - 1 month</Text>
                                <Text style={{ marginLeft: 5, marginTop: 9, color: '#828282', fontSize: 9, fontWeight: 'normal' }}>Next time continue to renew with 399,000. Auto-renew 1 month after expiration. Cancel anytime</Text>
                            </View>
                            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginRight: 8 }}>
                                <Text style={{ fontSize: 21, fontWeight: 'bold', color: '#FF8600', marginRight: 5 }}>399.000</Text>
                                <VNDIcon />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 24 }}>
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: 'normal', marginBottom: 12 }}>Payment methods</Text>
                </View>
                {isLiked.map((item) => (
                    <RadioButton
                        onPress={() => onRadioBtnClick(item)}
                        selected={item.selected}
                        key={item.id}
                    >
                        <View style={{ flex: 1 }} >
                            <Text style={{ color: 'white', fontSize: 12 }}>{item.name}</Text>
                            <Text style={{ color: '#FF8600', fontSize: 9 }}>{item.name2}</Text>
                        </View>
                    </RadioButton>
                ))}

                <View style={{ marginTop: 24 }}>
                    <Text style={{ color: 'white', fontSize: 12, fontWeight: 'normal', marginBottom: 12 }}>Privilege benefits</Text>
                </View>
                <View backgroundColor={'#272A38'} padding={5} borderRadius={5}>
                    <View flexDirection={'row'} alignItems={'center'}>
                        <DouTickIcon />
                        <Text style={{ fontWeight: 'normal', color: '#FF8600', fontSize: 10, marginLeft: 5 }}>75% discount. Opportunity to learn from billionaire founders</Text>
                    </View>
                    <View flexDirection={'row'} alignItems={'center'}>
                        <DouTickIcon />
                        <Text style={{ fontWeight: 'normal', color: '#FF8600', fontSize: 10, marginLeft: 5 }}>New courses from brilliant people are produced every month</Text>
                    </View>
                    <View flexDirection={'row'} alignItems={'center'}>
                        <DouTickIcon />
                        <Text style={{ fontWeight: 'normal', color: '#FF8600', fontSize: 10, marginLeft: 5 }}>Exclusive, quality community</Text>
                    </View>
                    <View flexDirection={'row'} alignItems={'center'}>
                        <DouTickIcon />
                        <Text style={{ fontWeight: 'normal', color: '#FF8600', fontSize: 10, marginLeft: 5 }}>Live Q&A at any time</Text>
                    </View>
                </View>
                <View marginTop={27}>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, backgroundColor: '#272A38', borderRadius: 5, marginTop: 3, alignItems: 'center' }}>
                        <Text style={{ color: '#FF8600', fontSize: 12, fontWeight: 'bold' }}>Redemption code</Text>
                        <RitghtOrangeIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, backgroundColor: '#272A38', borderRadius: 5, marginTop: 3, alignItems: 'center' }}>
                        <Text style={{ color: '#FF8600', fontSize: 12, fontWeight: 'bold' }}>Frequently asked questions</Text>
                        <RitghtOrangeIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, backgroundColor: '#272A38', borderRadius: 5, marginTop: 3, alignItems: 'center' }}>
                        <Text style={{ color: '#FF8600', fontSize: 12, fontWeight: 'bold' }}>Auto-Renew Subscription Rules</Text>
                        <RitghtOrangeIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, backgroundColor: '#272A38', borderRadius: 5, marginTop: 3, alignItems: 'center' }}>
                        <Text style={{ color: '#FF8600', fontSize: 12, fontWeight: 'bold' }}>Service Agreement</Text>
                        <RitghtOrangeIcon />
                    </TouchableOpacity>
                </View> 

            <TouchableOpacity style = {{backgroundColor:'#FF8600', alignItems:'center', marginTop:40, borderRadius:5}}>
                <Text style = {{fontSize:12,fontWeight:'bold', paddingVertical:16}}>
                Registration
                </Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default PaymentScreen;

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
    textInfo: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'Poppins',
        
    },
    viewTouch2: {
        marginTop: 13
    },
    viewTouch: {
        marginTop: 23
    },
    touchSave: {
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: '#FF8600',
        borderWidth: 1,
        justifyContent: 'flex-start',
        paddingVertical: 9
    },
    textEmail: {
        color: '#FF8600',
        fontSize: 11,
        fontWeight: 'bold'
    },
    textTouchLanguage: {
        color: '#FF8600',
        fontSize: 18,
        marginLeft: 15,
    },
    title: {
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginVertical: "1em",
        textAlign: "center"
    },
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
        justifyContent: 'space-between'


    },
    radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5
    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6",

    },
    radioButtonText: {
        fontSize: 16,
        marginLeft: 16,
        color: 'white',
        justifyContent: 'flex-end'
    },
    text: {
        lineHeight: 30,
        fontSize: 20,
        marginVertical: 5
    }
})