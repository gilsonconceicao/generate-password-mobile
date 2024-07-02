import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Passwords = () => {
    return (
        <View style={style.container}>
            <Text>Lista de senhas</Text>
        </View>
    )
}



const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222222'
    }
})