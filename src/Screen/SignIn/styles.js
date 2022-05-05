import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textDA: {
        color: '#FFFFFF',
        fontWeight: '500'
    },
    descripText: {
        textAlign: 'center',
        color: '#FF8600',
        marginBottom: 30,

    },
    welcomeText: {
        marginTop: 30,
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
        color: '#000000',
        fontSize: 14,
        fontWeight: '700',
    },
    viewTouch: {
        alignItems: 'center',
    },
    touchLogin: {
        backgroundColor: '#FF8600',
        width: '90%',
        alignItems: 'center',
        paddingVertical: 17,
        borderRadius: 5,
        marginTop: 15,
    },
    safeview: {
        flex: 1,
        backgroundColor: '#171921',
    },
    viewTop: {
        flex:2,
        backgroundColor: '#171921',
    },
    viewBot: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }

});