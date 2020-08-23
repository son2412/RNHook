import React, {Fragment, useState, useEffect, useCallback} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import styles from './DetailChat.Style';
import colors from '../../Themes/Colors';
import {barStyle} from '../../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppStyles from '../../styles';
import {GiftedChat} from 'react-native-gifted-chat';
import {Firebase} from '../../const';
import {useDispatch} from 'react-redux';
import {sendMessageRequest} from '../../Redux/Actions/SendMessage.Action';
import requestCameraAndAudioPermission from '../../permission';

const MESSAGE_TYPE_TEXT = 1;
const MESSAGE_TYPE_IMAGE = 2;
const DetailChatScreen = props => {
  const dispatch = useDispatch();
  const {group_name, group, user_id} = props.route.params;
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('VideoCallScreen', {
      channelName: group.id,
    });
  };
  if (Platform.OS === 'android') {
    requestCameraAndAudioPermission().then(_ => {
      console.log('requested!');
    });
  }
  useEffect(() => {
    setLoading(true);
    Firebase.database()
      .ref('chats/' + group.id)
      .on('value', snap => {
        let items = [];
        let item = {};
        snap.forEach(child => {
          const childItem = child.val();
          const user = group.users.find(x => childItem.sender_id === x.id);
          item = {
            _id: childItem.id,
            text: childItem.message,
            createdAt: childItem.created_at || new Date(),
            user: {
              _id: user.id,
              name: user.first_name + ' ' + user.last_name,
              avatar: user.image ? user.image.url : null,
            },
          };
          items.push(item);
        });
        setMessages(items.sort((a, b) => b._id - a._id));
        setLoading(false);
      });
    // return function cleanup() {};
  }, [group]);
  const onSend = text => {
    dispatch(
      sendMessageRequest({
        group_id: group.id,
        message: text[0].text,
        type: MESSAGE_TYPE_TEXT,
      }),
    );
  };

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
          <Text style={styles.titleToolbar}>{group_name}</Text>
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

  // const renderAction = () => {
  //   return (
  //     <TouchableRipple
  //       onPress={onPress}
  //       style={styles.icon}
  //       rippleColor="rgba(0, 0, 0, .32)">
  //       <Icon size={24} color={AppStyles.colors.accentColor} name="image" />
  //     </TouchableRipple>
  //   );
  // };

  // const renderSend = () => {
  //   return (
  //     <TouchableRipple
  //       onPress={onPress}
  //       style={styles.icon}
  //       rippleColor="rgba(0, 0, 0, .32)">
  //       <Icon size={24} color={AppStyles.colors.accentColor} name="image" />
  //     </TouchableRipple>
  //   );
  // };

  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainContainer}>
          {renderToolbar()}
          {loading ? (
            <ActivityIndicator size="small" />
          ) : (
            <GiftedChat
              messages={messages}
              onSend={text => onSend(text)}
              user={{
                _id: user_id,
              }}
              placeholder={'Typing a message...'}
              alwaysShowSend={true}
              isKeyboardInternallyHandled={false}
              // renderActions={renderAction}
              // renderSend={renderSend}
            />
          )}
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
export default DetailChatScreen;
