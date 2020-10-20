import React, { useEffect, useState } from 'react';
import { View, Image, Alert, ActivityIndicator } from 'react-native';
import { TouchableRipple, Text } from 'react-native-paper';
import Avatar from '../Avatar/Avatar';
import Images from '../../../assets/images';
import styles from './style';
// import {chatWith} from '../../Api/groupApi';
import { useDispatch, useSelector } from 'react-redux';
import { listChatRequest } from '../../Containers/ListChat/ListChat.Acion';
import { createChatWithRequest } from '../../Redux/Actions/CreateChatWith.Action';
import { useNavigation } from '@react-navigation/native';

const UserItem = ({ item }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(0);
  const listChatWith = useSelector(state => state.listChatWith.data);
  const createChatWith = useSelector(state => state.createChatWith.data);
  const loading = useSelector(state => state.createChatWith.fetching);
  const profile = useSelector(state => state.getMyProfile.data);
  const navigation = useNavigation();
  const { id, first_name, last_name, image } = item;
  const onPress = target_id => {
    setChecked(target_id);
    dispatch(createChatWithRequest({ target_id: target_id }));
  };
  useEffect(() => {
    if (createChatWith) {
      // const find = listChatWith.find(x => x.id === createChatWith.id);
      // if (!find) {
      //   dispatch(listChatRequest({page_size: 20}));
      // }
      const findUser = createChatWith.users.find(u => u.id !== profile.id);
      navigation.navigate('DetailChatScreen', {
        group: createChatWith,
        user_id: profile.id,
        group_name: `${findUser.first_name} ${findUser.last_name}`
      });
    }
  }, [createChatWith]);

  return (
    <TouchableRipple onPress={() => onPress(id)} rippleColor="rgba(0, 0, 0, .20)">
      <View style={styles.item}>
        <Avatar uri={image && image.url} enableDot />
        <Text style={styles.userName}>{first_name + ' ' + last_name}</Text>
        <Image style={styles.wave} source={Images.Images.Wave} />
      </View>
    </TouchableRipple>
  );
};
export default UserItem;
