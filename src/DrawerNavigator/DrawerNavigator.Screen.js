import { createDrawerNavigator } from '@react-navigation/drawer';
import TopicScreen from '../Screens/Topic/Topic.Screen';
import FollowerScreen from '../Screens/Follower/Follower.Screen';
import ChatScreen from '../Screens/Chat/Chat.Screen';
import React, { Fragment } from 'react';
import colors from '../Themes/Colors';
import styles from './DrawerNavigator.Style';
import CounterScreen from '../Screens/Counter/Counter.Screen';
import { SafeAreaView } from 'react-native';
import DrawerContentScreen from './DrawerContent.Screen';
import DetailProfileScreen from '../Screens/DetailProfile/DetailProfile.Screen';

const Drawer = createDrawerNavigator();

const DrawerNavigatorScreen = () => {
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1 }}>
        <Drawer.Navigator
          drawerContent={() => <DrawerContentScreen />}
          drawerContentOptions={{
            activeTintColor: colors.primary,
            labelStyle: styles.textItemMenu
          }}>
          <Drawer.Screen name="TopicScreen" component={TopicScreen} options={{ drawerLabel: 'Topic' }} />
          <Drawer.Screen name="DetailProfileScreen" component={DetailProfileScreen} options={{ drawerLabel: 'DetailProfileScreen' }} />
          <Drawer.Screen name="Chats" component={ChatScreen} options={{ drawerLabel: 'Chats' }} />
          <Drawer.Screen name="FollowerScreen" component={FollowerScreen} options={{ drawerLabel: 'Follower' }} />
          <Drawer.Screen name="CounterScreen" component={CounterScreen} options={{ drawerLabel: 'Counter' }} />
        </Drawer.Navigator>
      </SafeAreaView>
    </Fragment>
  );
};
export default DrawerNavigatorScreen;
