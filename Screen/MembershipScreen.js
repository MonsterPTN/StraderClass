 import React, { useState } from 'react';
 import {
   StyleSheet,
   Text,
   View,
   TouchableOpacity,
   FlatList,
   ScrollView
 } from 'react-native';
 
 import BackIcon from '../Icon/BackIcon'
 import NonIcon from '../Icon/NonIcon'
 import Vnd from '../Icon/VNDIcon'
 
 const MembershipScreen = ({navigation}) => {
   //khai bao chuyen man 
   const [screen, setScreen] = useState(1)
 
 
   const renderItem = ({ item }) => {
     return (
       <View style={styles.items}>
         <View style={styles.Viewgr}>
           <View>
             <Text style={styles.title}>{item.title}</Text>
           </View>
           <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
             <Text style={styles.price}>{item.price}</Text>
             <Vnd />
           </View>
           <View>
             <Text style={styles.regist}>{item.regist}</Text>
           </View>
         </View>
         <View>
           <TouchableOpacity onPress = {()=> navigation.navigate('PaymentScreen')}
             style={styles.playss}>
             <Text style={styles.touch1}>Regist Now</Text>
           </TouchableOpacity>
         </View>
       </View>
     )
   }
 
 
 
   const renderItem2 = ({ item }) => {
     return (
       <View style={styles.items2}>
         <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
           <View style={styles.Viewgr2}>
             <Text style={styles.titles}>{item.titles}</Text>
             <Text style={styles.time}>{item.time}</Text>
           </View>
           <View style={styles.buttonregist}>
             <TouchableOpacity
               style={styles.playss2}>
               <Text style={styles.touch2}>Renew now</Text>
             </TouchableOpacity>
           </View>
         </View>
       </View>
     )
   }
   return (
     <View style={{ backgroundColor: "#171921", flex: 1 }}>
       <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginVertical: 25, padding: 10 }}>
        <TouchableOpacity onPress={()=>navigation.navigate('UserScreen')}>
        <BackIcon />
        </TouchableOpacity>
         <Text style={styles.hetder}>Membership package</Text>
         <NonIcon />
       </View>
       <View style={styles.button}>
         <View style={{ flexDirection: "row" }}>
           <TouchableOpacity
             //doi mau borderColor
             style={screen == 1 ? styles.ButtonPages : styles.ButtonMy}
             // man hinh 1
             onPress={() => setScreen(1)}
 
           >
             <View style={styles.textbutton}>
               <Text style={{ color: screen === 1 ? '#FF8600' : '#FFFFFF' }}>Packages for me</Text>
             </View>
           </TouchableOpacity>
           <TouchableOpacity
             //doi mau borderColor
             style={screen == 2 ? styles.ButtonPages : styles.ButtonMy}
             //man hinh 2
             onPress={() => setScreen(2)}
           >
             <View style={styles.textbutton}>
               <Text style={{ color: screen === 2 ? '#FF8600' : '#FFFFFF' }}>My package</Text>
             </View>
           </TouchableOpacity>
         </View>
       </View>
       {/* //code man 1 */}
       {
         screen == 1 ?
           <View style={{ flex: 1 }}>
             <FlatList
               numColumns={2}
 
               data={[
                 {
                   id: 1,
                   title: 'Day package  -  1  day ',
                   price: '3.399.000',
                   regist: '+3 month free membership',
                 },
                 {
                   id: 2,
                   title: 'Castle package - 12 month',
                   price: '3.399.000',
                   regist: '+3 month free membership',
                 },
                 {
                   id: 3,
                   title: 'Castle package - 12 month',
                   price: '3.399.000',
                   regist: '+3 month free membership ',
                 },
                 {
                   id: 4,
                   title: 'Castle package - 12 month',
                   price: '3.399.000',
                   regist: '+3 month free membership',
                 },
                 {
                   id: 5,
                   title: 'Castle package - 12 month ',
                   price: '3.399.000',
                   regist: '+3 month free membership',
                 },
                 {
                   id: 6,
                   title: 'Castle package - 12 month',
                   price: '3.399.000',
                   regist: '+3 month free membership asdasdsdfsafasgawge',
                 },
                 {
                   id: 7,
                   title: 'Castle package - 12 month',
                   price: '3.399.000',
                   regist: '+3 month free membership',
                 },
               ]}
 
               renderItem={renderItem}
 
             />
           </View>
           ://code man 2
           <FlatList
             data={[
               {
                 id: 1,
                 titles: 'Day package - 1 day ',
                 time: 'Time: 10 days',
               },
               {
                 id: 2,
                 titles: 'Castle package - 12 month',
                 time: 'Time: 10 days',
               },
               {
                 id: 3,
                 titles: 'Castle package - 12 month',
                 time: 'Time: 10 days ',
               },
             ]}
             renderItem={renderItem2}
           />
       }
 
     </View>
   );
 };
 export default MembershipScreen;
 const styles = StyleSheet.create({
   hetder: {
     color: '#FFFFFF',
     fontFamily: 'poppins',
     fontStyle: 'normal',
     fontWeight: 'bold',
     fontSize: 19,
   },
   container: {
     alignItems: "center",
     padding: 10
   },
   items: {
     backgroundColor: '#272A38',
     padding: 10,
     borderRadius: 5,
     marginLeft: 10,
     marginTop: 10,
     width: '46%',
     justifyContent: 'space-between'
   },
 
   Viewgr: {
     marginTop: 16,
     marginLeft: 10,
     marginRight: 10,
     flexDirection: 'column',
     padding: 0,
   },
   title: {
     color: '#FFFFFF',
     fontSize: 16,
     lineHeight: 20,
     fontWeight: 'bold',
     fontStyle: 'normal',
   },
   price: {
     paddingTop: 2,
     color: '#FF8600',
     fontWeight: 'bold',
     fontSize: 21,
   },
   vnd: {
     color: '#FF8600',
     backgroundColor: 'back',
 
   },
   regist: {
     color: '#FFFFFF',
     paddingTop: 5,
     paddingRight: 5,
     paddingBottom: 25
   },
   playss: {
     borderColor: "#FF8600",
     backgroundColor: "#272A38",
     borderWidth: 1,
     borderRadius: 5,
     justifyContent: 'center',
     alignItems: 'center',
   },
 
   touch1: {
     paddingTop: 14,
     paddingBottom: 14,
     lineHeight: 21,
     textAlign: 'center',
     fontSize: 14,
     color: "#FF8600",
   },
 
 
   textbutton: {
     margin: 10
   },
   button: {
     margin: 10
   },
   ButtonPages: {
     width: '50%',
     alignItems: "center",
     flexDirection: 'column',
     justifyContent: 'center',
     borderBottomWidth: 1,
     borderColor: '#FF8600',
   },
   ButtonMy: {
     width: '50%',
     alignItems: "center",
     flexDirection: 'column',
     justifyContent: 'center',
     borderBottomWidth: 1,
     borderColor: '#FFFFFF'
   },
   Mypackage: {
     margin: 10,
     marginTop: 20,
     backgroundColor: "#272A38",
   },
   FlatListMypackage: {
     backgroundColor: '#272A38',
     padding: 10,
     borderRadius: 5,
     marginLeft: 10,
     marginTop: 10,
     width: '46%',
   },
   items2: {
     backgroundColor: '#272A38',
     padding: 20,
     borderRadius: 5,
     margin: 10,
     justifyContent: 'space-between'
   },
   Viewgr2: {
     flex: 1,
     flexDirection: 'column',
     marginRight: 10,
   },
   titles: {
     color: '#FFFFFF',
     fontSize: 16,
     lineHeight: 20,
     fontWeight: 'bold',
     fontStyle: 'normal',
   },
   time: {
     color: '#FF8600',
     marginTop: 10
   },
   buttonregist: {
 
   },
   playss2: {
     borderColor: "#FF8600",
     backgroundColor: "#272A38",
     borderWidth: 1,
     borderRadius: 5,
     justifyContent: 'center',
     alignItems: 'center',
     marginRight: 10
   },
   touch2: {
     paddingTop: 14,
     paddingBottom: 14,
     paddingLeft: 10,
     paddingRight: 10,
     lineHeight: 21,
     textAlign: 'center',
     fontSize: 14,
     color: "#FF8600",
     
   },
 });
 
 
 