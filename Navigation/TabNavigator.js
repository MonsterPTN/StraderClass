import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import NewHotScreen from '../Screen/NewHotScreen';
import SearchScreen from '../Screen/SearchScreen'
import ListTeacherScreen from '../Screen/ListTeacherScreen';
import MyListScreen from '../Screen/MyListScreen'
import HomeIcon from '../Icon/HomeIcon'
import StarIcon from '../Icon/StarIcon'
import PresonsIcon from '../Icon/PresonsIcon'
import ListIcon from '../Icon/ListIcon'
import SearchIcon from '../Icon/SearchIcon'
import UserScreen from '../Screen/UserScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    
    <Tab.Navigator tabBarOption ={{style:{backgroundColor: 'black'}}}>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false,tabBarIcon:({}) =>(<HomeIcon/>)}}/>
      <Tab.Screen name="NewHotScreen" component={NewHotScreen} options={{headerShown: false,tabBarIcon:({}) =>(<StarIcon/>)}}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{headerShown: false,tabBarIcon:({}) =>(<SearchIcon/>)}}/>
      <Tab.Screen name="Lesturers" component={ListTeacherScreen} options={{headerShown: false,tabBarIcon:({}) =>(<PresonsIcon/>)}} />
      <Tab.Screen name="MyList" component={MyListScreen} options={{headerShown: false,tabBarIcon:({}) =>(<ListIcon/>)}}/>
    </Tab.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
