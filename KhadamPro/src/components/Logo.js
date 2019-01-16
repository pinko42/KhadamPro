import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';



export default class Login extends Component  {
    render() {
      return (
          <View style={styles.container}>

            <Image
              style={{width: 70, height: 70}}
              source={require('../images/Logo.png')}
            />
            <Text style={styles.logoText}>
              welcome to my app.
            </Text>

          </View>
      
        );
      }
    }

    const styles = StyleSheet.create({
      container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
      },
      logoText : {
        marginVertical: 10,
        fontSize: 18,
        color : 'rgba(255,255,255,0.7)'

      }
    });