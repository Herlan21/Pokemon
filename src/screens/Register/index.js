import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import FormRegister from '../../components/registerForm'
import uuid from 'react-native-uuid';
import database from '@react-native-firebase/database';

import { Formik } from 'formik';
import * as Yup from 'yup';

const Register = ({ navigation }) => {

    const handleSubmit = async values => {
        if (values.name == '' || values.email == '' || values.password == '') {
            Alert.alert('Please fill the fields')
            return false
        }

        let data = {
            id: uuid.v4(),
            name: values.name,
            emailId: values.email,
            password: values.password,
        }

        database()
            .ref('/users/' + data.id)
            .set(data)
            .then(() => {
                Alert.alert('Register Success !')
                navigation.replace('Login')
            });
    }

    // YUP
    const RegisterSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });

    return (

        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={values => handleSubmit(values)}
            validationSchema={RegisterSchema}>

            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

                <View style={styles.container}>

                    <View style={styles.wrapper}>
                        <Text style={styles.title}>Sign Up for account</Text>

                        <View>

                            <Text style={{ fontSize: 14, color: '#000', fontWeight: '600', marginBottom: 8 }}>Name</Text>
                            <FormRegister
                                placeholder={'Name'}
                                onChangeText={handleChange('name')}
                                value={values.name}
                            />
                            {errors.name && (
                                <Text style={{ color: 'red' }}>
                                    {errors.name}
                                </Text>
                            )}

                            <Text style={{ fontSize: 14, color: '#000', fontWeight: '600', marginBottom: 8 }}>Email</Text>
                            <FormRegister
                                placeholder={'Email Address'}
                                onChangeText={handleChange('email')}
                                value={values.email}
                            />
                            {errors.email && (
                                <Text style={{ color: 'red' }}>
                                    {errors.email}
                                </Text>
                            )}

                            <Text style={{ fontSize: 14, color: '#000', fontWeight: '600', marginBottom: 8 }}>Password</Text>
                            <FormRegister
                                placeholder={'Password'}
                                secureTextEntry={true}
                                value={values.password}
                                onChangeText={handleChange('password')}
                            />
                            {errors.password && (
                                <Text style={{ color: 'red' }}>
                                    {errors.password}
                                </Text>
                            )}


                            {/* //! BUTTON SIGN UP */}
                            <View style={styles.LogupButton}>
                                <TouchableOpacity onPress={handleSubmit}>
                                    <Text style={styles.register}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>

                            {/* //! BUTTON TO LOGIN */}
                            <View style={styles.registeraccount}>
                                <Text style={{ color: '#000' }}>have an account? </Text>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Login')}>
                                    <Text style={{ color: '#1b30d1', fontWeight: 'bold' }}>Login here</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>

            )}
        </Formik>
    )
}

export default Register

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#8591d6',
        margin: 10,
        textAlign: 'center',
        top: 20
    },

    text: {
        color: 'gray',
        margin: 20,
        textAlign: 'center',
        top: 20,
    },

    SignUp: {
        color: '#FFF',
        backgroundColor: '#8591d6',
        textAlign: 'center',
        width: 100,
        height: 35,
        borderRadius: 8,
        fontSize: 22,
        fontWeight: 'bold'

    },

    registeraccount: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },

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

    register: {
        color: '#FFF',
        backgroundColor: '#8591d6',
        textAlign: 'center',
        width: 100,
        height: 35,
        borderRadius: 8,
        fontSize: 21,
        fontWeight: 'bold'
    },

    LogupButton: {
        alignItems: 'center',
        top: 5
    },
})