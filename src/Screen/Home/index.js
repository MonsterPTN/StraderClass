import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView, ImageBackground, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import UserIcon from '../../Icons/UserIcon';
import { Colors } from './Color/Color';
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
import { api_get } from '../../Until/Api'
import { useSelector, useDispatch } from 'react-redux';

const HomeScreen = (props) => {
  const numberItem = 5
  const [dataCourse, setDataCourse] = useState([]);
  const [dataTopCourse, setDataTopCourse] = useState([]);
  const [dataTopTeacher, setDataTopTeacher] = useState([]);
  const [dataTop1, setDataTop1] = useState([]);
  const [isloading, setisLoading] = useState(true);
  const name = useSelector(state=>state.name);
  useEffect(() => {
    getListCourse();
    getListTopCourse();
    getListTopTeacher();
    getListTop1();
    console.log("ten "+name)
    return () => {

    }
  }, [])



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

  renderItemTopTeacher = ({ item, index }) => {
    return (

      <TouchableOpacity onPress={() => console.log(item.id)}>
        <ImageBackground source={{ uri: item.photo }} style={styles.item}>
          {/* <StatusIcon/> */}
          <LinearGradient colors={['transparent', '#171921']}
            style={styles.linearGradient2}>
            <Text style={styles.text3}
              adjustsFontSizeToFit={true}
            >{item.fullname}</Text>
            <RectangleIcon />
            <Text style={styles.text5}>{item.position}</Text>

          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    )
  }
  renderItemWatched = ({ item, index }) => {
    return (
      <TouchableOpacity >
        <ImageBackground source={require('../../Static/Image/videoWatch.png')} style={styles.itemWatched} imageStyle={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
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
  return (
    <View style={{ backgroundColor: '#171921', }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 25, justifyContent: 'space-between' }}>
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
        <View style={{ paddingBottom: 25, height: 257 }}>
          <ImageBackground source={{ uri: dataTop1.photo }} style={{ height: "100%", justifyContent: 'flex-end' }}>
            <LinearGradient
              colors={['transparent', '#171921']}
              style={styles.linearGradient}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                <Text style={styles.text1}>{dataTop1.name}</Text>
                <RectangleIcon style={{ paddingVertical: 10 }} />
                <Text style={styles.text2}>{dataTop1.teacherName}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginRight: 60, marginLeft: 60 }}>
                <TouchableOpacity>
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
