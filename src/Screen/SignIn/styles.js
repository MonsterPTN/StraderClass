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
        margin: 6,

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
        borderRadius: 30,
        marginTop: 35,
    },
    safeview: {
        flex: 1,
        backgroundColor: '#171921',
    },
    viewTop: {
        flex: 2,
        backgroundColor: '#171921',
    },
    viewBot: {
        flex: 3,
        backgroundColor: '#000000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    }

});