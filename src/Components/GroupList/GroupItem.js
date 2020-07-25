import React from 'react';
import {View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import Avatar from '../Avatar/Avatar';
import styles from './styles';

const GroupItem = props => {
  const onPress = () => {
    alert('Pressed');
  };
  const {item} = props;
  return (
    <Card style={styles.card} onPress={onPress}>
      <View style={styles.cardView}>
        <View style={styles.nameView}>
          <Avatar large isGroup />
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.last}>Active {item.last_active}</Text>
        </View>
        <View style={styles.footer}>
          <Text numberOflines={2} style={styles.members}>
            {item.members}
          </Text>
        </View>
      </View>
    </Card>
  );
};
export default GroupItem;
