import { StyleSheet } from "react-native";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";
import { scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    imgBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
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
        marginTop: 15,
    },
    textItemVideo: {
        color: Colors.sixth,
        fontSize: 11,
        fontWeight: 'normal',
        fontFamily: Fonts.font_700,
        margin:5
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
        width: 384,
        marginTop:16,
        backgroundColor:Colors.sixth
    },
    view2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor:Colors.third,
        paddingHorizontal:10,
        paddingBottom:10,
        borderBottomEndRadius:10,
        borderBottomStartRadius:10
    },
    touch: {
        flexDirection: 'row',
        alignItems: 'center',
        flex:1,
        width:'100%'
    },
    view3: {
        flexDirection: 'column',
        marginLeft: 15,
        
    },
    view4: {
        marginTop: 16,
        marginBottom: 30
    },
    view5:{
        flexDirection:'row'
    },
    view6:{
        flex:1,
    }


})