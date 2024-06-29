import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { HomeScreen } from '../Views/Home/Home';

const Stack = createNativeStackNavigator();


export const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home" 
                component={HomeScreen}
                options={{
                    headerShown: false
                }}     
            />
        </Stack.Navigator>
    )
}
