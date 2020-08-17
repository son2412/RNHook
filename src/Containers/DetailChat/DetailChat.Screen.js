import React, {Fragment, useState, useEffect, useCallback} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import styles from './DetailChat.Style';
import colors from '../../Themes/Colors';
import {barStyle} from '../../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppStyles from '../../styles';
import {GiftedChat, Send} from 'react-native-gifted-chat';

const DetailChatScreen = props => {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();
  const onPress = () => {};
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);
  const onSend = useCallback((message = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, message),
    );
  }, []);

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
          onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name={'arrow-left'}
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>{props.route.params.group_name}</Text>
        </View>
        <View style={styles.viewWrapIcRight}>
          <TouchableRipple
            onPress={onPress}
            style={styles.icon}
            rippleColor="rgba(0, 0, 0, .32)">
            <Icon size={24} color={AppStyles.colors.accentColor} name="call" />
          </TouchableRipple>
          <TouchableRipple
            onPress={onPress}
            style={styles.icon}
            rippleColor="rgba(0, 0, 0, .32)">
            <Icon
              size={24}
              color={AppStyles.colors.accentColor}
              name="videocam"
            />
          </TouchableRipple>
        </View>
      </View>
    );
  };

  const renderAction = () => {
    return (
      <TouchableRipple
        onPress={onPress}
        style={styles.icon}
        rippleColor="rgba(0, 0, 0, .32)">
        <Icon size={24} color={AppStyles.colors.accentColor} name="image" />
      </TouchableRipple>
    );
  };

  const renderSend = () => {
    return (
      <TouchableRipple
        onPress={onPress}
        style={styles.icon}
        rippleColor="rgba(0, 0, 0, .32)">
        <Icon size={24} color={AppStyles.colors.accentColor} name="image" />
      </TouchableRipple>
    );
  };

  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainContainer}>
          {renderToolbar()}
          <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
              _id: 1,
            }}
            placeholder={'Type a message...'}
            alwaysShowSend={true}
            isKeyboardInternallyHandled={false}
            // renderActions={renderAction}
            // renderSend={renderSend}
          />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
export default DetailChatScreen;
