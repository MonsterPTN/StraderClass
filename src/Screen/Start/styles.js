import { StyleSheet } from "react-native";
import { Colors } from '../../Until/Colors'

export const styles = StyleSheet.create({
    viewIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textTouchSI: {
        color: Colors.fifth,
        fontSize: 19,

    },
    textTouchFB: {
        color: Colors.fourth,
        fontSize: 19,

    },

    textTouchGG: {
        color: Colors.fifth,
        fontSize: 19,

    },
    textTouchAP: {
        color: Colors.fourth,
        fontSize: 19,
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
        justifyContent:'center',
        borderRadius: 5,
        height:44
    },
    touchFB: {
        margin: 7,
        width: '90%',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5,
        backgroundColor: Colors.nineth,
        height:44
    },
    touchAP: {
        margin: 7,
        width: '90%',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5,
        backgroundColor: Colors.fifth,
        height:44
    },
    touchGG: {
        margin: 7,
        width: '90%',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 5,
        backgroundColor: Colors.fourth,
        height:44
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