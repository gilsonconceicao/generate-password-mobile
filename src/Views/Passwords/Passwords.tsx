import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useStorage } from '../../Hooks/useStorage';

export const Passwords = () => {
    const { currentValues } = useStorage("@password");

    console.log({currentValues})
    if (currentValues === undefined || currentValues?.length === 0) return <View></View>
    return (
        <View style={style.container}>
          <View style={style.content}>
              {currentValues?.map(item => {
                return <Text style={style.key}>{item}</Text>
              })}
          </View>
        </View>
    )
}



const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222222'
    }, 
    content: {
        margin: 20
    }, 
    key: {
        backgroundColor: '#1c1c1c', 
        padding: 10, 
        borderRadius: 8, 
        color: '#FF9800', 
        marginVertical: 5, 
        fontSize: 19
    }
})