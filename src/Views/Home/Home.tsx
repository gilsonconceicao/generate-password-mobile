import { Button } from '@rneui/themed';
import React, { useState } from 'react'
import { Image, Modal, StyleSheet, Text, View } from 'react-native'
import { Slider } from 'react-native-elements';
import { ModalComponent } from '../../Components/Modal/ModalComponent';
import { PasswordGenerated } from '../../Components/PasswordGenerated/PasswordGenerated';
import { useStorage } from '../../Hooks/useStorage';

var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";

export function HomeScreen() {
    const [size, setSize] = useState<number>(3);
    const [passwordGenerated, setPasswordGenerated] = useState<string | undefined>(undefined);
    const [visible, setVisible] = useState<boolean>(false);
    const onClose = () => setVisible(false);

    const handleOnValueChange = (value: number) => {
        const formatValue = Number(value.toFixed(0));
        setSize(formatValue);
    };

    const handleGeneratePassword = () => {
        var password = "";

        for (var i = 0; i < size; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber + 1);
        }
        setPasswordGenerated(password); 
        setVisible(true);
    }

    return (
        <View style={style.container}>
            <Image
                source={require('../../../assets/password.png')}
                style={style.image}
            />
            <Text style={style.title}>
                {size} caracteres
            </Text>
            <View style={style.contentSlider}>
                <Slider
                    value={size}
                    onValueChange={handleOnValueChange}
                    maximumValue={20}
                    minimumValue={0}
                    allowTouchTrack
                    trackStyle={{ height: 8, backgroundColor: 'transparent' }}
                    thumbStyle={{ height: 20, width: 20, backgroundColor: '#FF9800' }}
                    thumbTintColor='red'
                    minimumTrackTintColor='#4929ED'
                    maximumTrackTintColor='#1d0a7a'
                />
            </View>

            <ModalComponent
                title='Senha gerada'
                onClose={onClose}
                visible={visible}
                titleAlign="center"
            >
               <PasswordGenerated onClse={onClose} password={passwordGenerated!}/>
            </ModalComponent>

            <View style={style.areaButton}>
                <Button
                    title="Gerar senha"
                    onPress={handleGeneratePassword}
                    type='solid'
                    buttonStyle={{
                        backgroundColor: '#4929ED',
                        padding: 10
                    }}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222222'
    },
    image: {
        width: 300,
        height: 300
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    slider: {
        width: 100
    },
    contentSlider: {
        padding: 5,
        width: '80%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: 'rgb(46, 46, 46)',
        borderRadius: 9
    },
    areaButton: {
        width: '80%',
        marginTop: 20
    },
})