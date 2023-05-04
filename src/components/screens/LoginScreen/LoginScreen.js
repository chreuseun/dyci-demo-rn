import React,{useState} from 'react';
import {
  SafeAreaView, 
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

import {MAIN} from 'src/styles/colors'

const USERNAME_PLACEHOLDER = 'Username'

const LoginScreen = () => {
  const [username, setUsername]  =useState('')

  const onPressLogin = () => {
    console.log('--- THIS THE USERNAME: ', username)
  }

  const onUsernameChange = (text) => {
    setUsername(text)
  }

  const isUsernameValid = !!username

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textInpContainer}>
        <Text style={styles.title}>SVMS</Text>
        <TextInput 
          onChangeText={onUsernameChange} 
          style={styles.textInput} 
          placeholder={USERNAME_PLACEHOLDER} 
        />
      </View>
      <TouchableOpacity onPress={onPressLogin} disabled={!isUsernameValid} style={{marginBottom:72}}>     
        <View style={styles.buttonContainer}>
          <Text style={styles.loginText}>
            Login
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:24
  },
  textInput: {
    borderWidth:2,
    width:'100%',
    borderRadius:20,
    paddingHorizontal:16,
    textAlign:'center',
    fontSize:18,
    marginTop:4,
    borderColor:'gray'
  },
  textInpContainer:{flex:1, justifyContent:"center", alignItems:'center',width:'100%', },
  buttonContainer:{backgroundColor:MAIN,width:250, padding:16, borderRadius:20,},
  loginText:{fontWeight:'bold', fontSize:20,textAlign:'center', color:'#FFF',},
  title: {
    fontSize:40,
    fontWeight:'bold',
    color:'#272727',
    marginBottom:8
  }
})

export default LoginScreen;
