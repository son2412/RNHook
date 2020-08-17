import React from 'react';
import {View} from 'react-native';
import {TouchableRipple, Text} from 'react-native-paper';
import Avatar from '../Avatar/Avatar';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const ChatItem = ({item}) => {
  const navigation = useNavigation();
  const {name, avatar} = item;
  const onPress = () => {
    navigation.navigate('DetailChatScreen', {group_name: name});
  };
  return (
    <TouchableRipple onPress={onPress} rippleColor="rgba(0, 0, 0, .20)">
      <View style={styles.item}>
        <Avatar uri={avatar} enableDot />
        <View style={{flex: 1}}>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.lastMessage}>{'hello guy !'}</Text>
        </View>
        <Text>{'17:30'}</Text>
      </View>
    </TouchableRipple>
  );
};
export default ChatItem;
