// =====================================================
// 🧠 CONTROLE DE NAVEGAÇÃO
// =====================================================

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SelectTypeScreen from './screens/SelectTypeScreen';
import RegisterClient from './screens/RegisterClient';
import RegisterDriver from './screens/RegisterDriver';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SelectType" component={SelectTypeScreen} />
        <Stack.Screen name="RegisterClient" component={RegisterClient} />
        <Stack.Screen name="RegisterDriver" component={RegisterDriver} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
