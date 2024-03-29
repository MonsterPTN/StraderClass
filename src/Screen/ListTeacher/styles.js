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
        paddingBottom: 33

    },
    buttonAll: {
        borderRadius: 5,
        borderColor: Colors.fourth,
        borderWidth: 1,
        color: Colors.fifth,
        fontWeight: 'bold',
        fontFamily: Fonts.font_700,
        paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5,

    },

    textTitle: {
        color: Colors.second,
        fontSize: 16,
        fontFamily: Fonts.font_700,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 16

    },
    textItem: {
        color:  Colors.second,
        borderRadius: 5,
        borderColor: Colors.second,
        borderWidth: 1,
        margin: 6,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5
    },

    viewItem: {
        flexDirection: 'row',
        marginBottom: 6,
        justifyContent: 'space-between',
        height: 50
    },



    view1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    view2: {
        backgroundColor: Colors.primary,
        paddingTop: 25
    },
    view3: {
        backgroundColor: Colors.primary,
        padding: 15,
        flex:1
    }
});