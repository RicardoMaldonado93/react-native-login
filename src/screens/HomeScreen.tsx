import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const HomeScreen = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome</Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#0e0f22",
        width:"100%",
        height:"100%"
    },
    text:{
        color:"white",
        fontSize:30,
        textAlign:"center",
        marginTop:"20%"
    }
})