import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import styles from './Chat.Style';
import colors from '../../Themes/Colors';
import {barStyle} from '../../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ListChatScreen from '../ListChat/ListChat.Screen';
import ActiveScreen from '../Active/Active.Screen';

const Tab = createMaterialTopTabNavigator();
const ChatScreen = () => {
  const navigation = useNavigation();

  const renderToolbar = () => {
    return (
      <View style={styles.toolbar}>
        <StatusBar
          hidden={false}
          backgroundColor={colors.primary}
          barStyle={barStyle.lightContent}
        />
        <TouchableOpacity
          style={styles.viewWrapIcLeft}
          onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons
            name={'menu'}
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>Chats</Text>
        </View>
        <View style={styles.viewWrapIcRight} />
      </View>
    );
  };

  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainContainer}>
          {renderToolbar()}
          <Tab.Navigator>
            <Tab.Screen name="Message" component={ListChatScreen} />
            <Tab.Screen name="Active" component={ActiveScreen} />
          </Tab.Navigator>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
export default ChatScreen;
