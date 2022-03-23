import { StyleSheet } from "react-native";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";

export const styles = StyleSheet.create({
    textHeader: {
      // height: 40,
      textAlign: 'center',
      color: Colors.fourth,
      fontSize: 19,
      fontFamily: Fonts.font_700,
      fontWeight: 'normal',
      lineHeight:28
    },
    iconHeader: {
      paddingTop: 25,
  
    },
    linearGradient: {
      height: 155,
      justifyContent: 'flex-end',
    },
    linearGradient2: {
      height: 86,
      justifyContent: 'flex-end',
      width: 120,
      alignItems: 'center',
    },
    text1: {
      textAlign: 'center',
      color: Colors.fourth,
      fontSize: 14,
      fontFamily: Fonts.font_500,
      paddingBottom: 2,
      fontWeight: 'normal',
      lineHeight:21
    },
    text2: {
      textAlign: 'center',
      color: Colors.fourth,
      fontSize: 16,
      fontFamily: Fonts.font_600,
      fontWeight: 'normal',
      paddingTop: 2,
      paddingBottom: 14
  
    },
    text3: {
      textAlign: 'center',
      color: Colors.fourth,
      fontSize: 14,
      fontFamily: Fonts.font_700,
      fontWeight: 'bold',
      paddingBottom: 4,
      
      
    },
    text4: {
      color: Colors.fourth,
      fontSize: 10,
      fontFamily: Fonts.font_700,
      fontWeight: 'normal',
      paddingBottom: 4,
      marginLeft: 6,
      marginTop: 6,
      textAlign: 'left',
      flex: 2
    },
    text5: {
      textAlign: 'center',
      color: Colors.fourth,
      fontSize: 8,
      fontFamily: Fonts.font_700,
      fontWeight: 'normal',
      paddingTop: 4
    },
    text6: {
      color: Colors.fourth,
      fontSize: 8,
      fontFamily: Fonts.font_700,
      fontWeight: 'normal',
      paddingBottom: 4,
      marginLeft: 6,
      marginTop: 6,
      flex: 1
    },
    itemPhoto: {
      width: 200,
      height: 200,
    },
    containerFlat: {
      flex: 1,
      marginLeft: 15,
      marginTop: 16
    },
    item: {
      justifyContent: 'center',
      margin: 6,
      height: 180,
      width: 120,
      justifyContent: 'flex-end',
      alignItems: 'center',
  
    },
    itemWatched: {
      justifyContent: 'center',
      marginTop: 6,
      marginLeft: 6,
      marginRight: 6,
      height: 180,
      width: 120,
      justifyContent: 'flex-end',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15
  
    },
    image: {
      width: 100,
      height: 100
    },
    textTitle: {
      color: Colors.second,
      fontSize: 16,
      fontFamily: Fonts.font_700,
      fontWeight: 'normal',
      marginLeft: 15,
      marginBottom: 16
    },
    textTitle2: {
      color: Colors.second,
      fontSize: 16,
      fontFamily: Fonts.font_700,
      fontWeight: 'normal',
      marginLeft: 15,
      marginTop: 16,
      marginBottom: 16
    }
  })