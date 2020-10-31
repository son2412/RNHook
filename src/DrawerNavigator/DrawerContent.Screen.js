import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useTheme, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { myProfileRequest } from './MyProfile.Action';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { signOut } from '../actions';
import { signInInit } from '../Containers/SignIn/SignIn.Action';
import DrawerProfile from '../Components/DrawerProfile.js/DrawerProfile';
import styles from './DrawerNavigator.Style';

const DrawerContentScreen = () => {
  const paperTheme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.getMyProfile.data);
  const fetching = useSelector(state => state.getMyProfile.fetching);
  useEffect(() => {
    dispatch(myProfileRequest());
  }, [dispatch]);
  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch(signInInit());
    dispatch(signOut());
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          {fetching ? <ActivityIndicator size="small" /> : <DrawerProfile profile={profile} />}

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => <Icon name="home-outline" color={color} size={size} />}
              label="Home"
              onPress={() => navigation.navigate('TopicScreen')}
            />
            <DrawerItem
              icon={({ color, size }) => <Icon name="account-outline" color={color} size={size} />}
              label="Profile"
              onPress={() => navigation.navigate('DetailProfileScreen')}
            />
            <DrawerItem
              icon={({ color, size }) => <Icon name="message-text-outline" color={color} size={size} />}
              label="Chat"
              onPress={() => navigation.navigate('Chats')}
            />
            <DrawerItem
              icon={({ color, size }) => <Icon name="account-outline" color={color} size={size} />}
              label="Followers"
              onPress={() => navigation.navigate('FollowerScreen')}
            />
            <DrawerItem
              icon={({ color, size }) => <Icon name="bookmark-outline" color={color} size={size} />}
              label="Bookmarks"
              onPress={() => {
                navigation.navigate('CounterScreen');
              }}
            />
            {/* <DrawerItem
              icon={({color, size}) => (
                <Icon name="settings-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Support"
              onPress={() => {
                navigation.navigate('SupportScreen');
              }}
            /> */}
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple onPress={() => {}}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem icon={({ color, size }) => <Icon name="exit-to-app" color={color} size={size} />} label="Sign Out" onPress={logOut} />
      </Drawer.Section>
    </View>
  );
};
export default DrawerContentScreen;
