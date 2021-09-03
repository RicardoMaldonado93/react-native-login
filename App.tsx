import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginScreen from './src/screens/LoginScreen'

 const App = () => {
  return (
    <View style={style.container}>
      <LoginScreen />
    </View>
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