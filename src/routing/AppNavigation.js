import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
import Watch from '../Screen/Watch'
const Stack = createNativeStackNavigator();

export default class AppNavigation extends Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator
                screenOptions = {{headerShown: false}}
                initialRouteName = {'MainTabScreen'}
                >
                    <Stack.Screen name = "MainTabScreen" component = {MainTabScreen}/>
                    <Stack.Screen name = "TestScreen" component = {TestScreen}/>
                    <Stack.Screen name = "User" component = {User}/>
                    <Stack.Screen name = "Profile" component = {Profile}/>
                    <Stack.Screen name = "Membership" component = {Membership}/>
                    <Stack.Screen name = "Referall" component = {Referall}/>
                    <Stack.Screen name = "UpdateEmail" component = {UpdateEmail}/>
                    <Stack.Screen name = "Password" component = {Password}/>
                    <Stack.Screen name = "Terms" component = {Terms}/>
                    <Stack.Screen name = "Lesturers" component = {Lesturers}/>
                    <Stack.Screen name = "Watch" component = {Watch}/>
                    <Stack.Screen name = "Payment" component = {Payment}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}