import React from 'react';
import {View, Image} from 'react-native';
import {TouchableRipple, Text} from 'react-native-paper';
import _ from 'lodash';
import Avatar from '../Avatar/Avatar';
import Images from '../../../assets/images';
import styles from './style';

const UserItem = ({item}) => {
  const {display_name, profile_image} = item;
  const onPress = () => {
    alert('Clicked ');
  };
  return (
    <TouchableRipple onPress={onPress} rippleColor="rgba(0, 0, 0, .20)">
      <View style={styles.item}>
        <Avatar uri={profile_image} enableDot />
        <Text style={styles.userName}>
          {/* {name.first[0].toUpperCase() +
            name.first.slice(1) +
            ' ' +
            name.last[0].toUpperCase() +
            name.last.slice(1)} */}
            {display_name}
        </Text>
        <Image style={styles.wave} source={Images.Images.Wave} />
      </View>
    </TouchableRipple>
  );
};
export default UserItem;
