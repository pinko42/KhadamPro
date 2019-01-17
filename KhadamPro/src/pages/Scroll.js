import React, { Component } from 'react';
import { Platform, View, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default class AlignItemsBasics extends Component  {


    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize:30, padding:20}}> hello world!</Text>
                <Text style={{ fontSize:30, padding:20}}> hello world!</Text>
                <Text style={{ fontSize:30, padding:20}}> hello world!</Text>
            </ScrollView>

        );
    }
}
