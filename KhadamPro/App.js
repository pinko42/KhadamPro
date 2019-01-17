import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput } from 'react-native';

import firebase from '@firebase/app';
require('firebase/auth');


import Logo from './src/components/Logo';


// Initialize Firebase
const config = {
  apiKey: "AIzaSyABuR4fPp65I63KmIJVZbstVK209a3tWtA",
  authDomain: "khadampro-ba089.firebaseapp.com",
  databaseURL: "https://khadampro-ba089.firebaseio.com",
  projectId: "khadampro-ba089",
  storageBucket: "khadampro-ba089.appspot.com",
  messagingSenderId: "927910621636"
};
firebase.initializeApp(config);

export default class AlignItemsBasics extends Component  {

  constructor(props){
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  signupUser = (email,password) =>{
    try {
      if (this.state.password.length<6)
      {
        alert("please enter at least 6 characters")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error.toString())
    }

  }

  loginUser = (email,password) =>{
    try {
      
      
      firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
      console.log(error.toString())
    }

    
  }


  render() {
    return (
      
      <View style={styles.container}>
          
            <StatusBar
              backgroundColor="#1c313a"
              barStyle="light-content"
            />

            <Logo/>

            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onChangeText={(email) => this.setState({email})}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              onChangeText={(password) => this.setState({password})}
              />  
           <TouchableOpacity style={styles.button}
            onPress={()=> this.loginUser(this.state.email,this.state.password)}
           >
             <Text style={styles.buttonText}>login</Text>
           </TouchableOpacity> 



            <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Don't have an account yet?</Text>
              <TouchableOpacity
              onPress={()=> this.signupUser(this.state.email,this.state.password)}
              >
              <Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
            </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container : {
    backgroundColor : '#455a64',
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});
