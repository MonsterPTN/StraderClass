import { StyleSheet } from "react-native";
import { Colors } from '../../Until/Colors'

export const styles = StyleSheet.create({
    viewBot: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    textOW: {
        color: Colors.fourth,
        fontWeight: '500'
    },
    container: {
        borderRadius: 30,
        backgroundColor: 'white'
    },
    textContainer: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: Colors.third,
        borderWidth: 1,
        borderColor: Colors.second,
    },
    textinput: {
        backgroundColor: Colors.third,
        height: 45,
        color: Colors.fourth,
    },
    flagbutton: {
        backgroundColor: Colors.third,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderWidth: 1,
        borderColor: Colors.second,
    },

    viewTextTop: {
        flex: 1
    },
    iconBack: {
        paddingVertical: 35,
        marginLeft: 20
    },
    viewLoginWith: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 55,

    },
    textSignup: {
        color: Colors.second,
        fontWeight: '500',
        marginLeft: 5,
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
        marginHorizontal: 30,

    },
    viewinput: {
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        width: '90%',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: Colors.third,
        borderColor: Colors.second,
        paddingHorizontal: 25,
        color: Colors.second,
        margin: 10,

    },
    textTouchSend: {
        color: Colors.fifth,
        fontSize: 14,
        fontWeight: '700',
    },
    viewTouch: {
        alignItems: 'center',
    },
    touchSend: {
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

