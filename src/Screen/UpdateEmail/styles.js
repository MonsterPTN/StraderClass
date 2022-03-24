import { StyleSheet } from "react-native";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";
import { scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    textHeader: {
        // height: 40,
        textAlign: 'center',
        color: Colors.fourth,
        fontSize: 19,
        fontFamily: Fonts.font_700,
        fontWeight: 'bold',

    },
    iconHeader: {
        paddingTop: 25,
    },
    textInfo: {
        color: Colors.fourth,
        fontSize: 10,
        fontWeight: 'normal',
        fontFamily: Fonts.font_700
    },
    viewTouch2: {
        marginTop: 13
    },
    viewTouch: {
        marginTop: 23
    },
    touchSave: {
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: Colors.second,
        borderWidth: 1,
        justifyContent: 'center',
        paddingVertical: 9
    },
    textEmail: {
        color: Colors.second,
        fontSize: 11,
        fontWeight: 'bold'
    },
    textTouchSave: {
        color: Colors.second,
        fontSize: 18,
        marginLeft: 3
    },
    viewMain: {
        flex: 1,
        backgroundColor: Colors.primary,
        padding: 15
    },
    view1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        justifyContent: 'space-between'
    },
    view2: {
        marginTop: 16,
        marginHorizontal: 11
    }
})