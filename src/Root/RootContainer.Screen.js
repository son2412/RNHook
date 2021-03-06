import React, { useEffect, useState } from 'react';
import styles from './RootContainer.Style';
import { Keyboard, Platform, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigatorScreen from '../DrawerNavigator/DrawerNavigator.Screen';
import Toast from 'react-native-simple-toast';
import { useDispatch, useSelector } from 'react-redux';
import { clearNetworkFail, checkSignIn } from '../actions';
import RootStackScreen from './RootStack.Screen';
import AsyncStorage from '@react-native-community/async-storage';
import DetailChatScreen from '../Screens/DetailChat/DetailChat.Screen';
import DetailFollowerScreen from '../Screens/DetailFollower/DetailFollower.Screen';
import VideoCallScreen from '../Screens/VideoCall/VideoCall.Screen';
import CreateTopicScreen from '../Screens/CreateTopic/CreateTopic.Screen';

const Stack = createStackNavigator();

const RootContainerScreen = () => {
  const sendNetworkFail = useSelector(state => state.sendNetworkFail);
  const isLogin = useSelector(state => state.isAuth);
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const dispatch = useDispatch();
  const clearNetworkStatus = () => dispatch(clearNetworkFail());

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', e => {
      setIsKeyboardShow(true);
      setKeyboardHeight(e.endCoordinates.height);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardShow(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  if (sendNetworkFail.err) {
    switch (sendNetworkFail.err) {
      case 'NETWORK_ERROR':
        Toast.show('No network connection, please try again');
        break;
      case 'TIMEOUT_ERROR':
        Toast.show('Timeout, please try again');
        break;
      case 'CONNECTION_ERROR':
        Toast.show('DNS server not found, please try again');
        break;
      default:
        Toast.show(sendNetworkFail.err);
        break;
    }
    clearNetworkStatus();
  }

  useEffect(() => {
    setTimeout(async () => {
      const token = await AsyncStorage.getItem('token');
      dispatch(checkSignIn(token));
    }, 10);
  }, []);

  if (isLogin.fetching) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="small" />
      </View>
    );
  }
  return (
    <View style={styles.mainContainer}>
      <NavigationContainer>
        {isLogin.token ? (
          <Stack.Navigator initialRouteName="Drawer" headerMode={'none'}>
            <>
              <Stack.Screen name="Drawer" component={DrawerNavigatorScreen} options={{ gestureEnabled: true, gestureDirection: 'horizontal' }} />
              <Stack.Screen name="DetailChatScreen" component={DetailChatScreen} options={{ gestureEnabled: true, gestureDirection: 'horizontal' }} />
              <Stack.Screen
                name="DetailFollowerScreen"
                component={DetailFollowerScreen}
                options={{ gestureEnabled: true, gestureDirection: 'horizontal' }}
              />
              <Stack.Screen name="VideoCallScreen" component={VideoCallScreen} options={{ gestureEnabled: true, gestureDirection: 'horizontal' }} />
              <Stack.Screen name="CreateTopicScreen" component={CreateTopicScreen} options={{ gestureEnabled: true, gestureDirection: 'horizontal' }} />
            </>
          </Stack.Navigator>
        ) : (
          <>
            <RootStackScreen />
          </>
        )}
      </NavigationContainer>

      {/*Keyboard padding*/}
      {isKeyboardShow && Platform.OS === 'ios' ? <View style={{ height: keyboardHeight }} /> : null}
    </View>
  );
};
export default RootContainerScreen;
