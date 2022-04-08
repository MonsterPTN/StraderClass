
import React from 'react';
import { styles } from './styles'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import AppleIcon from '../../Icons/AppleIcon/AppleIcon';
import GoogleIcon from '../../Icons/GoogleIcon/GoogleIcon';
import FaceBookIcon from '../../Icons/FacebookIcon/FaceBookIcon';
import { scale } from 'react-native-size-matters';


export default function App({ navigation }) {

  return (


    <View style={styles.safeview}>
      <ImageBackground source={{uri:"https://traderclass.vn/public/upload/images/course/thumb/94732711cf31016f5820.jpg"}} style = {{height:'100%',}} imageStyle = {{height:'100%'}}>
      <View style={styles.viewText}>
          <Text style={styles.slogan}>Learn,</Text>
          <Text style={styles.slogan}>learn more,</Text>
          <Text style={styles.slogan}>learn forever</Text>
        </View>

        <View style={styles.viewTouch}>
          <TouchableOpacity style={[styles.touchSI]} onPress={() => navigation.navigate('SiginScreen')}>
            <Text style={[styles.textTouchSI]}>
              Sign in

            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.touchFB]}>
            <View style={styles.viewIcon}>
              <FaceBookIcon style={{ marginRight: 10 }} />
              <Text style={[styles.textTouchFB]}>
              Sign in with Facebook

              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.touchGG,]}>
            <View style={styles.viewIcon}>
              <GoogleIcon style={{ marginRight: 10 }} />
              <Text style={[styles.textTouchGG]}>
              Sign in with Google

              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.touchAP,]}>
            <View style={styles.viewIcon}>
              <AppleIcon style={{ marginRight: 10 }} />
              <Text style={[styles.textTouchAP]}>
                Sign in with Apple
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};


