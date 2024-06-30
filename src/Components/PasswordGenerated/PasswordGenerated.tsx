import React from 'react'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { GenericModalAction } from '../GenericAction/GenericModalAction';

interface IPasswordGeneratedProps {
    password: string;
    onClse: () => void;
}

export const PasswordGenerated = ({ onClse, password }: IPasswordGeneratedProps) => {
    return (
        <View>
            <Pressable
                onLongPress={() => { }}
                style={styles.pressable}
            >
                <Text style={styles.password}>{password}</Text>
            </Pressable>
            <View style={styles.actionsArea}>
                <GenericModalAction onClose={onClse}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: '#000',
        padding: 20,
        borderRadius: 8
    },
    password: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }, 
    actionsArea: {
        marginTop: 20
    }
})
