import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Router from './src/router/index'
import { Provider } from 'react-redux';
import { Store } from './src/redux/store'
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})