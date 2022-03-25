import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../Screen/Home';
import NewHot from '../Screen/NewHot';
import Search from '../Screen/Search'
import ListTeacher from '../Screen/ListTeacher';
import MyList from '../Screen/MyList'
import MainTabScreen from "../routing/MainTabScreen";
import TestScreen from "../Screen/TestScreen";
import User from "../Screen/User";
import Profile from '../Screen/Profile'
import Membership from '../Screen/Membership'
import Referall from '../Screen/Referral'
import UpdateEmail from '../Screen/UpdateEmail'
import Password from '../Screen/Password'
import Terms from '../Screen/Terms'
import Lesturers from "../Screen/Lesturers";
import Payment from '../Screen/Payment'
const Stack = createStackNavigator();

export default class AppNavigation extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator
                screenOptions = {{headerShown: false}}
                initialRouteName = {'MainTabScreen'}
                >
                    <Stack.Screen name = "MainTabScreen" component = {MainTabScreen}/>
                    <Stack.Screen name = "Home" component = {Home}/>
                    <Stack.Screen name = "Search" component = {Search}/>
                    <Stack.Screen name = "ListTeacher" component = {ListTeacher}/>
                    <Stack.Screen name = "MyList" component = {MyList}/>
                    <Stack.Screen name = "NewHot" component = {NewHot}/>
                    <Stack.Screen name = "TestScreen" component = {TestScreen}/>
                    <Stack.Screen name = "User" component = {User}/>
                    <Stack.Screen name = "Profile" component = {Profile}/>
                    <Stack.Screen name = "Membership" component = {Membership}/>
                    <Stack.Screen name = "Referall" component = {Referall}/>
                    <Stack.Screen name = "UpdateEmail" component = {UpdateEmail}/>
                    <Stack.Screen name = "Password" component = {Password}/>
                    <Stack.Screen name = "Terms" component = {Terms}/>
                    <Stack.Screen name = "Lesturers" component = {Lesturers}/>
                    <Stack.Screen name = "Payment" component = {Payment}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}