import { StatusBar } from 'expo-status-bar';
import HomePage from './src/pages/Home';
import Country from './src/pages/Country';
import City from './src/pages/City';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='CityPop'
          component={HomePage}
        />
        <Stack.Screen
          name='City'
          component={City}
        />
        <Stack.Screen
          name='Country'
          component={Country}
        />
      </Stack.Navigator>
      { /* <React.Fragment> <StatusBar style="auto" /></React.Fragment> */}
    </NavigationContainer>
  );
}
