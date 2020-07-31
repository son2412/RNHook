import React from 'react';
import {View} from 'react-native';
import {TouchableRipple, Text} from 'react-native-paper';
import Avatar from '../Avatar/Avatar';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const ChatItem = ({item}) => {
  const navigation = useNavigation();
  const {name, picture, last_message} = item;
  const onPress = () => {
    navigation.navigate('DetailChatScreen', {});
  };
  return (
    <TouchableRipple onPress={onPress} rippleColor="rgba(0, 0, 0, .20)">
      <View style={styles.item}>
        <Avatar uri={picture.thumbnail} enableDot />
        <View style={{flex: 1}}>
          <Text style={styles.userName}>
            {name.first[0].toUpperCase() +
              name.first.slice(1) +
              ' ' +
              name.last[0].toUpperCase() +
              name.last.slice(1)}
          </Text>
          <Text style={styles.lastMessage}>{last_message}</Text>
        </View>
        <Text>{'17:30'}</Text>
      </View>
    </TouchableRipple>
  );
};
export default ChatItem;
