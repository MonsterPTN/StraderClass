import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

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
const HomeStack = createStackNavigator();
const NewHotStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ListTeacherStack = createStackNavigator();
const MyListStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator initialRouteName="Home" activeColor="white">
    <Tab.Screen
      name="Home"
      component={HomeScreenStack}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#272A38',
        tabBarIcon: () => (
          <HomeIcon/>
        ),
      }}
    />
        <Tab.Screen
            name="New & Hot"
            component={NewHotScreenStack}
            options={{
                tabBarLabel: 'New & Hot',
                tabBarColor: '#272A38',
                tabBarIcon: () => (
                  <StarIcon/>
                ),
              }} />
        <Tab.Screen
            name="Search"
            component={SearchScreenStack}
            options={{
                tabBarLabel: 'Search',
                tabBarColor: '#272A38',
                tabBarIcon: () => (
                  <SearchIcon/>
                ),
              }} />
        <Tab.Screen
            name="ListTeacher"
            component={ListTeacherScreenStack}
            options={{
                tabBarLabel: 'Lecturers',
                tabBarColor: '#272A38',
                tabBarIcon: () => (
                  <PresonsIcon/>
                ),
              }} />
        <Tab.Screen
            name="MyList"
            component={MyListScreenStack}
            options={{
                tabBarLabel: 'My List',
                tabBarColor: '#272A38',
                tabBarIcon: () => (
                  <ListIcon/>
                ),
              }} />
    </Tab.Navigator>
);
export default MainTabScreen;

const HomeScreenStack = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#272A38',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title: 'Home', headerShown: false
        }} />
    </HomeStack.Navigator>
);
const NewHotScreenStack = ({ navigation }) => (
    <NewHotStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#272A38',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <NewHotStack.Screen name="NewHot" component={NewHotScreen} options={{
            title: 'Home', headerShown: false
        }} />
    </NewHotStack.Navigator>
);
const SearchScreenStack = ({ navigation }) => (
    <SearchStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#272A38',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <SearchStack.Screen name="Search" component={SearchScreen} options={{
            title: 'Home', headerShown: false
        }} />
    </SearchStack.Navigator>

);
const ListTeacherScreenStack = ({ navigation }) => (
    <ListTeacherStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#272A38',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ListTeacherStack.Screen name="ListTeacher" component={ListTeacherScreen} options={{
            title: 'Home', headerShown: false
        }} />
    </ListTeacherStack.Navigator>

);
const MyListScreenStack = ({ navigation }) => (
    <MyListStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: '#272A38',
        headerTitleStyle: {
            fontWeight: 'bold', headerShown: false
        }
    }}>
        <MyListStack.Screen name="MyList" component={MyListScreen} options={{
            title: 'Home', headerShown: false
        }} />
    </MyListStack.Navigator>

);
