import React from 'react';
import {View} from 'react-native';
import {Avatar, Title, Caption, Paragraph} from 'react-native-paper';
import styles from './style';
// import {useNavigation} from '@react-navigation/native';
import Images from '../../../assets/images';

const DrawerProfile = ({profile}) => {
  return (
    <View style={styles.userInfoSection}>
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <Avatar.Image
          source={
            profile.image ? {uri: profile.image.url} : Images.Images.Avatar
          }
          size={50}
        />
        <View style={{marginLeft: 15, flexDirection: 'column'}}>
          <Title style={styles.title}>
            {profile.first_name + ' ' + profile.last_name}
          </Title>
          <Caption style={styles.caption}>{profile.email}</Caption>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.section}>
          <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
          <Caption style={styles.caption}>Following</Caption>
        </View>
        <View style={styles.section}>
          <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
          <Caption style={styles.caption}>Followers</Caption>
        </View>
      </View>
    </View>
  );
};
export default DrawerProfile;
