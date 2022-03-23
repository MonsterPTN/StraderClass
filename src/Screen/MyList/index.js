import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import PlaySmallIcon from '../../Icons/PlaySmallIcon'
import { styles } from './styles';

const MyList = () => {

    renderItem = ({ item, index }) => {
        return (

            <View style={{ flexDirection: 'row', marginBottom: 6, backgroundColor: '#000000', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../Static/Image/imageSearch.png')}></Image>
                    <View style={{ justifyContent: 'center', marginLeft: 24 }}>
                        <Text style={styles.text3}>{item.name}</Text>
                        <Text style={styles.text5}>{item.key}</Text>

                    </View>
                </View>
                <View style={{ justifyContent: 'center', marginRight: 9 }}>
                    <PlaySmallIcon />
                </View>
            </View>

        )
    }

    return (
        <View style={{ backgroundColor: '#171921', paddingRight: 15, paddingLeft: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 25, justifyContent: 'center', paddingBottom: 20 }}>
                <Text style={styles.textHeader}>My List</Text>
            </View>
            <ScrollView style = {{marginBottom:80}}>
                <StatusBar style="auto" />


                <Text style={styles.textTitle}>Photographer</Text>

                <FlatList
                    data={[
                        { key: 'Devin', name: 'Thanh Nhan', status: 'new' },
                        { key: 'Dan', name: 'Thanh Nhan' },
                        { key: 'Jillian', name: 'Thanh Nhan' },
                        { key: 'Jimmy', name: 'Thanh Nhan' },
                        { key: 'Julie', name: 'Thanh Nhan  ' },

                    ]}
                    renderItem={renderItem}
                />
                <Text style={styles.textTitle}>Cooking</Text>

                <FlatList
                    data={[
                        { key: 'Devin', name: 'Thanh Nhan', status: 'new' },
                        { key: 'Dan', name: 'Thanh Nhan' },
                        { key: 'Dominic', name: 'Thanh Nhan' },
                        { key: 'Jackson', name: 'Thanh Nhan' },
                    ]}
                    renderItem={renderItem}
                />

            </ScrollView>
        </View>
    );

}
export default MyList;
