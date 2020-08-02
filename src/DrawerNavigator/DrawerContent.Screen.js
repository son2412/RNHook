import React, {useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {myProfileRequest} from './MyProfile.Action';
import {useDispatch, useSelector} from 'react-redux';
import Images from '../../assets/images';
import AsyncStorage from '@react-native-community/async-storage';

const DrawerContentScreen = () => {
  const paperTheme = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const profile = useSelector(state => state.getMyProfile.data);
  const fetching = useSelector(state => state.getMyProfile.fetching);
  useEffect(() => {
    dispatch(myProfileRequest());
  }, [dispatch]);
  const signOut = async () => {
    await AsyncStorage.removeItem('token');
    navigation.navigate('SignIn', {})
  }
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          {fetching ? (
            <ActivityIndicator size="large" />
          ) : (
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image
                  source={
                    profile.image
                      ? {
                          uri: profile.image.url,
                        }
                      : Images.Images.Avatar
                  }
                  size={50}
                />
                <View style={{marginLeft: 15, flexDirection: 'column'}}>
                  <Title style={styles.title}>
                    {profile.first_name + ' ' + profile.last_name}
                  </Title>
                  <Caption style={styles.caption}>{profile.email}</Caption>
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    80
                  </Paragraph>
                  <Caption style={styles.caption}>Following</Caption>
                </View>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    100
                  </Paragraph>
                  <Caption style={styles.caption}>Followers</Caption>
                </View>
              </View>
            </View>
          )}

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                navigation.navigate('DetailProfileScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="message-text-outline" color={color} size={size} />
              )}
              label="Chat"
              onPress={() => {
                navigation.navigate('Chats');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile Dev"
              onPress={() => {
                navigation.navigate('ProfileScreen');
              }}
            />
            {/* <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Bookmarks"
              onPress={() => {
                navigation.navigate('BookmarkScreen');
              }}
            />
            <DrawerItem
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
            <TouchableRipple
              onPress={() => {
                // toggleTheme();
              }}>
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
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={signOut}
        />
      </Drawer.Section>
    </View>
  );
};
export default DrawerContentScreen;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
