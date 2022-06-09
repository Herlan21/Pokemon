import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Alert, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Formik } from 'formik';
import database from '@react-native-firebase/database';

import { useDispatch } from 'react-redux';
import { Form } from '../../components';

const Login = ({ navigation }) => {

  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [pokemondata, setPokemondata] = useState([]);

  // Set an initializing state whilst Firebase connects

  const handleSubmit = values => {
    database()
      .ref('users/')
      .orderByChild('emailId')
      .equalTo(email)
      .once('value')
      .then(async snapshot => {
        if (snapshot.val() == null) {
          Alert.alert('Invalid Email Id !')
          return false
        }

        let userData = Object.values(snapshot.val())[0]
        if (userData?.password != password) {
          Alert.alert('Invalid Password !')
          return false
        }
        console.log('User data: ', userData);
        dispatch(LoginSuccess(userData))
        navigation.replace('Home')
      })
  }

  // useEffect(() => {
  //   pokemon()
  // })


  // const renderItems = ({ item }) => (
  //   <View>
  //     <Text style={{ color: '#000', marginRight: 15 }}>{item.name}</Text>
  //   </View>
  // )

  {/* <FlatList 
      numColumns={2}
      keyExtractor={(index)=> index.toString()}
      data={pokemondata}
      renderItem={renderItems}
    /> */}

  return (

    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => handleSubmit(values)} >

      {({ handleChange, handleBlur, handleSubmit, values }) => (

        <View style={styles.container}>
          <View style={styles.wrapper}>

            <Text style={styles.title}>Sign In to your account</Text>
            
            <Text style={{ fontSize: 14, color: '#000', fontWeight: '600', marginBottom: 8 }}>Email</Text>
            <Form
              placeholder={'Email Address'}
              onChangeText={handleChange('email')}
              value={values.email}
            />

            <Text style={{ fontSize: 14, color: '#000', fontWeight: '600', marginBottom: 8 }}>Password</Text>
            <Form
              placeholder={'Password'}
              secureTextEntry={true}
              value={values.password}
              onChangeText={handleChange('password')}
            />

            {/* //!LOGIN BUTTON */}
            <View style={styles.LoginButton}>
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.login}>Login</Text>
              </TouchableOpacity>

              {/* //! TO REGISTER */}
              <View style={styles.register}>
                <Text style={{ color: '#000' }}>Don't have an account? </Text>

                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}>

                  <Text style={{ color: '#1b30d1', fontWeight: 'bold' }}>Register here</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

      )}
    </Formik>
  )
}

export default Login

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8591d6',
    margin: 10,
    textAlign: 'center',
    top: -20
  },

  wrapper: {
    width: '80%'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  register: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },

  login: {
    color: '#FFF',
    backgroundColor: '#8591d6',
    textAlign: 'center',
    width: 100,
    height: 35,
    borderRadius: 8,
    fontSize: 21,
    fontWeight: 'bold'
  },

  LoginButton: {
    alignItems: 'center',
    top: 5
  }
})