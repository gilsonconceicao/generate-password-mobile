import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ISeverityToast, IToastProps, StleCustomProps } from './toast.type';
import { Icon } from 'react-native-elements';

export const Toast: React.FC<IToastProps> = ({ title, message, enable, style, severity }) => {
    const styleComponent = stleCustom(severity, style);
    
    if (!enable) return <></>; 
    return (
        <View style={styleComponent.container}>
            <View style={styleComponent.content}>
                <View>
                    <Text style={styleComponent.titleMessage}>{title}</Text>
                    <Text style={styleComponent.titleDescription}>{message}</Text>
                </View>
                <View>
                    <Icon
                        reverse
                        name='remove-circle-outline'
                        type='ionicon'
                        color='transparent'
                    />
                </View>

            </View>
        </View>
    )
}


const stleCustom = (severity: ISeverityToast, props?: StleCustomProps) => {
    return StyleSheet.create({
        container: {
            backgroundColor: getColorToast(severity),
            position: 'absolute',
            top: "10%",
            right: 10,
            left: 10,
            borderRadius: 8,
            padding: 10
        },
        content: {
            flexDirection: 'row', 
            justifyContent: 'space-between'
        },
        titleMessage: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold'
        },
        titleDescription: {
            color: '#fff'
        }
    })
}


const getColorToast = (severity: ISeverityToast) => {
    const options: { [type: string]: string } = {
        "success": "green",
        "error": "red",
        "info": "#4929ED"
    }
    return options[severity!];
}