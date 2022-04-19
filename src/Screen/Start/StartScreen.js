import React, { useState, useEffect, useContext } from 'react';
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
  ImageBackground,
  Alert
} from 'react-native';

import AppleIcon from '../../Icons/AppleIcon/AppleIcon';
import GoogleIcon from '../../Icons/GoogleIcon/GoogleIcon';
import FaceBookIcon from '../../Icons/FacebookIcon/FaceBookIcon';
import { scale } from 'react-native-size-matters';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { AuthContext } from '../../Redux/AuthContext';
import auth from '@react-native-firebase/auth';
import {
  AccessToken,
  AuthenticationToken,
  LoginManager,
} from 'react-native-fbsdk-next';
export default function App({ navigation }) {
  const { setToken } = useContext(AuthContext)
  GoogleSignin.configure({
    webClientId: '415484737583-h9r46fnd6sagfhrrq5nje7coeasjtn8t.apps.googleusercontent.com',
  });
  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const profile = auth().signInWithCredential(googleCredential);
    profile.then((u) => {
      const user = u.user
      getLogin(user.displayName, user.email, user.photoURL, user.phoneNumber, 1)
     
    })
  }
  async function onFacebookButtonPress() {
    try {
      const result = await LoginManager.logInWithPermissions(
        ['public_profile', 'email'],
        'limited',
        'my_nonce'
      );
      console.log(result);

      if (Platform.OS === 'ios') {
        const result = await AuthenticationToken.getAuthenticationTokenIOS();
        console.log(result?.authenticationToken);
      } else {
        const result = await AccessToken.getCurrentAccessToken();
        console.log(result?.accessToken);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const getLogin = async (name, email, photo, phone, auth_type) => {
    const apiURL = 'https://traderclass.vn/api/login-social';
    fetch(apiURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        photo: photo,
        phone: phone,
        auth_type : auth_type 
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        if (!resJson.status) {
          Alert.alert("message", resJson.msg)
        } else {
          setToken({ loading: false, userToken: resJson.token})
          navigation.navigate('MainTabScreen')
          Alert.alert("message", resJson.msg)
        }

      }).catch((error) => {
        console.log('Error: ', error);
      })
  }
  return (

    <View style={styles.safeview}>
      <ImageBackground source={require('../../Static/Image/background.png')} style={{ height: '100%', }} imageStyle={{ height: '100%' }}>
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
          <TouchableOpacity style={[styles.touchFB]} onPress={() => onFacebookButtonPress()}>
            <View style={styles.viewIcon}>
              <FaceBookIcon style={{ marginRight: 10 }} />
              <Text style={[styles.textTouchFB]}>
                Connect with Facebook

              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.touchGG,]} onPress={() => onGoogleButtonPress()}>
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


