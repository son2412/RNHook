import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileScreen from '../Containers/Profile/Profile.Screen';
import FollowerScreen from '../Containers/Follower/Follower.Screen';
import ChatScreen from '../Containers/Chat/Chat.Screen';
import React, {Fragment} from 'react';
import colors from '../Themes/Colors';
import styles from './DrawerNavigator.Style';
import CounterScreen from '../Containers/Counter/Counter.Screen';
import {SafeAreaView} from 'react-native';
import DrawerContentScreen from './DrawerContent.Screen';

const Drawer = createDrawerNavigator();

const DrawerNavigatorScreen = () => {
  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        <Drawer.Navigator
          drawerContent={() => <DrawerContentScreen />}
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
            name="Chats"
            component={ChatScreen}
            options={{drawerLabel: 'Chats'}}
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
        </Drawer.Navigator>
      </SafeAreaView>
    </Fragment>
  );
};
export default DrawerNavigatorScreen;
