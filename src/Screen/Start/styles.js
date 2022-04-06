import { StyleSheet } from "react-native";
import { Colors } from '../../Until/Colors'

export const styles = StyleSheet.create({
    viewIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textTouchSI: {
        color: Colors.fifth,
        fontSize: 14,
        fontWeight: '700',
    },
    textTouchFB: {
        color: Colors.fourth,
        fontSize: 14,
        fontWeight: '700',
    },

    textTouchGG: {
        color: Colors.fifth,
        fontSize: 14,
        fontWeight: '700',
    },
    textTouchAP: {
        color: Colors.fourth,
        fontSize: 14,
        fontWeight: '700',
    },

    slogan: {
        fontSize: 40,
        fontWeight: '700',
        color: Colors.fourth,

    },
    touchSI: {
        backgroundColor: Colors.second,
        margin: 7,
        width: '90%',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,
    },
    touchFB: {
        margin: 7,
        width: '90%',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: Colors.nineth,
    },
    touchAP: {
        margin: 7,
        width: '90%',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: Colors.tenth,
    },
    touchGG: {
        margin: 7,
        width: '90%',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 30,
        backgroundColor: Colors.fourth,
    },
    safeview: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    viewText: {
        flex: 2,
        justifyContent: 'flex-end',
        marginLeft: 30,
        marginBottom: 90,

    },
    viewTouch: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 40,

    },
});  