
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
import { GoogleSignin } from '@react-native-google-signin/google-signin';


export default function App({ navigation }) {
  GoogleSignin.configure({
    webClientId: '415484737583-h9r46fnd6sagfhrrq5nje7coeasjtn8t.apps.googleusercontent.com',
  });
  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    console.log(idToken)
    return auth().signInWithCredential(googleCredential);
  }
  return (


    <View style={styles.safeview}>
      <ImageBackground source={require('../../Static/Image/background.png')} style = {{height:'100%',}} imageStyle = {{height:'100%'}}>
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
                Connect with Facebook

              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.touchGG,]} onPress={()=>onGoogleButtonPress()}>
            <View style={styles.viewIcon}>
              <GoogleIcon style={{ marginRight: 10 }} />
              <Text style={[styles.textTouchGG]}>
                Connect with Google

              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.touchAP,]}>
            <View style={styles.viewIcon}>
              <AppleIcon style={{ marginRight: 10 }} />
              <Text style={[styles.textTouchAP]}>
                Connect with Apple ID

              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};


