import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Avatar from '../Avatar/Avatar';
import styles from './style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import moment from 'moment';

const TopicItem = ({ item }) => {
  const { user, title, images, created_at } = item;
  const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{ color: 'grey' }}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    );
  };
  const calTime = time => {
    const now = moment();
    const date = moment(time);
    if (now.diff(date, 'seconds') < 60) return 'just now';
    if (now.diff(date, 'minutes') < 60) return `${now.diff(date, 'minutes')} minutes ago`;
    if (now.diff(date, 'hours') < 24) return `${now.diff(date, 'hours')} hours ago`;
    if (now.diff(date, 'days') < 31) return `${now.diff(date, 'days')} days ago`;
    if (now.diff(date, 'months') < 12) return `${now.diff(date, 'months')} months ago`;
    return `${now.diff(date, 'years')} years`;
  };
  return (
    <View style={{ marginVertical: 3, marginBottom: 10 }}>
      <View style={styles.userBar}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar uri={item.userAvatar} enableDot />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 16 }}>{user.first_name + ' ' + user.last_name}</Text>
            <Text style={{ fontSize: 14, paddingTop: 4 }}>{calTime(created_at)}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => console.log('action')}>
            <Text style={{ fontSize: 30 }}>...</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {!title ? null : <Text style={{ marginStart: 10, marginVertical: 10, fontSize: 16 }}>{title}</Text>}
        {!images.length ? null : (
          <View style={{ height: 500 }}>
            <Swiper renderPagination={renderPagination}>
              {item.images.map((i, index) => (
                <Image key={index + 1} style={styles.picture} source={{ uri: i.url }} />
              ))}
            </Swiper>
          </View>
        )}

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
