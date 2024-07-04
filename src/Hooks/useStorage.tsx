import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

type ISaveDataProps<T> = {
    data: T;
    onSuccess?: () => void;
} ;

export const useStorage = (key?: string) => {
    const [currentValues, setCurrentValues] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await readData();
            if (data) {
                setCurrentValues(data);
            }
        };

        fetchData();
    }, [key]);

    async function saveData<T>({ data, onSuccess }: ISaveDataProps<T>) {
        try {
            const currentData = await readData();
            const newData = currentData ? [...currentData, data] : [data];
            await AsyncStorage.setItem(key!, JSON.stringify(newData));
            setCurrentValues(newData);
            if (onSuccess) {
                onSuccess();
            }
        } catch (e) {
            alert('Failed to save the input to storage');
        }
    }

    async function readData() {
        try {
            const data = await AsyncStorage.getItem(key!);
            return data != null ? JSON.parse(data) : null;
        } catch (e) {
            alert('Failed to fetch the input from storage');
        }
    }

    async function removeItem(item: string) {
        try {
            const data = await AsyncStorage.getItem(key!);
            if (data != null) {
                const parsedData = JSON.parse(data);
                const newData = parsedData.filter((i: string) => i !== item);
                await AsyncStorage.setItem(key!, JSON.stringify(newData));
                setCurrentValues(newData);
            }
        } catch (e) {
            alert('Failed to remove the input from storage');
        }
    }

    return {
        currentValues,
        saveData,
        readData,
        removeItem, 
        setCurrentValues
    }
}
