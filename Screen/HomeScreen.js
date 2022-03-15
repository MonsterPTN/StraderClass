import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView, ImageBackground, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import UserIcon from '../Icon/UserIcon';
import { Colors } from './Color/Color';
import NonIcon from '../Icon/NonIcon';
import RectangleIcon from '../Icon/RectangleIcon'
import LinearGradient from 'react-native-linear-gradient';
import PlayIcon from '../Icon/PlayIcon'
import ShareIcon from '../Icon/ShareIcon'
import WishIcon from '../Icon/WishIcon'
import PlayVideoIcon from '../Icon/PlayVideoIcon'
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const HomeScreen = ({ navigation }) => {
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
        console.log(resJson)
        setDataTop1(resJson.data);
      }).catch((error) => {
        console.log('Request API ERROR', error);
      }).finally(() => setisLoading(false))
  }

  renderItem = ({ item, index }) => {
    return (

      <TouchableOpacity onPress={() => console.log(item.name)}>
        <ImageBackground source={{uri:item.photo}} style={styles.item}>
          {/* <StatusIcon/> */}
          <LinearGradient colors={['transparent', '#171921']}
            style={styles.linearGradient2}>
            <Text style={styles.text3}
                        numberOfLines={2}
            >{item.name}</Text>
            <RectangleIcon />
            <Text style={styles.text5}>{item.score}</Text>

          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    )
  }
  renderItemTopCourse = ({ item, index }) => {
    return (

      <TouchableOpacity onPress={() => console.log(item.fullname)}>
        <ImageBackground source={{uri:item.photo}} style={styles.item}>
          {/* <StatusIcon/> */}
          <LinearGradient colors={['transparent', '#171921']}
            style={styles.linearGradient2}>
            <Text style={styles.text3}
            numberOfLines={2}
            >{item.name}</Text>
            <RectangleIcon />
            <Text style={styles.text5}>{item.fullname}</Text>

          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    )
  }
  renderItemTopTeacher = ({ item, index }) => {
    return (

      <TouchableOpacity onPress={() => console.log(item.fullname)}>
        <ImageBackground source={{uri:item.photo}} style={styles.item}>
          {/* <StatusIcon/> */}
          <LinearGradient colors={['transparent', '#171921']}
            style={styles.linearGradient2}>
            <Text style={styles.text3}
            adjustsFontSizeToFit = {true}
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
        <ImageBackground source={require('../Image/videoWatch.png')} style={styles.itemWatched} imageStyle={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}>
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
        <Text style={styles.textHeader}>Trader Class </Text>
        <View style={{ paddingRight: 15 }}>
          <TouchableOpacity onPress={() => navigation.navigate('UserScreen')}>
            <UserIcon style={styles.iconHeader} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ marginBottom: 80 }} >
        <StatusBar style="auto" />
        <View style={{ paddingBottom: 25, height: 257 }}>
          <ImageBackground source={{uri: dataTop1.photo}} style = {{height:"100%", justifyContent:'flex-end'}}>
            <LinearGradient
              colors={['transparent', '#171921']}
              style={styles.linearGradient}>
              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                <Text style={styles.text1}>{dataTop1.name}</Text>
                <RectangleIcon style={{ paddingVertical: 10 }} />
                <Text style={styles.text2}>{dataTop1.teacher_id}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginRight: 60, marginLeft: 60 }}>
                <TouchableOpacity>
                  <ShareIcon />
                </TouchableOpacity>
                <TouchableOpacity>
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

        <FlatList
          data={dataTopCourse}
          renderItem={renderItemTopCourse}
          horizontal
        />

        <Text style={styles.textTitle2}>Top teacher</Text>
        <FlatList
          data={dataTopTeacher}
          renderItem={renderItemTopTeacher}
          horizontal
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

        <FlatList
          data={dataCourse}
          renderItem={renderItem}
          horizontal
        />

      </ScrollView>
    </View>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  textHeader: {
    // height: 40,
    textAlign: 'center',
    color: 'white',
    fontSize: 19,
    fontFamily: 'PoppinsVN-700',
    fontWeight: 'normal',
    lineHeight:28
  },
  iconHeader: {
    paddingTop: 25,

  },
  linearGradient: {
    height: 155,
    justifyContent: 'flex-end',
  },
  linearGradient2: {
    height: 86,
    justifyContent: 'flex-end',
    width: 120,
    alignItems: 'center',
  },
  text1: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontFamily: 'PoppinsVN-500',
    paddingBottom: 2,
    fontWeight: 'normal',
    lineHeight:21
  },
  text2: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'PoppinsVN-600',
    fontWeight: 'normal',
    paddingTop: 2,
    paddingBottom: 14

  },
  text3: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    paddingBottom: 4,
    
    
  },
  text4: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    paddingBottom: 4,
    marginLeft: 6,
    marginTop: 6,
    textAlign: 'left',
    flex: 2
  },
  text5: {
    textAlign: 'center',
    color: 'white',
    fontSize: 8,
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    paddingTop: 4
  },
  text6: {
    color: 'white',
    fontSize: 8,
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    paddingBottom: 4,
    marginLeft: 6,
    marginTop: 6,
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },
  containerFlat: {
    flex: 1,
    marginLeft: 15,
    marginTop: 16
  },
  item: {
    justifyContent: 'center',
    margin: 6,
    height: 180,
    width: 120,
    justifyContent: 'flex-end',
    alignItems: 'center',

  },
  itemWatched: {
    justifyContent: 'center',
    marginTop: 6,
    marginLeft: 6,
    marginRight: 6,
    height: 180,
    width: 120,
    justifyContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15

  },
  image: {
    width: 100,
    height: 100
  },
  textTitle: {
    color: '#EF8D21',
    fontSize: 16,
    fontFamily: 'PoppinsVN-700',
    fontWeight: 'normal',
    marginLeft: 15,
    marginBottom: 16
  },
  textTitle2: {
    color: '#EF8D21',
    fontSize: 16,
    fontFamily: 'PoppinsVN-700',
    fontWeight: 'normal',
    marginLeft: 15,
    marginTop: 16,
    marginBottom: 16
  }
})