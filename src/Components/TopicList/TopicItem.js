import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Avatar from '../Avatar/Avatar';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TopicItem = ({ item }) => {
  return (
    <View style={{ marginVertical: 3, marginBottom: 10 }}>
      <View style={styles.userBar}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar uri={item.userAvatar} enableDot />
          <Text style={{ marginLeft: 10, fontSize: 16 }}>{item.userName}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => console.log('action')}>
            <Text style={{ fontSize: 30 }}>...</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={{ marginStart: 10, marginVertical: 10, fontSize: 16 }}>{item.title}</Text>
        <Image style={styles.picture} source={{ uri: item.userAvatar }} />
        <View style={styles.iconBar}>
          <Icon name="heart-outline" size={30} style={{ marginStart: 10 }} onPress={() => console.log('liked')} />
          <Icon name="chat-outline" size={30} style={{ marginStart: 10 }} onPress={() => console.log('comment')} />
        </View>
        <View style={[styles.iconBar, { alignItems: 'center' }]}>
          <Icon name="heart" size={25} style={{ marginStart: 10 }} />
          <Text style={{ marginStart: 5, marginVertical: 10 }}>{9.172 + ' likes'}</Text>
        </View>
        <Text style={{ marginStart: 15, fontSize: 16 }}>{'See all 300 comment'}</Text>
      </View>
    </View>
  );
};
export default TopicItem;
