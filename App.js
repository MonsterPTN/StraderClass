import React, { Component } from 'react'
import AppNavigation from './src/routing/AppNavigation'
import { AuthProvider } from './src/Redux/AuthContext'
import { LogBox } from 'react-native';
export default class App extends Component {
  render() {
    return (
      <AuthProvider>
        {LogBox.ignoreAllLogs()}
        <AppNavigation />
      </AuthProvider>
    )
  }
}
