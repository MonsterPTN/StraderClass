import { StyleSheet } from "react-native";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";

export const styles = StyleSheet.create({
    textHeader: {
        textAlign: 'center',
        color: Colors.fourth,
        fontSize: 19,
        fontFamily: Fonts.font_700,
        fontWeight: 'bold',


    },
    textTitle: {
        color: Colors.second,
        fontSize: 16,
        fontFamily: Fonts.font_700,
        fontWeight: 'bold',
        marginTop: 25,
        marginBottom: 16
    },
    text3: {
        color: Colors.fourth,
        fontSize: 14,
        fontFamily: Fonts.font_700,
        fontWeight: 'normal',
        paddingBottom: 4
    },
    text5: {
        color: Colors.fourth,
        fontSize: 12,
        fontFamily: Fonts.font_700,
        fontWeight: 'bold',
        paddingTop: 4
    },
    viewMain: {
        backgroundColor: '#171921',
        paddingRight: 15,
        paddingLeft: 15,
        flex: 1
    },
    view1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        justifyContent: 'center',
        paddingBottom: 80
    }
});