import { StyleSheet } from "react-native";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";
import { scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    view1: {
        height: 210,
        marginVertical:8,
        backgroundColor:Colors.sixth,
        borderRadius:10,
        padding:16,
        flexDirection:'column'
    },
    view2:{
        flexDirection:'row',
    },
    image:{
        height:70,
        width:120
    },
    text1:{
        color:Colors.fourth,
        fontFamily:Fonts.font_600,
        fontSize:14
    },
    text2:{
        color:Colors.third,
        fontFamily:Fonts.font_600,
        fontSize:14
    },
    text3:{
        marginTop:16,
        color:Colors.third
    },
    view3:{
        marginLeft:16,
        flex:1,
        justifyContent:'flex-start'
        
    }


})