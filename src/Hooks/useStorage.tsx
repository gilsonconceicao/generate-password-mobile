import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

type IReadDataProps = {
    key: string
}

type ISaveDataProps<T> = {
    data: T; 
    onSuccess: () => void; 
} & IReadDataProps;

export const useStorage = (keyCustom?: string) => {
    const [ currentValues, setCurrentValues ] = useState<string[]>([]); 
 

    useEffect(() => {
        if (keyCustom !== undefined) {
            const getValues = async () => await readData({ key: keyCustom });
            getValues().then((response) => setCurrentValues(JSON.parse(response as any) as string[]));
        }
    }, []);

    async function saveData<T>({ data, key, onSuccess }: ISaveDataProps<T>) {
        try { 
            await AsyncStorage.setItem(key, JSON.stringify([...currentValues, data]) || "");
            onSuccess();
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }

    async function readData({ key }: IReadDataProps) {
        try {
            const value = await AsyncStorage.getItem(key) || [];
            setCurrentValues(JSON.parse(value as any) as string[]);
            return value;
        } catch (e) {
            alert('Failed to fetch the input from storage');
        }
    };

    return {
        saveData, 
        currentValues
    }
}