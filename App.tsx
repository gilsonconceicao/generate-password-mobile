import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/Routes/Routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#1c1c1c' barStyle='default'/>
      <Routes />
    </NavigationContainer>
  );
}
