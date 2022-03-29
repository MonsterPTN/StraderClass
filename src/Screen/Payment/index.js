import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import BackIcon from '../../Icons/BackIcon'
import NonIcon from '../../Icons/NonIcon'
import VNDIcon from '../../Icons/VNDIcon'
import PaymentWalletIcon from '../../Icons/PaymentWalletIcon'
import DouTickIcon from '../../Icons/DouTickIcon'
import RitghtOrangeIcon from '../../Icons/RitghtOrangeIcon'
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./styles";
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
        <View style={styles.viewMain}>
            <View style={styles.view5}>
                <TouchableOpacity style={{ paddingLeft: 6 }} onPress={() => navigation.navigate('Lesturers')}>
                    <BackIcon style={styles.iconHeader} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Payment</Text>
                <View style={{ paddingLeft: 6 }}><NonIcon style={styles.iconHeader} /></View>
            </View>

            <ScrollView >
                <View>
                    <View >
                        <Text style={styles.text9}>Your order</Text>
                        <View style={styles.view4}>
                            <View style={{ flex: 1.4 }}>
                                <Text style={styles.text6}>Month package - 1 month</Text>
                                <Text style={styles.text7}>Next time continue to renew with 399,000. Auto-renew 1 month after expiration. Cancel anytime</Text>
                            </View>
                            <View style={styles.view3}>
                                <Text style={styles.text8}>399.000</Text>
                                <VNDIcon />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 24 }}>
                    <Text style={styles.text3}>Payment methods</Text>
                </View>
                {isLiked.map((item) => (
                    <RadioButton
                        onPress={() => onRadioBtnClick(item)}
                        selected={item.selected}
                        key={item.id}
                    >
                        <View style={{ flex: 1 }} >
                            <Text style={styles.text5}>{item.name}</Text>
                            <Text style={styles.text4}>{item.name2}</Text>
                        </View>
                    </RadioButton>
                ))}

                <View style={{ marginTop: 24 }}>
                    <Text style={styles.text3}>Privilege benefits</Text>
                </View>
                <View style = {styles.view2}>
                    <View style = {styles.view1}>
                        <DouTickIcon />
                        <Text style={styles.text1}>75% discount. Opportunity to learn from billionaire founders</Text>
                    </View>
                    <View style = {styles.view1}>
                        <DouTickIcon />
                        <Text style={styles.text1}>New courses from brilliant people are produced every month</Text>
                    </View>
                    <View style = {styles.view1}>
                        <DouTickIcon />
                        <Text style={styles.text1}>Exclusive, quality community</Text>
                    </View>
                    <View style = {styles.view1}>
                        <DouTickIcon />
                        <Text style={styles.text1}>Live Q&A at any time</Text>
                    </View>
                </View>
                <View marginTop={27}>
                    <TouchableOpacity style={styles.tou1}>
                        <Text style={styles.text2}>Redemption code</Text>
                        <RitghtOrangeIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tou1}>
                        <Text style={styles.text2}>Frequently asked questions</Text>
                        <RitghtOrangeIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tou1}>
                        <Text style={styles.text2}>Auto-Renew Subscription Rules</Text>
                        <RitghtOrangeIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tou1}>
                        <Text style={styles.text2}>Service Agreement</Text>
                        <RitghtOrangeIcon />
                    </TouchableOpacity>
                </View> 

            <TouchableOpacity style = {styles.touRe}>
                <Text style = {styles.textTou}>
                Registration
                </Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default PaymentScreen;

