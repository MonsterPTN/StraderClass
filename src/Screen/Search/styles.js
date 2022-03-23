import { StyleSheet } from "react-native";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";
import { scale } from 'react-native-size-matters';

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
        marginLeft: 15,
        marginTop: 25,
        marginBottom: 16
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        justifyContent: 'center',
        paddingBottom: 20
    },

    viewSearch: {
        backgroundColor: Colors.sixth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15
    },


    viewMain: {
        backgroundColor: Colors.primary,
        paddingRight: 15,
        paddingLeft: 15,
        flex: 1
    },
    view1: {
        flexDirection: 'row',
        alignItems: 'center'
        ,
    }, textInput: {
        backgroundColor: Colors.sixth,
        flex: 1
    }
});