import React, { Component } from 'react'
import AppNavigation from './src/routing/AppNavigation'
import { AuthProvider } from './src/Redux/AuthContext'

export default class App extends Component {
  render() {
    return (
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    )
  }
}
