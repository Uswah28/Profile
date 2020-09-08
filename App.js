import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ReadCrud from './crud/read';
import CreateCrud from './crud/create';
import UpdateCrud from './crud/update';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Create" component={CreateCrud} />
        <Stack.Screen name="Read" component={ReadCrud} />
        <Stack.Screen name="Update" component={UpdateCrud} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}