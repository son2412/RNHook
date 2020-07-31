import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Images from '../../../assets/images';

const Avatar = props => {
  const {uri, large, isGroup, enableDot} = props;

  return (
    <View style={large ? styles.avatarLargeView : styles.avatarView}>
      {isGroup ? (
        <Icon name="face" size={64} color="grey" />
      ) : (
        <Image
          source={uri ? {uri: uri} : Images.Images.Avatar}
          style={large ? styles.avatarLarge : styles.avatar}
        />
      )}
      {enableDot ? (
        <View style={large ? styles.statusDotLarge : styles.statusDot} />
      ) : (
        <View style={{}} />
      )}
    </View>
  );
};
export default Avatar;
