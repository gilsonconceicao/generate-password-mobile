import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, ParamListBase, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../Views/Home/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Passwords } from '../Views/Passwords/Passwords';


const Tab = createBottomTabNavigator();

interface IRenderIcon {
    focused: boolean;
    color: string;
    size: number;
    route: RouteProp<ParamListBase, string>
}

const RenderTabBarIcon: React.FC<IRenderIcon> = ({ color, focused, route, size }) => {
    let iconName;
    if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
    } else if (route.name === 'Passwords') {
        iconName = focused ? 'key' : 'key-outline';
    }
    return <Ionicons name={iconName!} size={25} color={color} />;
}

const screenOptionsProps = (route: RouteProp<ParamListBase, string>): BottomTabNavigationOptions => {
    return {
        tabBarIcon: (props) => <RenderTabBarIcon {...{ ...props, route }} />,
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerStyle: {
            backgroundColor: '#1c1c1c',
            shadowColor: '#222'
        },
        headerTitleAlign: 'center', 
        tabBarStyle: {
            backgroundColor: '#1c1c1c',
            borderColor: '#222'
        }

    }
}

export function Routes() {
    return (
        <Tab.Navigator screenOptions={({ route }) => screenOptionsProps(route)}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: 'Início'
                }}
            />
            <Tab.Screen
                name="Passwords"
                component={Passwords}
                options={{
                    headerTitle: 'Senhas'
                }}
            />
        </Tab.Navigator>
    );
}