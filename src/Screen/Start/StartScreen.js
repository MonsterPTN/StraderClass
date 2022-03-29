
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import AppleIcon from '../../Icons/AppleIcon/AppleIcon';
import GoogleIcon from '../../Icons/GoogleIcon/GoogleIcon';
import FaceBookIcon from '../../Icons/FacebookIcon/FaceBookIcon';


export default function App({navigation}) {

  return (

      
    <SafeAreaView style={styles.safeview}>
      <View style={styles.viewText}>
        <Text style={styles.slogan}>Learn,</Text>
        <Text style={styles.slogan}>learn more,</Text>
        <Text style={styles.slogan}>learn forever</Text>
      </View>

      <View style={styles.viewTouch}>
        <TouchableOpacity style={[styles.touch, { backgroundColor: '#FF8600' }]} onPress={()=>navigation.navigate('SiginScreen')}>
          <Text style={[styles.textTouch, { color: '#000000' }]}>
            Sign in

          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.touch, { backgroundColor: '#2F79FE' }]}>
        <View style={styles.viewIcon}>
          <FaceBookIcon style={{marginRight: 10}}/>
          <Text style={[styles.textTouch, { color: '#FFFFFF' }]}>
            Connect with Facebook

          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.touch, { backgroundColor: '#FFFFFF' }]}>
        <View style={styles.viewIcon}>
          <GoogleIcon style={{marginRight: 10}}/>
          <Text style={[styles.textTouch, { color: '#000000' }]}>
            Connect with Google

          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.touch, { backgroundColor: '#808080' }]}>
          <View style={styles.viewIcon}>
            <AppleIcon style={{marginRight: 10}}/>
            <Text style={[styles.textTouch, { color: '#FFFFFF' }]}>
              Connect with Apple ID

            </Text>
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textTouch: {
    fontSize: 14,
    fontWeight: '700',
  },
  slogan: {
    fontSize: 40,
    fontWeight: '700',
    color: '#FFFFFF',

  },
  touch: {
    margin: 7,
    width: '90%',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 30,
  },
  safeview: {
    flex: 1,
    backgroundColor: '#171921'
  },
  viewText: {
    flex: 2,
    justifyContent: 'flex-end',
    marginLeft: 30,
    marginBottom: 90,

  },
  viewTouch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 40,

  },

});

