import { StyleSheet } from "react-native";
import { Colors } from '../../Until/Colors';

export const styles = StyleSheet.create({
    ResetIconStyle: {
        margin: 20
    },
    iconstyle: {
        paddingVertical: 35,
        marginLeft: 20
    },
    textTouchDone: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '500',
    },
    touchDone: {
        backgroundColor: '#FF8600',
        width: '70%',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,

    },
    messageText2: {
        color: '#9A9A9A',
        fontSize: 12,
        marginHorizontal: 50,
        textAlign: 'center',
        margin: 20,

    },
    messageText1: {
        color: '#FFFFFF',
        fontSize: 21,
        marginHorizontal: 85,
        textAlign: 'center',
        fontWeight: '700',
    },
    viewMesage: {
        flex: 1,
        backgroundColor: '#171921',
        height: '100%',
        marginHorizontal: 20,
        marginVertical: 200,
        borderRadius: 15,
        alignItems: 'center',

    },
    message: {
        color: Colors.third,
        fontSize: 14,
        fontWeight: '500',
        marginHorizontal: 45,
        textAlign: 'center',
        marginBottom: 4,
    },

    forgotText: {
        marginBottom: 22,
        textAlign: 'center',
        color: '#FF8600',
        fontSize: 33,
        fontWeight: '600',

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
        fontSize: 14,
        fontWeight: '700',
        color: '#000000'
    },
    viewTouch: {
        alignItems: 'center',
    },
    touchSignup: {
        width: '90%',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 30,
        backgroundColor: '#FF8600'
    },
    safeview: {
        flex: 1,
        backgroundColor: '#000000',
    },
    viewBot: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }

});