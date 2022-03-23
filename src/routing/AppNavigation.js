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
// import UserScreen from "../Screen/UserScreen";
// import IntroduceScreen from '../Screen/IntroduceScreen'
// import ProfileScreen from '../Screen/ProfileScreen'
// import UpdateEmailScreen from '../Screen/UpdateEmailScreen'
// import UpdatePasswordScreen from "../Screen/UpdatePasswordScreen";
// import LanguageScreen from "../Screen/LanguageScreen";
// import TermsConditionsScreen from "../Screen/TermConditionsScreen";
// import ChagePinScreen from '../Screen/ChangPinScreen'
// import Lesturers from '../Screen/Lesturers'
// import PaymentScreen from '../Screen/PaymentScreen'
// import MembershipScreen from "../Screen/MembershipScreen";
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
                    {/* <Stack.Screen name = "UserScreen" component = {UserScreen}/>
                    <Stack.Screen name = "IntroduceScreen" component = {IntroduceScreen}/>
                    <Stack.Screen name = "ProfileScreen" component = {ProfileScreen}/>
                    <Stack.Screen name = "UpdateEmailScreen" component = {UpdateEmailScreen}/>
                    <Stack.Screen name = "UpdatePasswordScreen" component = {UpdatePasswordScreen}/>
                    <Stack.Screen name = "LanguageScreen" component = {LanguageScreen}/>
                    <Stack.Screen name = "TermsConditionsScreen" component = {TermsConditionsScreen}/>
                    <Stack.Screen name = "ChagePinScreen" component = {ChagePinScreen}/>
                    <Stack.Screen name = "Lesturers" component = {Lesturers}/>
                    <Stack.Screen name = "PaymentScreen" component = {PaymentScreen}/>
                    <Stack.Screen name = "MembershipScreen" component = {MembershipScreen}/> */}
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}