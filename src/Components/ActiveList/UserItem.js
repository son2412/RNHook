import React from 'react';
import {View, Image, Alert} from 'react-native';
import {TouchableRipple, Text} from 'react-native-paper';
import Avatar from '../Avatar/Avatar';
import Images from '../../../assets/images';
import styles from './style';
import { chatWith } from '../../Api/groupApi';

const UserItem = ({item}) => {
  const {id, first_name, last_name, image} = item;
  const onPress = () => {
    Alert.alert('Clicked ');
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
