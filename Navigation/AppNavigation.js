import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../Screen/HomeScreen';
import NewHotScreen from '../Screen/NewHotScreen';
import SearchScreen from '../Screen/SearchScreen'
import ListTeacherScreen from '../Screen/ListTeacherScreen';
import MyListScreen from '../Screen/MyListScreen'
import MainTabScreen from "./MainTabScreen";
import UserScreen from "../Screen/UserScreen";
import IntroduceScreen from '../Screen/IntroduceScreen'
import ProfileScreen from '../Screen/ProfileScreen'
import UpdateEmailScreen from '../Screen/UpdateEmailScreen'
import UpdatePasswordScreen from "../Screen/UpdatePasswordScreen";
import LanguageScreen from "../Screen/LanguageScreen";
import TermsConditionsScreen from "../Screen/TermConditionsScreen";
import ChagePinScreen from '../Screen/ChangPinScreen'
import Lesturers from '../Screen/Lesturers'
import PaymentScreen from '../Screen/PaymentScreen'
import MembershipScreen from "../Screen/MembershipScreen";
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
                    <Stack.Screen name = "HomeScreen" component = {HomeScreen}/>
                    <Stack.Screen name = "SearchScreen" component = {SearchScreen}/>
                    <Stack.Screen name = "ListTeacherScreen" component = {ListTeacherScreen}/>
                    <Stack.Screen name = "MyListScreen" component = {MyListScreen}/>
                    <Stack.Screen name = "NewHotScreen" component = {NewHotScreen}/>
                    <Stack.Screen name = "UserScreen" component = {UserScreen}/>
                    <Stack.Screen name = "IntroduceScreen" component = {IntroduceScreen}/>
                    <Stack.Screen name = "ProfileScreen" component = {ProfileScreen}/>
                    <Stack.Screen name = "UpdateEmailScreen" component = {UpdateEmailScreen}/>
                    <Stack.Screen name = "UpdatePasswordScreen" component = {UpdatePasswordScreen}/>
                    <Stack.Screen name = "LanguageScreen" component = {LanguageScreen}/>
                    <Stack.Screen name = "TermsConditionsScreen" component = {TermsConditionsScreen}/>
                    <Stack.Screen name = "ChagePinScreen" component = {ChagePinScreen}/>
                    <Stack.Screen name = "Lesturers" component = {Lesturers}/>
                    <Stack.Screen name = "PaymentScreen" component = {PaymentScreen}/>
                    <Stack.Screen name = "MembershipScreen" component = {MembershipScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}