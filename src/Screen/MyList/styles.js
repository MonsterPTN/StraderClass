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
    },
    viewMain1:{
        flexDirection: 'row',
        marginBottom: 6,
        backgroundColor: '#000000',
        justifyContent: 'center',
        padding: 5
    },
    view11:{
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        margin: 20,
        backgroundColor: Colors.third,
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    touchModal: {
        borderRadius: 5,
        borderColor: Colors.second,
        borderWidth: 1,
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        width: 120,
        marginHorizontal:6
    },
});