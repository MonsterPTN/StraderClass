import { StyleSheet } from "react-native";
import { Colors } from "../../Until/Colors";
import {Fonts} from '../../Until/Fonts'
export const styles = StyleSheet.create({
    textWR: {
        color: Colors.fourth,
        fontWeight: '500'
    },
    textBF: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontFamily:Fonts.font_700
    },
    iconBack: {
        paddingVertical: 35,
        marginLeft: 20
    },
    descripText: {
        textAlign: 'center',
        color: '#FF8600',
        marginBottom: 30,

    },
    createText: {
        marginBottom: 50,
        textAlign: 'center',
        color: '#FF8600',
        fontSize: 33,
        fontWeight: '600',

    },
    textForgot: {
        margin: 10,
        color: '#FFFFFF',
        fontWeight: '500',
        textAlign: 'center',
    },
    textSignup: {
        color: '#FF8600',
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
        borderRadius: 30,
        backgroundColor: '#272A38',
        borderColor: '#FF8600',
        paddingHorizontal: 25,
        color: '#FF8600',
        margin: 10,

    },
    textTouchSigup: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '700',
    },
    viewTouch: {
        alignItems: 'center',
        marginBottom: 40,
    },
    touchSignup: {
        backgroundColor: '#FF8600',
        width: '90%',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 35,
    },
    safeview: {
        flex: 1,
        backgroundColor: '#000000',
    },
});

