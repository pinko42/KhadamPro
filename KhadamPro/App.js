import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, StatusBar } from 'react-native';

import Login from './src/pages/Login';

export default class AlignItemsBasics extends Component  {
  render() {
    return (
      
      <View style={styles.container}>
          
            <StatusBar
              backgroundColor="#1c313a"
              barStyle="light-content"
            />
            <Login/>
        
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
  }
});