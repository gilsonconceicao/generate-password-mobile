import React, { ReactNode, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

type TitleAlign = "auto" | "center" | "left" | "right" | "justify"

interface IModalComponent {
    visible: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode
    titleAlign?: TitleAlign
}

export const ModalComponent: React.FC<IModalComponent> = ({ 
    visible, 
    onClose, 
    title, 
    children, 
    titleAlign = 'left'
 }) => {

    const customStyle = styles(titleAlign);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}>
            <View style={customStyle.centeredView}>
                <View style={customStyle.modalView}>
                    <Text style={customStyle.modalTitle}>{title}</Text>
                    {children}
                </View>
            </View>
        </Modal>
    );
};

const styles = (titleAlign: TitleAlign)=> StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 30,
        paddingHorizontal: 20,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: titleAlign
    },
});