import React from 'react';
import {View} from 'react-native';
import {TouchableRipple, Text} from 'react-native-paper';
import Avatar from '../Avatar/Avatar';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const TYPE_SINGLE = 1;
const TYPE_GROUP = 2;
const ChatItem = ({item}) => {
  const navigation = useNavigation();
  const profile = useSelector(state => state.getMyProfile.data);
  const onPress = () => {
    navigation.navigate('DetailChatScreen', {
      group: item,
      group_name: renderItem().name,
      user_id: profile.id
    });
  };
  const renderItem = () => {
    if (item.type === TYPE_SINGLE) {
      const find = item.users.find(x => x.id !== profile.id);
      return {
        name: `${find.first_name} ${find.last_name}`,
        avatar: find.image ? find.image.url : null,
      };
    }
    if (item.type === TYPE_GROUP) {
      return {
        name: item.name,
        avatar: item.avatar,
      };
    }
  };
  return (
    <TouchableRipple onPress={onPress} rippleColor="rgba(0, 0, 0, .20)">
      <View style={styles.item}>
        <Avatar uri={renderItem().avatar} enableDot />
        <View style={{flex: 1}}>
          <Text style={styles.userName}>{renderItem().name}</Text>
          <Text style={styles.lastMessage}>{'hello guy !'}</Text>
        </View>
        <Text>{'17:30'}</Text>
      </View>
    </TouchableRipple>
  );
};
export default ChatItem;
