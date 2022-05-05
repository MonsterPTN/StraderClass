import React from "react";
import { Text, View, Image, TouchableOpacity,Alert } from 'react-native';
import BackIcon from '../../Icons/BackIcon'
import NonIcon from '../../Icons/NonIcon'
import Num1Icon from '../../Icons/Num1Icon'
import Num2Icon from '../../Icons/Num2Icon'
import Num3Icon from '../../Icons/Num3Icon'
import { styles } from "./styles";
import GoBack from '../../Components/GoBack'
import Clipboard from '@react-native-community/clipboard';
import { AuthContext } from "../../Redux/AuthContext";
const IntroduceScreen = (props) => {
    const { token } = useContext(AuthContext)
    const copy = 'https://traderclass.vn/user/'+ token.userToken
    const writeToClipboard = async () => {
        //To copy the text to clipboard
        Clipboard.setString(copy);
        Alert.alert("Messenger",'Copied to Clipboard!');
      };
    return (
        <View style={styles.viewAll}>
            <View style={styles.header}>

            <GoBack navigation={props.navigation}/>
                <Text style={styles.textHeader}>Referral</Text>
                <View style={{ paddingLeft: 6 }}><NonIcon style={styles.iconHeader} /></View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Text style={styles.text2}>Help your friends know and experience Traderclass</Text>
                    <Text style={styles.textShare}>Share Now</Text>
                </View>
                <Image source={require('../../Static/Image/people.png')} style={{ marginTop: 33 }}></Image>
            </View>
            <TouchableOpacity style={styles.viewShare} onPress={writeToClipboard}>
                <Text style={styles.text1}
                numberOfLines = {1}
                >{copy}</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 16 }}>
                <Text style={styles.text3}>How it works</Text>
                <View style={styles.view1}>
                    <Num1Icon />
                    <Text style={styles.textTitle}>Share the link and invite you to join Traderclass.</Text>
                </View>
                <View style={styles.view1}>
                    <Num2Icon />
                    <Text style={styles.textTitle}>Your friends download and sign up for the app.</Text>
                </View>
                <View style={styles.view1}>
                    <Num3Icon />
                    <Text style={styles.textTitle}>You and they will receive a bonus from Traderclass.</Text>
                </View>
            </View>

        </View>
    )
}
export default IntroduceScreen;
