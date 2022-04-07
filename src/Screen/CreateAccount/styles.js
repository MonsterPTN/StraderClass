import { StyleSheet } from "react-native";
import { Colors } from "../../Until/Colors";
import {Fonts} from '../../Until/Fonts';
export const styles = StyleSheet.create({
    textWR: {
        color: Colors.fourth,
        fontWeight: '500'
    },
    textBF: {
        color:  Colors.fourth,
        fontWeight: '500',
        fontFamily:Fonts.font_700
    },
    iconBack: {
        paddingVertical: 35,
        marginLeft: 20
    },
    descripText: {
        textAlign: 'center',
        color: Colors.second,
        marginBottom: 30,

    },
    createText: {
        marginBottom: 50,
        textAlign: 'center',
        color: Colors.second,
        fontSize: 33,
        fontWeight: '600',

    },
    textForgot: {
        margin: 10,
        color:  Colors.fourth,
        fontWeight: '500',
        textAlign: 'center',
    },
    textSignup: {
        color: Colors.second,
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
        borderRadius: 5,
        backgroundColor:  Colors.eleventh,
        borderColor: Colors.second,
        paddingHorizontal: 25,
        color: Colors.second,
        margin: 10,

    },
    textTouchSigup: {
        color: Colors.fifth,
        fontSize: 14,
        fontWeight: '700',
    },
    viewTouch: {
        alignItems: 'center',
        marginBottom: 40,
    },
    touchSignup: {
        backgroundColor: Colors.second,
        width: '90%',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 35,
    },
    safeview: {
        flex: 1,
        backgroundColor:  Colors.fifth,
    },
});

