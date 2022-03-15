import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screen/HomeScreen';
import UserScreen from '../Screen/UserScreen';
const Stack = createNativeStackNavigator();

export default function NavigationStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator initiaRouteName = "HomeScreen">
            <Stack.Screen name = "HomeScreen" component = {HomeScreen}/>
            <Stack.Screen name = "UserScreen" component = {UserScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}