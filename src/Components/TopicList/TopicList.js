import React from 'react';
import { FlatList } from 'react-native';
import TopicItem from './TopicItem';
const data = [
  {
    id: 1,
    userName: 'Ryan',
    userAvatar:
      'https://2.bp.blogspot.com/-fjf5yU5r1Jk/WE1VD1BBKpI/AAAAAAAAjgI/bXwGoigAPJYvScMPtzJtzbOJfoGQO2C_ACEw/s1600/15349541_533868826819201_3350340522319981193_n.jpg',
    title: 'My name is Huong. :)'
  },
  {
    id: 2,
    userName: 'Ryan',
    userAvatar:
      'https://2.bp.blogspot.com/-fjf5yU5r1Jk/WE1VD1BBKpI/AAAAAAAAjgI/bXwGoigAPJYvScMPtzJtzbOJfoGQO2C_ACEw/s1600/15349541_533868826819201_3350340522319981193_n.jpg',
    title: 'My name is Huong. :)'
  }
];
const TopicList = () => {
  const renderItem = ({ item }) => {
    return <TopicItem item={item} />;
  };
  return <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => `${item.id}`} />;
};
export default TopicList;
