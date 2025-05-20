// Routes.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Telas/Home';
import Busca from './Telas/Busca';
import Detalhes from './Telas/Detalhes';
import Sobre from './Telas/Sobre';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Estige" component={Home} />
      <Stack.Screen name="Busca" component={Busca} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




