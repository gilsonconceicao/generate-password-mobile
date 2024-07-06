import { Button } from '@rneui/themed';
import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import { ModalComponent } from '../../Components/Modal/ModalComponent';
import { PasswordGenerated } from '../../Components/PasswordGenerated/PasswordGenerated';
import { chars } from '../../constants/chars';
import { RootStackScreenDefaultProps } from '../../@types/RootStackScreenProps';
import { SliderComponent } from '../../Components/Slider/Slider';

type Props = {} & RootStackScreenDefaultProps<'Home'>;

export const HomeScreen: React.FC<Props> = ({}) => {
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

        if (size < 3) {
            return Alert.alert("Não é permitido gerar senha com menos de 3 caracteres");
        } 

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
                <SliderComponent
                    size={size}
                    handleOnValueChange={handleOnValueChange}
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