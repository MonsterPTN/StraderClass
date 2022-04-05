import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import UserIcon from '../../Icons/UserIcon';
import NonIcon from '../../Icons/NonIcon';
import RectangleIcon from '../../Icons/RectangleIcon'
import LinearGradient from 'react-native-linear-gradient';
import PlayIcon from '../../Icons/PlayIcon'
import ShareIcon from '../../Icons/ShareIcon'
import WishIcon from '../../Icons/WishIcon'
import PlayVideoIcon from '../../Icons/PlayVideoIcon'
import { styles } from './styles';
import ListTopCourse from '../../Components/ListTopCourse';
import ListCourse from '../../Components/ListTopCourse';
import ListTopTeacher from '../../Components/ListTeacher'
import { Colors } from '../../Until/Colors';
import Clipboard from '@react-native-community/clipboard';
const HomeScreen = (props) => {
  const [dataCourse, setDataCourse] = useState([]);
  const [dataTopCourse, setDataTopCourse] = useState([]);
  const [dataTopTeacher, setDataTopTeacher] = useState([]);
  const [dataTop1, setDataTop1] = useState([]);
  const [isloading, setisLoading] = useState(true);
  useEffect(() => {
    getListCourse();
    getListTopCourse();
    getListTopTeacher();
    getListTop1();
    return () => {
    }
  }, [])
  const writeToClipboard = async () => {
    //To copy the text to clipboard
    Clipboard.setString(`https://www.youtube.com/watch?v=${dataTop1.video_id}`);
    alert('Copied to Clipboard!');
  };
  getListCourse = () => {
    const apiURL = 'https://traderclass.vn/api/course';
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setDataCourse(resJson.data);
      }).catch((error) => {
        console.log('Request API ERROR', error);
      }).finally(() => setisLoading(false))
  }
  getListTopTeacher = () => {
    const apiURL = 'https://traderclass.vn/api/top-teacher';
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setDataTopTeacher(resJson.data);
      }).catch((error) => {
        console.log('Request API ERROR', error);
      }).finally(() => setisLoading(false))
  }
  getListTopCourse = () => {
    const apiURL = 'https://traderclass.vn/api/top-course';
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setDataTopCourse(resJson.data);
      }).catch((error) => {
        console.log('Request API ERROR', error);
      }).finally(() => setisLoading(false))
  }
  getListTop1 = () => {
    const apiURL = 'https://traderclass.vn/api/course/1';
    fetch(apiURL)
      .then((res) => res.json())
      .then((resJson) => {
        setDataTop1(resJson.data);
      }).catch((error) => {
        console.log('Request API ERROR', error);
      }).finally(() => setisLoading(false))
  }
  renderItemWatched = ({ item, index }) => {
    return (
      <TouchableOpacity >
        <ImageBackground source={require('../../Static/Image/image.png')} style={styles.itemWatched} imageStyle={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
          <PlayVideoIcon />
        </ImageBackground>
        <View style={{
          backgroundColor: '#000000',
          marginBottom: 6,
          marginLeft: 6,
          marginRight: 6,
          width: 120,
          height: 60,
          borderBottomLeftRadius: 5, borderBottomRightRadius: 5
        }}>
          <Text style={styles.text4}>{item.name}</Text>
          <Text style={styles.text6}>{item.key}</Text>
        </View>
      </TouchableOpacity>

    )
  }

  
  useEffect(() => {
    getListCourse();
    getListTopCourse();
    getListTopTeacher();
    getListTop1();
    return () => {

    }
  }, [])
  
  return (
    <View style={{ backgroundColor: Colors.primary }}>
      <View style={styles.view3}>
        <View style={{ paddingRight: 15 }}><NonIcon style={styles.iconHeader} /></View>
        <Text style={styles.textHeader}>Trader Class</Text>
        <View style={{ paddingRight: 15 }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('User')}>
            <UserIcon style={styles.iconHeader} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ marginBottom: 80 }} >
        <StatusBar style="auto" />
        <View style={styles.view4}>
          <ImageBackground source={dataTop1.photo ? { uri: dataTop1.photo } : require('../../Static/Image/image.png')} style={styles.image}>
            <LinearGradient
              colors={['transparent', Colors.primary]}
              style={styles.linearGradient}>
              <View style={styles.view1}>
                <Text style={styles.text1}>{dataTop1.name}</Text>
                <RectangleIcon style={{ paddingVertical: 10 }} />
                <Text style={styles.text2}>{dataTop1.teacherName}</Text>
              </View>
              <View style={styles.view2}>
                <TouchableOpacity onPress={writeToClipboard}>
                  <ShareIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('TestScreen', {
                itemUrlVideo: dataTop1.video_id,
                itemNameVideo: dataTop1.name,
                itemPhotoTeacher: dataTop1.teacherPhoto,
                itemNameTeacher: dataTop1.teacherName
            })}>
                  <PlayIcon />
                </TouchableOpacity>
                <TouchableOpacity>
                  <WishIcon />
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </ImageBackground>

        </View>
        <Text style={styles.textTitle}>Top course</Text>
        <ListTopCourse
          data={dataTopCourse}
          navigation={props.navigation}
        />

        <Text style={styles.textTitle2}>Top teacher</Text>
        <ListTopTeacher
          data={dataTopTeacher}
          navigation={props.navigation}
        />
        <Text style={styles.textTitle2}>Watched</Text>
        <FlatList
          data={[
            { key: 'Devin', name: 'Bai hoc ve moi truong thich hop cho doanh' },
            { key: 'Dan', name: 'Thanh Nhan3' },
            { key: 'Dominic', name: 'Thanh Nhan3' },
            { key: 'Jackson', name: 'Thanh Nhan3' },
            { key: 'James', name: 'Thanh Nhan3' },
            { key: 'Joel', name: 'Thanh Nhan3' },
            { key: 'John', name: 'Thanh Nhan3' },
            { key: 'Jillian', name: 'Thanh Nhan3' },
            { key: 'Jimmy', name: 'Thanh Nhan3' },
            { key: 'Julie', name: 'Thanh Nhan3  ' },
          ]}
          renderItem={renderItemWatched}
          horizontal
        />
        <Text style={styles.textTitle}>Bit coin</Text>
        <ListCourse
          data={dataCourse}
          navigation={props.navigation}
        />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
