import { StyleSheet } from "react-native";
import { Colors } from "../../Until/Colors"

export const styles = StyleSheet.create({
    textDC: {
        color:  Colors.fourth,
        fontWeight: '500',
        textAlign: 'center'
    },
    viewResendCode: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    viewEnterCode: {
        flex: 1
    },
    iconBack: {
        paddingVertical: 35,
        marginLeft: 20
    },
    viewcircle: {
        margin: 10,
        width: 60,
        height: 60,
        backgroundColor:  Colors.eighth,
        borderRadius: 60 / 2,
        alignItems: 'center',
    },
    PhoneInput: {
    },
    viewLoginWith: {
        justifyContent: 'center',
    },
    textNewCode: {
        color:  Colors.second,
        fontWeight: '500',
        marginLeft: 5,
        textAlign: 'center',
    },
    message: {
        color: Colors.twelveth,
        fontSize: 14,
        fontWeight: '500',
        marginHorizontal: 45,
        textAlign: 'center',
        marginBottom: 70,
    },
    verifyText: {
        marginBottom: 25,
        textAlign: 'center',
        color: Colors.second,
        fontSize: 33,
        fontWeight: '600',
    },
    viewinput: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: Colors.fourth,
    },
    textConfirm: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.fifth,
    },
    viewTouch: {
        alignItems: 'center',
    },
    touchConfirm: {
        backgroundColor: Colors.second,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: 30,
    },
    safeview: {
        flex: 1,
        backgroundColor: Colors.fifth,
    },

});