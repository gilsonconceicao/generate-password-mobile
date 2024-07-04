import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useStorage } from '../../Hooks/useStorage';
import { Button } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';

export const Passwords = () => {
    const { removeItem, currentValues } = useStorage("@password");
   
    console.log('currentValues', currentValues)
    if (currentValues.length === 0) {
        return <View style={style.container}></View>;
    }


    return (
        <View style={style.container}>
            <View style={style.content}>
                {currentValues?.map(item => {
                    return (
                        <View style={style.item}>
                            <Text style={style.key}>{item}</Text>
                            <View>
                                <Button
                                    type='clear'
                                    onPress={() => removeItem(item)}
                                    icon={<Ionicons name='trash' color='#4929ED' size={25} />}
                                />
                            </View>
                        </View>
                    )
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
    item: {
        backgroundColor: '#1c1c1c',
        padding: 10,
        borderRadius: 8,
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    key: {
        color: '#FF9800',
        fontSize: 19
    }
})