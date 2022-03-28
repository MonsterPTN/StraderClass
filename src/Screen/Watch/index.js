import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    FlatList,
    TextInput
} from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
import { styles } from './style'
import IconDown from '../../Icons/DownIcon'
import IconUp from '../../Icons/UpIcon'

const App = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    const [screen, setScreen] = useState(true)

    const dataVideo = [
        {
            "description": "TAEYEON 태연 'I (feat. Verbal Jint)' MV",
            "sources": ["4OrCA1OInoo"],
            "name": "TAEYEON",
            "thumb":"../../Static/Image/image1.png",
            "videod": "30,1 Tr người đăng ký"
        },
        {
            "description": "Nhạc Chill TikTok | Kho Nhạc Lofi Chill Hay Nhất TikTok 2021",
            "sources": ["L-03Rc4j_9g"],
            "name": "Thanh Nhan",
            "thumb": "../../Static/Image/image1.png",
            "videod": "99 Videos"
        },
        {
            "description": "Nhạc Chill TikTok | Kho Nhạc Lofi Chill Hay Nhất TikTok 2021",
            "sources": ["L-03Rc4j_9g"],
            "name": "Thanh Nhan",
            "thumb": "../../Static/Image/image1.png",
            "videod": "99 Videos"
        },
    ]

    const datacmt = [
        {
            "description": "Bài này hay cực",
            "name": "Thanh Nhan",
            "thumb": "../../Static/Image/image1.png",
        }, {
            "description": "Bài này hay cực",
            "name": "Thanh Nhan",
            "thumb": "../../Static/Image/image1.png",
        }, {
            "description": "Bài này hay cực",
            "name": "Thanh Nhan",
            "thumb": "../../Static/Image/image1.png",
        },
    ]


    const renderItem = ({ item }) => {
        return (
            <View style={styles.bodyvideo}>
                <YoutubePlayer
                    height={240}
                    play={false}
                    videoId={item.sources}>
                </YoutubePlayer>
                <View style={styles.imgtextbodyvideo}>
                    <Image style={styles.imgbodyvideo} source={item.thumb}></Image>
                    <View >
                        <Text style={styles.textbodyvideotitle}>{item.description} </Text>
                        <View style={styles.imgtext}>
                            <Text style={styles.textbodyvideo}>{item.name}</Text>
                            <Text style={styles.textbodyvideo}>{item.videod}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    const renderItem2 = ({ item }) => {
        return (

            <View>
                <View style={styles.comment2}>
                    <Image style={styles.Imagecomment2} source={item.thumb}></Image>
                    <Text style={styles.testcmt}>{item.name}</Text>
                </View>
                <View style={styles.namevideo}>
                    <Text style={styles.Textname2}>{item.description}</Text>
                </View>
            </View>

        )
    }
    return (
        <SafeAreaView style={styles.BodyView}>
            <View style={styles.videoView}>
                <YoutubePlayer
                    height={240}
                    play={false}
                    videoId={'B9wnssU0AnY'} />
            </View>
            <ScrollView>
                <View>
                    <Text style={styles.texVideo}>Nhạc Chill TikTok | Kho Nhạc Lofi Chill Hay Nhất TikTok 2021 </Text>
                </View>
                <View style={styles.ViewName}>
                    <View style={styles.viewimagename}>
                        <View style={styles.viewimage}>
                            <Image style={styles.Image} source={require('../../Static/Image/image1.png')}></Image>
                        </View>
                        <View style={styles.namevideo}>
                            <Text style={styles.Textname}>Thanh Nhan</Text>
                            <Text>300 Videos</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.playss}>
                            <Text style={styles.touch}>Regist Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.viewComment}>
                    <View style={styles.comment}>
                        <Text style={styles.texcomment}>Comment</Text>
                        <TouchableOpacity onPress={() => setScreen(!screen)} >
                            {screen ? <IconUp /> : <IconDown />}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.currentcomment}>
                        <Image style={styles.Imagecomment} source={require('../../Static/Image/image1.png')}></Image>
                        <TextInput
                            style={styles.inputcomment}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="Input Comment"
                            keyboardType="numeric"
                        />

                    </View>
                    {screen &&
                        <View >
                            {
                                datacmt.map((item, index) => (
                                    renderItem2({ item })
                                ))
                            }
                        </View>

                    }

                </View>
                <View>
                    {
                        dataVideo.map((item, index) => (
                            renderItem({ item })
                        ))
                    }

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;