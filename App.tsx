import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/Routes/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor='#034159' animated={true} translucent={true} />
      <Routes />
    </NavigationContainer>
  );
}
