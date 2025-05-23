import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SplashScreen from './Telas/SplashScreen';
import Home from './Telas/Home';
import Busca from './Telas/Busca';
import Sobre from './Telas/Sobre';
import Detalhes from './Telas/Detalhes';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Componente das tabs principais
function TabRoutes() {
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
          backgroundColor: 'black',
        },
        tabBarActiveTintColor: '#ffdb73',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Busca" component={Busca} />
      <Tab.Screen name="Sobre" component={Sobre} />
    </Tab.Navigator>
  );
}

// Stack principal: controla Splash, depois Tabs e detalhes
export default function Routes() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    // Esconde o splash após 2 segundos (ajuste o tempo como quiser)
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    // Renderiza só o SplashScreen
    return <SplashScreen />;
  }

  // Depois do splash, renderiza stack com tabs e tela detalhes
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Aqui as tabs principais */}
        <Stack.Screen name="Tabs" component={TabRoutes} />
        {/* Tela interna detalhes */}
        <Stack.Screen name="Detalhes" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
