import { StyleSheet } from "react-native";
import { Fonts } from "../../Until/Fonts";
import { Colors } from "../../Until/Colors";
import { scale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    iconHeader: {
        marginLeft: 15,
        position: 'absolute',

    },
    header: {
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        paddingBottom: 30,
        justifyContent: 'space-between',
    },


    caption: {
        marginBottom: 16,
        marginLeft: 16,
        fontSize: 16,
        color: Colors.fourth

    },


    gradientList: {
        justifyContent: "flex-end",
        width: "100%",
        height: '50%',
        borderRadius: 5,

    },

    imglist2: {
        width: 280,
        height: 290,
        justifyContent: "flex-end",

    },

    ButtonPages: {
        width: '50%',
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#FF8600',
        marginBottom: 15,
        marginTop: 15,
    },
    ButtonMy: {
        width: '50%',
        alignItems: "center",
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: Colors.fourth,
        marginBottom: 15,
        marginTop: 15,
    },



    viewitem2: {
        margin: 5,
    },
    descriptionitems: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        fontSize: 12,
        color: Colors.fourth,
        textAlign: 'justify',
        fontFamily:Fonts.font_400
    },


    titleItems: {
        marginTop: 43,
        marginLeft: 24,
        color: Colors.fourth,
        fontFamily:Fonts.font_500
    },
    avatar: {
        borderRadius: 5,
        flexDirection: "row",
    },
    imageitems: {
        width: 130,
        height: 80,
        marginTop: 15,
        marginLeft: 15,
        borderRadius: 5,


    },
    icon: {
        alignItems: 'center',
        flexDirection: "row",
        padding: 3,
    },
    tilebottom: {
        fontSize: 15,
        color: Colors.sixth,
        marginBottom: 15,
        marginTop: 16,


    },

    price: {
        marginBottom: 20,
        fontSize: 26,
        color: '#FF8600',
        fontWeight: "bold",
    },


    capp: {
        color: Colors.sixth,
        fontSize: 12,

    },
    alllessons: {
        fontWeight: "bold",
        fontSize: 20,
        color: Colors.fourth,

    },
    viewbottom: {
        marginBottom: 60,
        padding: 15,
        backgroundColor: Colors.third,
        borderRadius: 5,
    },

    regist: {
        fontWeight: "bold",
        fontSize: 16,
        color: Colors.second,
        padding: 8,
        textAlign: "center",
    },
    viewitem: {

        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: Colors.third,
        paddingBottom:10
    },

    textinviewicon: {
        color: Colors.fourth,
        fontSize: 14,

    },

    viewicon: {

        backgroundColor: Colors.third,
        borderRadius: 5,
        padding: 15,

    },

    title2: {
        color: Colors.sixth,
        fontSize: 16,
        marginBottom: 6,
        marginTop: 15


    },
    description: {
        color: Colors.fourth,
        fontSize: 12,
                lineHeight:18

    },
    title: {
        color: Colors.sixth,
        marginBottom: 15,
        marginTop: 15,


    },

    Lessons: {
        padding: 10,
        color: Colors.second,
        paddingLeft: 50,
        paddingRight: 50,
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: Colors.second,


    },
    Overview: {
        fontSize: 16,
        paddingLeft: 50,
        paddingRight: 50,
        padding: 10,
        color: Colors.fourth,
        borderBottomWidth: 1,
        borderColor: Colors.fourth

    },

    touch3: {
        flexDirection: "row",
        fontSize: 16,
    },


    text1: {
        marginTop: 30,
        marginBottom: 8,
        fontSize: 38,
        color: Colors.fourth,

        fontFamily:Fonts.font_700
    },

    text2: {
        marginTop: 18,
        fontSize: 20,
        color: Colors.fourth,
        fontFamily:Fonts.font_400
    },

    linearGradient: {
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        height: 164
    },


    scroll: {
        backgroundColor: Colors.primary,
    },
    playss: {
        borderColor: Colors.second,
        backgroundColor: Colors.third,
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 60,
        marginRight: 60,
        marginTop: 15,
        marginBottom: 15,


    },
    watch: {
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'center',
        backgroundColor: Colors.fourth,
        borderRadius: 5,
        marginLeft: 60,
        marginRight: 60,
    },
    touch1: {
        paddingTop: 14,
        paddingBottom: 14,
        textAlign: 'center',
        fontSize: 16,
        color: Colors.fourth,
        fontFamily:Fonts.font_500
    },
    touch2: {

        paddingTop: 14,
        paddingBottom: 14,
        textAlign: 'center',
        fontSize: 16,
        color: Colors.primary,
        fontFamily:Fonts.font_500
    },
    textHeader: {
        marginTop: 10,
        color: Colors.fourth,
        fontSize: 19,
        fontFamily:Fonts.font_700
    },
    textin: {
        position: 'absolute',
        fontSize: 20,
    },
    imgtc: {
        width: "100%",
        height: "100%"
    },
    touch4: {
        borderColor: Colors.second,
        backgroundColor: Colors.third,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 230,
    
    
      },

});