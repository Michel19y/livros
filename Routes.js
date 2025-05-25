import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SplashScreen from './Telas/SplashScreen';
import Home from './Telas/Home';
import Busca from './Telas/Busca';
import Sobre from './Telas/Sobre';
import Detalhes from './Telas/Detalhes';

import { CoresProvider, useCores } from './Contexts/CoresContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabRoutes() {
  const { tema } = useCores();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Busca') {
            iconName = 'search';
          } else if (route.name === 'Sobre') {
            iconName = 'information-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: tema.fundo,
        },
        tabBarActiveTintColor: tema.ativo,
        tabBarInactiveTintColor: tema.inativo,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Busca" component={Busca} />
      <Tab.Screen name="Sobre" component={Sobre} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <CoresProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Tabs" component={TabRoutes} />
          <Stack.Screen name="Detalhes" component={Detalhes} />
        </Stack.Navigator>
      </NavigationContainer>
    </CoresProvider>
  );
}
