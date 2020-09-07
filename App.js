import React, { Component } from 'react';
import {
  SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
  import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';
//import { Container, Header, Content, Text, Title, Left, Right, Button, Icon, Body, Form, Item, Input, Label } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import read from './crud/read';
import input from './crud/input';

const Stack = createStackNavigator();

export default class FloatingLabelExample extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Input" component={input} />
        <Stack.Screen name="Read" component={read} />
        {/* <Stack.Screen name="Update" component={UpdateActivity} /> */}
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}