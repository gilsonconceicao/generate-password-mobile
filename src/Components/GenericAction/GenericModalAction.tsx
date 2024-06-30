import { Button } from '@rneui/themed'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface IGenericModalActionProps {
    onClose: () => void
}

export const GenericModalAction: React.FC<IGenericModalActionProps> = ({onClose}) => {
    return (
        <View style={styles.container}>
            <Button
                buttonStyle={[styles.button]}
                type='clear'
                onPress={onClose}
                title={<Text style={styles.backButton}>Voltar</Text>}
            />
            <Button
                buttonStyle={[styles.button, styles.targetButton]}
                title='Avançar'
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        width: '83%'
    },
    targetButton: {
        backgroundColor: '#4929ED',
        borderRadius: 8,
        fontSize: 18,
    },
    backButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    }
})