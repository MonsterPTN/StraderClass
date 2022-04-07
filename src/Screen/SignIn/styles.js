import { StyleSheet } from "react-native";
import { Colors } from '../../Until/Colors';

export const styles = StyleSheet.create({
    textDA: {
        color: Colors.fourth,
        fontWeight: '500'
    },
    descripText: {
        textAlign: 'center',
        color: Colors.second,
        marginBottom: 30,

    },
    welcomeText: {
        marginTop: 30,
        textAlign: 'center',
        color: Colors.second,
        fontSize: 33,
        fontWeight: '600',

    },
    textForgot: {
        margin: 10,
        color: Colors.fourth,
        fontWeight: '500',
        textAlign: 'center',
    },
    textSignup: {
        color: Colors.second,
        fontWeight: '500',
        marginLeft: 5,
    },
    viewTouchSignup: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20,

    },
    viewinput: {
        paddingHorizontal:15
    },
    text1:{
        color: Colors.second,
        fontSize:14
    },
    input: {
        borderWidth: 1,
        width: '100%',
        paddingVertical: 10,
        borderRadius: 5 ,
        backgroundColor: Colors.eleventh,
        borderColor: Colors.second,
        paddingHorizontal: 25,
        color: Colors.second,
        marginVertical: 6,
        marginBottom:12

    },
    textTouch: {
        color: Colors.fifth,
        fontSize: 14,
        fontWeight: '700',
    },
    viewTouch: {
        alignItems: 'center',
    },
    touchLogin: {
        backgroundColor: Colors.second,
        width: '90%',
        alignItems: 'center',
        paddingVertical: 17,
        borderRadius: 5,
        marginTop: 15,
    },
    safeview: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    viewTop: {
        flex:2,
        backgroundColor: Colors.primary,
    },
    viewBot: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }

});