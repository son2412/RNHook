import React from 'react';
import { FlatList } from 'react-native';
import TopicItem from './TopicItem';
const data = [
  {
    id: 1,
    userName: 'Ryan',
    title: 'My name is Huong. :)',
    images: [
      {
        url:
          'https://2.bp.blogspot.com/-fjf5yU5r1Jk/WE1VD1BBKpI/AAAAAAAAjgI/bXwGoigAPJYvScMPtzJtzbOJfoGQO2C_ACEw/s1600/15349541_533868826819201_3350340522319981193_n.jpg'
      },
      {
        url:
          'https://zicxaphotos.com/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg'
      }
    ]
  }
];
const TopicList = () => {
  const renderItem = ({ item }) => {
    return <TopicItem item={item} />;
  };
  return <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => `${item.id}`} />;
};
export default TopicList;
