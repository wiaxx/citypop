import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomePage from './src/pages/Home';
import SearchCity from './src/pages/SearchCity';
import SearchCountry from './src/pages/SearchCountry';
import City from './src/pages/City';
import Country from './src/pages/Country';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='CityPop'
            component={HomePage}
          />
          <Stack.Screen
            name='Search City'
            component={SearchCity}
          />
          <Stack.Screen
            name='Search Country'
            component={SearchCountry}
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
      </NavigationContainer>
    </React.Fragment>
  );
}
