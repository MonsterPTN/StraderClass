import React, { useState } from "react";
import { Item, FlatList, createMaterialTopTabNavigator, createStackNavigator, Navigator, NavigationContainer, Text, SafeAreaView, StyleSheet, TextInput, View, Image, ImageBackground, ScrollView, Button, TouchableOpacity, Touchable, TouchableWithoutFeedbackBase } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import RectangleIcon from "../../Icons/RectangleIcon"
import SubtractIcon from "../../Icons/SubtractIcon"
import StarOrangeIcon from "../../Icons/StarIcon"
import PlaySmallOrangeIcon from "../../Icons/PlaySmallOrangeIcon"
import WatchIcon from "../../Icons/WatchIcon"
import BackIcon from "../../Icons/BackIcon"
import { styles } from "./styles";



export default function Lesturers({route}) {
    const [screen, setScreen] = useState("0")
    React.useEffect(() => {
        if (route.params?.itemNameTeacher) {
        }
        if(route.params?.itemPositionName) {
        }
        if(route.params?.itemPhoto) {
        }
      }, [route.params?.itemNameTeacher, route.params?.itemPositionName,route.params?.itemPhoto ]);
    const renderItem2 = ({ item }) => {
        return (
            <View style={styles.viewitem2}>
                <ImageBackground source={{uri:route.params?.itemPhoto}} style={styles.imglist2} imageStyle={{ borderRadius: 5 }}>
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
                    <Image source={require('../../Static/Image/tcit.png')} style={styles.imageitems}></Image>
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
            <Image source={require('../../Static/Image/tcit.png')} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('MainTabScreen')}>
                    <BackIcon/>
                </TouchableOpacity>
                <Text style={styles.textHeader}>Lesturers</Text>
                <View style={{ paddingRight: 15 }}>
                    {/* <TouchableOpacity onPress={()=>navigation.navigate('UserScreen')}>
              <UserIcon style={styles.iconHeader} />
            </TouchableOpacity> */}
                </View>
            </View>
            <ScrollView style={{ backgroundColor: '#171921', padding: 15, flex: 1 }}>

                <View>
                    <View style={{ height: 384 }}>
                        <ImageBackground style={{ width: "100%", height: "100%", justifyContent: 'flex-end' }} source={{uri:route.params?.itemPhoto}} imageStyle={{ borderRadius: 5 }} >
                            <LinearGradient colors={['transparent', '#171921',]} style={styles.linearGradient}
                            >

                                <Text style={styles.text1}>{route.params?.itemNameTeacher}</Text>


                                <RectangleIcon />

                                <Text style={styles.text2}>{route.params?.itemPositionName}</Text>
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



