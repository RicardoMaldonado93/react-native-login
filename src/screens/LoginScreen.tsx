import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LoginScreen = () => (
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
    <TouchableOpacity style={styles.loginBtn}>
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

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e0f22',
    flexDirection: 'column',
  },
  title: {
    color: '#fb5b5a',
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    backgroundColor: '#1d1f44',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    alignSelf: 'center',
  },
  inputView: {
    color: 'white',
    height: 50,
  },
  forgot: {
    color: 'white',
    fontSize: 15,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  signupBtn: {
    width: '80%',
    // backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 40,
    // marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  versionContent: {
    width: '100%',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    position:"absolute",
    bottom:10,
    right:20
    // marginTop:"auto",
  },
  textVersion: {
    color: '#dadadada',
    fontWeight:"bold"
  },
});

export default LoginScreen;
