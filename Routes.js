// Routes.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from './Telas/SplashScreen';
import Home from './Telas/Home';
import Busca from './Telas/Busca';
import Detalhes from './Telas/Detalhes';
import Sobre from './Telas/Sobre';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Estige" 
          component={Home} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Busca" 
          component={Busca} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Detalhes" 
          component={Detalhes} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Sobre" 
          component={Sobre} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
