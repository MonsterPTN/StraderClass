import { StyleSheet } from "react-native";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";
import { scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    textHeader: {
        textAlign: 'center',
        color: Colors.fourth,
        fontSize: 19,
        fontFamily: Fonts.font_700,
        fontWeight: 'normal',
        lineHeight: 28

    },
    linearGradient: {
        height: 86,
        justifyContent: 'flex-end',
        width: 120,
        alignItems: 'center',
    },
    view1: {
        backgroundColor: '#171921',
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1
    },
    view2: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        justifyContent: 'center',
        paddingBottom: 28
    }




});