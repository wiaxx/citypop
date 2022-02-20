import { StatusBar } from 'expo-status-bar';
import HomePage from './src/HomePage';
import Country from './src/Country';
import City from './src/City';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
