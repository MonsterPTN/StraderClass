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
        fontFamily: 'Poppins',
        fontWeight: 'bold',

    },
    iconHeader: {
        paddingTop: 25,
    },
    textInfo: {
        color: Colors.fourth,
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'Poppins',

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
        justifyContent: 'flex-start',
        paddingVertical: 9
    },
    textEmail: {
        color: Colors.second,
        fontSize: 11,
        fontWeight: 'bold'
    },
    textTouchLanguage: {
        color: Colors.second,
        fontSize: 18,
        marginLeft: 15,
    },
    title: {
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginVertical: "1em",
        textAlign: "center"
    },
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
        justifyContent: 'space-between'


    },
    radioButton: {
        height: 20,
        width: 20,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5
    },
    radioButtonIcon: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: "#98CFB6",

    },
    radioButtonText: {
        fontSize: 16,
        marginLeft: 16,
        color: Colors.fourth,
        justifyContent: 'flex-end'
    },
    text: {
        lineHeight: 30,
        fontSize: 20,
        marginVertical: 5
    },
    textTou: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 16
    },
    touRe: {
        backgroundColor: Colors.second,
        alignItems: 'center',
        marginTop: 40,
        borderRadius: 5
    },
    tou1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        backgroundColor: Colors.third,
        borderRadius: 5,
        marginTop: 3,
        alignItems: 'center'
    },
    text1: {
        fontWeight: 'normal',
        color: Colors.second,
        fontSize: 10,
        marginLeft: 5
    },
    text2: {
        color: Colors.second,
        fontSize: 12,
        fontWeight: 'bold'
    },
    text3: {
        color: Colors.fourth,
        fontSize: 12,
        fontWeight: 'normal',
        marginBottom: 12
    },
    text4: {
        color: Colors.second,
        fontSize: 9
    },
    text5: {
        color: Colors.fourth,
        fontSize: 12
    },
    view1: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    view2: {
        backgroundColor: Colors.third,
        padding: 5,
        borderRadius: 5
    },
    view3: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 8
    },
    view4: {
        backgroundColor: Colors.third,
        height: 90,
        marginTop: 7,
        flexDirection: 'row',
        borderRadius: 5
    },
    view5: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        justifyContent: 'space-between',
        marginBottom: 24
    },
    viewMain: {
        flex: 1,
        backgroundColor: Colors.primary,
        padding: 15,
    },
    text6: {
        marginLeft: 5,
        marginTop: 14,
        color: Colors.fourth,
        fontSize: 12,
        fontWeight: 'normal'
    },
    text7: {
        marginLeft: 5,
        marginTop: 9,
        color: Colors.sixth,
        fontSize: 9,
        fontWeight: 'normal'
    },
    text8: {
        fontSize: 21,
        fontWeight: 'bold',
        color: Colors.second,
        marginRight: 5
    },
    text9: {
        color: Colors.fourth,
        fontSize: 12,
        fontWeight: 'normal'
    }
})