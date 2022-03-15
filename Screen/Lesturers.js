import React, { useState } from "react";
import { Item, FlatList, createMaterialTopTabNavigator, createStackNavigator, Navigator, NavigationContainer, Text, SafeAreaView, StyleSheet, TextInput, View, Image, ImageBackground, ScrollView, Button, TouchableOpacity, Touchable, TouchableWithoutFeedbackBase } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import RectangleIcon from "../Icon/RectangleIcon"
import SubtractIcon from "../Icon/SubtractIcon"
import StarOrangeIcon from "../Icon/StarOrangeIcon"
import PlaySmallOrangeIcon from "../Icon/PlaySmallOrangeIcon"
import WatchIcon from "../Icon/WatchIcon"
import BackIcon from "../Icon/BackIcon"



export default function Lesturers({ navigation }) {
    const [screen, setScreen] = useState("0")
    const renderItem2 = ({ item }) => {
        return (
            <View style={styles.viewitem2}>
                <ImageBackground source={require('../Image/tcit.png')} style={styles.imglist2} imageStyle={{ borderRadius: 5 }}>
                    <LinearGradient colors={['transparent', '#171921',]} style={styles.gradientList}>
                        <Text style={styles.caption}>{item.caption}</Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            name: 'First Item',

        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            name: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            name: 'Third Item',
        },
    ];

    const data = [
        { titleItems: '1. LESSION START', description: 'Programming phone applications at the company.- Support consulting sales of computer components, laptops, office gear.- Prepare weekly sales report and statistics.- Design logos for customers.- Programming store management applications on phones using React Native language.' },
        { titleItems: '2. LESSION START', description: 'Programming phone applications at the company.- Support consulting sales of computer components, laptops, office gear.- Prepare weekly sales report and statistics.- Design logos for customers.- Programming store management applications on phones using React Native language.' },
        { titleItems: '4. LESSION START', description: 'Programming phone applications at the company.- Support consulting sales of computer components, laptops, office gear.- Prepare weekly sales report and statistics.- Design logos for customers.- Programming store management applications on phones using React Native language.' },
        { titleItems: '5. LESSION START', description: 'Programming phone applications at the company.- Support consulting sales of computer components, laptops, office gear.- Prepare weekly sales report and statistics.- Design logos for customers.- Programming store management applications on phones using React Native language.' },
        { titleItems: '6. LESSION START', description: 'Programming phone applications at the company.- Support consulting sales of computer components, laptops, office gear.- Prepare weekly sales report and statistics.- Design logos for customers.- Programming store management applications on phones using React Native language.' },
    ]

    const renderItem = (item) => {
        return (
            <View style={styles.viewitem}>
                <View style={styles.avatar}>
                    <Image source={require('../Image/tcit.png')} style={styles.imageitems}></Image>
                    <Text style={styles.titleItems}>{item.titleItems}</Text>
                </View>

                {/* <StatusIcon/> */}

                <View >
                    <Text style={styles.descriptionitems}>{item.description}</Text>

                </View>
            </View>
        )
    }

    const Item = ({ title }) => (
        <View style={styles.item}>
            <Image source={require('../Image/tcit.png')} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('MainTabScreen')}>
                    <BackIcon/>
                </TouchableOpacity>
                <Text style={styles.textHeader}>Lestures</Text>
                <View style={{ paddingRight: 15 }}>
                    {/* <TouchableOpacity onPress={()=>navigation.navigate('UserScreen')}>
              <UserIcon style={styles.iconHeader} />
            </TouchableOpacity> */}
                </View>
            </View>
            <ScrollView style={{ backgroundColor: '#171921', padding: 15, flex: 1 }}>

                <View>
                    <View style={{ height: 384 }}>
                        <ImageBackground style={{ width: "100%", height: "100%", justifyContent: 'flex-end' }} source={require('../Image/tcit.png')} imageStyle={{ borderRadius: 5 }} >
                            <LinearGradient colors={['transparent', '#171921',]} style={styles.linearGradient}
                            >

                                <Text style={styles.text1}>Tan Sang</Text>


                                <RectangleIcon />

                                <Text style={styles.text2}>Techer IT</Text>
                            </LinearGradient>
                        </ImageBackground>

                    </View>
                    <TouchableOpacity
                        style={styles.playss}
                    >
                        <Text style={styles.touch1}> PLAY LESSION 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.watch}
                    >
                        <WatchIcon />
                        <Text style={styles.touch2}> WATCH TRAILER</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.touch3}>

                    <TouchableOpacity
                        onPress={() => setScreen("0")}
                        style={screen == "0" ? styles.ButtonPages : styles.ButtonMy}>
                        <Text style={{ color: screen == 0 ? '#FF8600' : 'white',        fontFamily:'PoppinsVN-500' }}>OVERVIEW</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setScreen("1")}
                        style={screen == "1" ? styles.ButtonPages : styles.ButtonMy}>
                        <Text style={{ color: screen == 1 ? '#FF8600' : 'white',        fontFamily:'PoppinsVN-500' }}>LESSONS</Text>
                    </TouchableOpacity>

                </View>
                {
                    screen == 0 ?
                        <>
                            <View>
                                <Text style={styles.title}>
                                    Sale Management Application:
                                </Text>
                                <Text style={styles.description}>
                                    Programming phone applications at the company.- Support consulting sales of computer components, laptops, office gear.- Prepare weekly sales report and statistics.- Design logos for customers.- Programming store management applications on phones using React Native language.
                                </Text>
                            </View>
                            <View >
                                <Text style={styles.title2}>
                                    What you'll get</Text>

                            </View>

                            <View style={styles.viewicon}>
                                <View style={styles.icon}>
                                    <SubtractIcon />
                                    <Text style={styles.textinviewicon}>  15 video lessons</Text>
                                </View>

                                <View style={styles.icon}>
                                    <StarOrangeIcon />
                                    <Text style={styles.textinviewicon}>  Exclusive learning material</Text>
                                </View>
                                <View style={styles.icon}>
                                    <PlaySmallOrangeIcon />
                                    <Text style={styles.textinviewicon}>  100% guaranteed</Text>
                                </View>
                            </View>

                            <View>
                                <Text style={styles.tilebottom}>What you'll learn</Text>
                            </View>
                            <FlatList
                                data={[

                                    { caption: 'How to be good at programming' },
                                    { caption: 'How to be good at programming' },
                                    { caption: 'How to be good at programming' },
                                    { caption: 'How to be good at programming' },
                                ]}
                                renderItem={renderItem2}
                                horizontal
                            />

                            <View>
                                <Text style={styles.tilebottom}>
                                    How to enroll
                                </Text>
                                <View style={styles.viewbottom}>
                                    <Text style={styles.alllessons}>
                                        All lessons
                                    </Text>
                                    <Text style={styles.capp}>Enjoy the course, can watch it over and over again for only</Text>
                                    <Text style={styles.price}>499.000 Đ</Text>

                                    <TouchableOpacity
                                        style={styles.touch4}
                                        onPress = {()=> navigation.navigate('PaymentScreen')}
                                    >
                                        <Text style={styles.regist}>Regist now</Text>
                                    </TouchableOpacity>


                                </View>


                            </View>
                        </>
                        :
                        <>
                            {
                                data.map((item, index) => (
                                    <View key={index}>
                                        {
                                            renderItem(item)
                                        }
                                    </View>
                                ))
                            }
                        </>
                }



            </ScrollView>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    iconHeader: {
        marginLeft: 15,
        position: 'absolute',

    },
    header: {
        backgroundColor: '#171921',
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
        fontWeight: "700",
        color: '#FFFFFF'

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
        borderColor: '#FFFFFF',
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
        color: '#FFFFFF',
        textAlign: 'justify',
        fontFamily:'PoppinsVN-400'
    },


    titleItems: {
        marginTop: 43,
        marginLeft: 24,
        color: '#FFFFFF',
        fontFamily:'PoppinsVN-500'
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
        color: '#8E95A2',
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
        color: '#8E95A2',
        fontSize: 12,

    },
    alllessons: {
        fontWeight: "bold",
        fontSize: 20,
        color: '#FFFFFF',

    },
    viewbottom: {
        marginBottom: 60,
        padding: 15,
        backgroundColor: '#262932',
        borderRadius: 5,
    },

    regist: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#FF8600",
        padding: 8,
        textAlign: "center",
    },
    viewitem: {

        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: '#262932',
        paddingBottom:10
    },

    textinviewicon: {
        color: '#FFFFFF',
        fontSize: 14,

    },

    viewicon: {

        backgroundColor: '#272A38',
        borderRadius: 5,
        padding: 15,

    },

    title2: {
        color: '#8E95A2',
        fontSize: 16,
        marginBottom: 6,
        marginTop: 15


    },
    description: {
        color: '#FFFFFF',
        fontSize: 12,
                lineHeight:18

    },
    title: {
        color: '#8E95A2',
        marginBottom: 15,
        marginTop: 15,


    },

    Lessons: {
        padding: 10,
        color: '#FF8600',
        paddingLeft: 50,
        paddingRight: 50,
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: '#FF8600'


    },
    Overview: {
        fontSize: 16,
        paddingLeft: 50,
        paddingRight: 50,
        padding: 10,
        color: 'white',
        borderBottomWidth: 1,
        borderColor: 'white'

    },

    touch3: {
        flexDirection: "row",
        fontSize: 16,
    },


    text1: {
        marginTop: 30,
        marginBottom: 8,
        fontSize: 38,
        color: 'white',

        fontFamily:'PoppinsVN-700'
    },

    text2: {
        marginTop: 18,
        fontSize: 20,
        color: 'white',
        fontFamily:'PoppinsVN-400'
    },

    linearGradient: {
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        height: 164
    },


    scroll: {
        backgroundColor: '#171921',
    },
    playss: {
        borderColor: "#FF8600",
        backgroundColor: "#272A38",
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
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        marginLeft: 60,
        marginRight: 60,
    },
    touch1: {
        paddingTop: 14,
        paddingBottom: 14,
        textAlign: 'center',
        fontSize: 16,
        color: "#FFFFFF",
        fontFamily:'PoppinsVN-500'
    },
    touch2: {

        paddingTop: 14,
        paddingBottom: 14,
        textAlign: 'center',
        fontSize: 16,
        color: "#171921",
        fontFamily:'PoppinsVN-500'
    },
    textHeader: {
        marginTop: 10,
        color: 'white',
        fontSize: 19,
        fontFamily:'PoppinsVN-700'
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
        borderColor: "#FF8600",
        backgroundColor: "#272A38",
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 230,
    
    
      },

});