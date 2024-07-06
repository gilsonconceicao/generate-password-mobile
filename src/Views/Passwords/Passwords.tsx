import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useStorage } from '../../Hooks/useStorage';
import { Button } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
import { RootStackScreenDefaultProps } from '../../@types/RootStackScreenProps';

type Props = {} & RootStackScreenDefaultProps<'Passwords'>;


export const Passwords: React.FC<Props> = ({ navigation }) => {
    
    const { removeItem, currentValues, readData, setCurrentValues } = useStorage("@password");

    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                const data = await readData();
                if (data) {
                    setCurrentValues(data);
                }
            };
            fetchData();
        }, [])
    );

    if (currentValues.length === 0) {
        return (
            <View style={{
                ...style.container,
                alignContent: 'center',
                alignItems: 'center'
            }}>
                <View style={style.content}>
                    <Text style={style.textNotFound}>Ainda não existe senhas salvas.</Text>
                    <Button
                        type='solid'
                        onPress={() => navigation.navigate("Home")}
                        title='Adicionar senha'
                        icon={<Ionicons name='key' color='#fff' size={20} style={{ marginRight: 5 }} />}
                        buttonStyle={{
                            backgroundColor: '#4929ED',
                            padding: 10,
                            marginTop: 20
                        }}
                    />
                </View>
            </View>
        );
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
    },
    textNotFound: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#D9D8D7',
    }
})