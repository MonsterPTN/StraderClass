import { StyleSheet } from "react-native";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";
import { scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    imgBackground: {
        height: "100%",
        justifyContent: 'flex-end'
    },
    imageAvt: {
        height: scale(50),
        width: scale(50),
        resizeMode: 'cover',
        borderRadius: 40,
        marginTop: 16
    },
    textItemName: {
        color: Colors.fourth,
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: Fonts.font_700,
        lineHeight: 24,
        marginTop: 15


    },
    textItemVideo: {
        color: Colors.sixth,
        fontSize: 11,
        fontWeight: 'normal',
        fontFamily: Fonts.font_700,
    },
    buttonRegistNow: {
        borderRadius: 5,
        borderColor: Colors.second,
        borderWidth: 1,
        color: Colors.second,
        fontWeight: 'normal', padding: 9,
        fontFamily: Fonts.font_700,
        marginTop: 15

    },
    textTille: {
        color: Colors.fourth,
        fontSize: 18,
        fontWeight: 'normal',
        fontFamily: Fonts.font_600,
    },
    textDetail: {
        color: Colors.sixth,
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: 'Poppins',
    },
    view1: {
        height: 180,    
    },
    view2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    touch: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    view3: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 15
    },
    view4: {
        marginTop: 16,
        marginBottom: 30
    }


})