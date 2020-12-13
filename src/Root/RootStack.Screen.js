import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../Screens/SignIn/Login.Screen';
import SignUpScreen from '../Screens/SignUp/SignUp.Screen';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SignIn" component={SignInScreen} />
    <RootStack.Screen name="SignUp" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
