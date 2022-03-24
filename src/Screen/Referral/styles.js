import { StyleSheet } from "react-native";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";
import { scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    textHeader: {
        // height: 40,
        textAlign: 'center',
        color: Colors.fourth,
        fontSize: 19,
        fontFamily: Fonts.font_700,
        fontWeight: 'bold',

    },
    iconHeader: {
        paddingTop: 25,
    },
    textTitle: {
        fontSize: 13,
        fontWeight: 'normal',
        color: Colors.fourth,
        marginLeft: 6
    },
    text2: {
        fontSize: 14,
        fontWeight: 'normal',
        color: Colors.fourth,
        width: 184,
        marginTop: 84,
        marginLeft: 16
    },
    text1: {
        fontWeight: 'normal',
        fontSize: 16,
        color: Colors.second,
        marginLeft: 16
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        justifyContent: 'space-between'
    }, textShare: {
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors.second,
        marginLeft: 16,
        marginTop: 30
    },
    viewShare: {
        height: 56,
        backgroundColor: Colors.third,
        justifyContent: 'center',
        borderRadius: 5
    },
    viewAll: {
        flex: 1,
        backgroundColor:Colors.primary,
        padding: 15
    },
    text3:{
         fontSize: 16,
          fontWeight: 'bold',
           color: Colors.fourth 
        },
        view1:{ 
            flexDirection: 'row',
             marginTop: 16 
            }
});