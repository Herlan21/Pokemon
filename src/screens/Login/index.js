import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { LoginSuccess } from '../../redux/actions';

const Login = ({ navigation }) => {

  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState('');

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  function onLogin() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        // navigation.navigate('MainApp')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

  return (
    <View style={styles.container}>

      <View style={styles.wrapper}>
        <Text style={styles.title}>Sign In to your account</Text>

        <View>

          <Text style={{ fontSize: 14, color: '#000', fontWeight: '600', marginBottom: 8 }}>Email</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Email"
            value={email}
            // onChangeText={value => setEmail(value)}
            placeholderTextColor="#bbb"

          />

          <Text style={{ fontSize: 14, color: '#000', fontWeight: '600', marginBottom: 8 }}>Password</Text>
          <TextInput
            style={styles.textinput}
            placeholderTextColor="#bbb"
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            // onChangeText={value => setPassword(value)}

          />

          <View style={styles.LoginButton}>
            <TouchableOpacity>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>


            {/* //! TO REGISTER */}
            <View style={styles.register}>
              <Text style={{ color: '#000' }}>Don't have an account? </Text>

              <TouchableOpacity
                onPress={() => navigation.replace('Register')}>

                <Text style={{ color: '#1b30d1', fontWeight: 'bold' }}>Register here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
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

  textinput: {
    borderWidth: 0.95,
    borderColor: '#bbb',
    marginBottom: 12,
    borderRadius: 8,
    color: '#000',
    paddingHorizontal: 15
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