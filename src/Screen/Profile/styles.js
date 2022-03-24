import { StyleSheet } from "react-native";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";
import { scale } from "react-native-size-matters";

export const styles = StyleSheet.create({
    textHeader: {
        textAlign: 'center',
        color: Colors.fourth,
        fontSize: 19,
        fontFamily: Fonts.font_700,
        fontWeight: 'bold',
    },
    iconHeader: {
        paddingTop: 25,
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
    textStyle: {
        color: Colors.fourth,
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontFamily:Fonts.font_700
    },
    textTouch: {
        color: Colors.second, fontSize: 14
    },
    touchModal: {
        borderRadius: 5,
        borderColor: Colors.second,
        borderWidth: 1,
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        width: 220
    },
    image: {
        width: scale(120),
        height: scale(120),
        borderRadius: 70
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 25,
        justifyContent: 'space-between'
    },
    viewMain: {
        flex: 1,
        backgroundColor: Colors.primary,
        padding: 15
    },
    view1: {
        alignItems: 'center',
        marginTop: 17
    },
    view2: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    view3: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    view4: {
        flex: 1,
        paddingRight: 5
    },
touSave:{
     flexDirection: 'row', 
     borderRadius: 5,
      borderColor: Colors.second,
       borderWidth: 1,
        justifyContent: 'center',
         paddingVertical: 9,
         backgroundColor:Colors.third 
        },
        textSave:{
             color: Colors.second,
              fontSize: 18, 
              marginLeft: 3 
            },



});
