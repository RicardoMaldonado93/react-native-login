import { StyleSheet } from "react-native";

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
    position: 'absolute',
    bottom: 10,
    right: 20,
    // marginTop:"auto",
  },
  textVersion: {
    color: '#dadadada',
    fontWeight: 'bold',
  },
});

export default styles;