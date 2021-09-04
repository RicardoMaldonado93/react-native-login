import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator } from './src/navigator/StackNavigator';

 const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

const style = StyleSheet.create({
  container:{
    display:'flex',
    width: "100%",
    height:"100%",
    justifyContent:"center"
    
  }
})


export default App