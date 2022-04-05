import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../Screen/Home';
import NewHot from '../Screen/NewHot';
import Search from '../Screen/Search'
import ListTeacher from '../Screen/ListTeacher';
import MyList from '../Screen/MyList'
import HomeIcon from '../Icons/HomeIcon'
import StarIcon from '../Icons/StarIcon'
import PresonsIcon from '../Icons/PresonsIcon'
import ListIcon from '../Icons/ListIcon'
import SearchIcon from '../Icons/SearchIcon'
const HomeStack = createNativeStackNavigator();
const NewHotStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const ListTeacherStack = createNativeStackNavigator();
const MyListStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator initialRouteName="Home" activeColor="white">
    <Tab.Screen
      name="HomeScreen"
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
            name="SearchSCreen"
            component={SearchScreenStack}
            options={{
                tabBarLabel: 'Search',
                tabBarColor: '#272A38',
                tabBarIcon: () => (
                  <SearchIcon/>
                ),
              }} />
        <Tab.Screen
            name="ListTeacherScreen"
            component={ListTeacherScreenStack}
            options={{
                tabBarLabel: 'Lecturers',
                tabBarColor: '#272A38',
                tabBarIcon: () => (
                  <PresonsIcon/>
                ),
              }} />
        <Tab.Screen
            name="MyListScreen"
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
        <HomeStack.Screen name="Home" component={Home} options={{
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
        <NewHotStack.Screen name="NewHot" component={NewHot} options={{
            title: 'NewHot', headerShown: false
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
        <SearchStack.Screen name="Search" component={Search} options={{
            title: 'Search', headerShown: false
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
        <ListTeacherStack.Screen name="ListTeacher" component={ListTeacher} options={{
            title: 'ListTeacher', headerShown: false
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
        <MyListStack.Screen name="MyList" component={MyList} options={{
            title: 'MyList', headerShown: false
        }} />
    </MyListStack.Navigator>

);
