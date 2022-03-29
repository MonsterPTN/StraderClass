import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';

import BackIcon from '../../Icons/BackIcon'
import NonIcon from '../../Icons/NonIcon'
import Vnd from '../../Icons/VNDIcon'
import { styles } from './styles';

const MembershipScreen = (props) => {
  //khai bao chuyen man 
  const [screen, setScreen] = useState(1)


  const renderItem = ({ item }) => {
    return (
      <View style={styles.items}>
        <View style={styles.Viewgr}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems:'center' }}>
            <Text style={styles.price}>{item.price}</Text>
            <Vnd/>
          </View>
          <View>
            <Text style={styles.regist}>{item.regist}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress = {()=> props.navigation.navigate('Payment')}
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
