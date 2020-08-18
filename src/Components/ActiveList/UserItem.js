import React from 'react';
import {View, Image, Alert} from 'react-native';
import {TouchableRipple, Text} from 'react-native-paper';
import Avatar from '../Avatar/Avatar';
import Images from '../../../assets/images';
import styles from './style';
import {chatWith} from '../../Api/groupApi';
import {useDispatch, useSelector} from 'react-redux';
import {listChatRequest} from '../../Containers/ListChat/ListChat.Acion';
import {useNavigation} from '@react-navigation/native';

const UserItem = ({item}) => {
  const dispatch = useDispatch();
  const listChatWith = useSelector(state => state.listChatWith.data);
  const navigation = useNavigation();
  const {id, first_name, last_name, image} = item;
  const onPress = () => {
    chatWith({target_id: id}).then(response => {
      const {data, success} = response.data;
      if (success) {
        const find = listChatWith.find(x => x.id === data.id);
        if (!find) {
          dispatch(listChatRequest({page_size: 20}));
        }
        navigation.navigate('DetailChatScreen', {group: data});
      } else {
        Alert.alert(response.message);
      }
    });
  };
  return (
    <TouchableRipple onPress={onPress} rippleColor="rgba(0, 0, 0, .20)">
      <View style={styles.item}>
        <Avatar uri={image && image.url} enableDot />
        <Text style={styles.userName}>{first_name + ' ' + last_name}</Text>
        <Image style={styles.wave} source={Images.Images.Wave} />
      </View>
    </TouchableRipple>
  );
};
export default UserItem;
