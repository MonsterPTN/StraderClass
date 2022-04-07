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
        color:  Colors.fifth,
        fontSize: 14,
        fontWeight: '500',
    },
    touchDone: {
        backgroundColor:  Colors.second,
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
        color:  Colors.fourth,
        fontSize: 21,
        marginHorizontal: 85,
        textAlign: 'center',
        fontWeight: '700',
    },
    viewMesage: {
        flex: 1,
        backgroundColor:  Colors.primary,
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
        color:  Colors.second,
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
        backgroundColor:  Colors.eleventh,
        borderColor:  Colors.second,
        paddingHorizontal: 25,
        color:  Colors.second,
        margin: 10,

    },
    textTouchSigup: {
        fontSize: 14,
        fontWeight: '700',
        color:  Colors.fifth
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
        backgroundColor:  Colors.second,
    },
    safeview: {
        flex: 1,
        backgroundColor:  Colors.fifth,
    },
    viewBot: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }

});