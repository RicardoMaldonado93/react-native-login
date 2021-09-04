import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {HomeScreen} from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="LoginScreen"
    screenOptions={{
      headerShown: false,
      animation: 'slide_from_right',
    }}>
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen
      name="HomeScreen"
      options={{
        title: 'Home',
        headerStyle: {
          backgroundColor: '#1d1f44',
        },
        headerTintColor: '#fb5b5a',
        headerTitleStyle: {
          fontWeight: 'bold',
          color:"white"
        },
        headerTitleAlign:"center",
        headerShown:true
      }}
      component={HomeScreen}
    />
  </Stack.Navigator>
);

