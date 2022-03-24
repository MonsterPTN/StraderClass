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
    nameUser: {
        color: Colors.fourth,
        marginLeft: 25,
        fontWeight: 'bold',
        marginVertical: 3,
        fontSize: 15
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        justifyContent: 'space-between',
        marginBottom: 23
    },
    imgUser: {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderColor: Colors.second,
        borderWidth: 1,
    },
    number: {
        color: Colors.second,
        marginLeft: 25,
        fontWeight: 'bold',
        marginVertical: 3,
        fontSize: 15
    },
    viewTouch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 15
    },
    textTitle: {
        color: Colors.fourth,
        marginLeft: 25,
        fontWeight: 'normal',
        marginVertical: 3,
        fontSize: 15
    },
    touSave: {
        marginHorizontal: 25,
        marginVertical: 45,
        borderRadius: 10,
        borderColor: Colors.second,
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.third
    },
    viewMain: {
        backgroundColor: Colors.primary,
        padding: 15
    },
    view1: {
        backgroundColor: Colors.third
    },
    view2: {
        justifyContent: 'center'
    },
    view3: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    view4: {
        marginTop: 17,
        backgroundColor: Colors.third
    },
    view5: {
        marginTop: 21,
        flexDirection: 'row'
    },
    text1: {
        color: Colors.fourth,
        fontSize: 11
    },
    text2: {
        color: Colors.sixth,
        fontSize: 11
    },
    text3: {
        paddingVertical: 9,
        marginLeft: 10,
        color: Colors.second,
        fontSize: 19
    }
});