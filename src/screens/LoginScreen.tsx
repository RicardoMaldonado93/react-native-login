import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import styles from '../components/LoginStyle';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

interface Props extends NativeStackScreenProps<any, any> {}

const LoginScreen = ({navigation} : Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>LoginApp</Text>

    <View style={styles.input}>
      <TextInput
        placeholder={'Username'}
        placeholderTextColor={'white'}
        style={styles.inputView}
      />
    </View>
    <View style={styles.input}>
      <TextInput
        placeholder={'Password'}
        placeholderTextColor={'white'}
        style={styles.inputView}
      />
    </View>
    <TouchableOpacity>
      <Text style={styles.forgot}>Forgot Password?</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.loginBtn}
      onPress={()=> navigation.navigate("HomeScreen")}
    >
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.signupBtn}>
      <Text style={styles.loginText}>Signup</Text>
    </TouchableOpacity>

    <View style={styles.versionContent}>
      <Text style={styles.textVersion}>v0.1.0</Text>
    </View>
  </View>
);

export default LoginScreen;
