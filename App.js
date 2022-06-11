import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Router from './src/router/index'
import { Provider } from 'react-redux';
import { store, Persistor } from './src/redux/store'
import { NavigationContainer } from "@react-navigation/native";
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})