import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { GenericModalAction } from '../GenericAction/GenericModalAction';
import { useStorage } from '../../Hooks/useStorage';

interface IPasswordGeneratedProps {
    password: string;
    onClse: () => void;
}

export const PasswordGenerated = ({ onClse, password }: IPasswordGeneratedProps) => {
    const { saveData } = useStorage("@password");

    const savePassword = async () => {
        await saveData<string>({
            data: password, 
            onSuccess: onClse
        }); 
    }

    return (
        <View>
            <Pressable
                onLongPress={() => { }}
                style={styles.pressable}
            >
                <Text style={styles.password}>{password}</Text>
            </Pressable>
            <View style={styles.actionsArea}>
                <GenericModalAction onClose={onClse} onNext={savePassword}/>
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
