import AsyncStorage from "@react-native-async-storage/async-storage";

type IReadDataProps = {
    key: string
}

type ISaveDataProps<T> = {
    data: T; 
    onSuccess: () => void; 
} & IReadDataProps;

export const useStorage = () => {

    async function saveData<T>({ data, key, onSuccess }: ISaveDataProps<T>) {
        try {
            const currentValues = await readData({key}); 
            const valuesParsed = JSON.parse(currentValues as string) as T[]; 
            await AsyncStorage.setItem(key, JSON.stringify([...valuesParsed, data]) || "");
            onSuccess();
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }

    async function readData({ key }: IReadDataProps) {
        try {
            const value = await AsyncStorage.getItem(key) || [];
            return value;
        } catch (e) {
            alert('Failed to fetch the input from storage');
        }
    };

    return {
        readData,
        saveData
    }
}