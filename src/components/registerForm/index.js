import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const FormRegister = ({ onChangeText, value, placeholder, secureTextEntry }) => {
    return (
        

                <View>
                    <TextInput
                        style={styles.textinput}

                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChangeText}
                        secureTextEntry={secureTextEntry}

                        placeholderTextColor="#bbb"
                    />
                </View>
    )
}

export default FormRegister

const styles = StyleSheet.create({

    textinput: {
        borderWidth: 0.95,
        borderColor: '#bbb',
        marginBottom: 12,
        borderRadius: 8,
        color: '#000',
        paddingHorizontal: 15
    },


})