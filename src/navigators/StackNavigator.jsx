import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';

import Home from '../screens/Home/Home';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="CALCULADORA" component={Home} />
    </Stack.Navigator>
  );
}

export default StackNavigator;