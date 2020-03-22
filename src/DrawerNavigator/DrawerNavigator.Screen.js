import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../Containers/Profile/Profile.Screen';
import FollowerScreen from '../Containers/Follower/Follower.Screen';
import SignInScreen from '../Containers/SignIn/SignIn.Screen';
import React from 'react';
import colors from '../Themes/Colors';
import styles from './DrawerNavigator.Style';
import CounterScreen from '../Containers/Counter/Counter.Screen';

const Drawer = createDrawerNavigator();

const DrawerNavigatorScreen = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: colors.primary,
        labelStyle: styles.textItemMenu,
      }}>
      <Drawer.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{drawerLabel: 'Profile'}}
      />
      <Drawer.Screen
        name="FollowerScreen"
        component={FollowerScreen}
        options={{drawerLabel: 'Follower'}}
      />
      <Drawer.Screen
        name="CounterScreen"
        component={CounterScreen}
        options={{drawerLabel: 'Counter'}}
      />
      <Drawer.Screen
        name="SignIn"
        component={SignInScreen}
        options={{drawerLabel: 'LogOut'}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigatorScreen;
