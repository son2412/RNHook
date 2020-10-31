import React from 'react';
import { FlatList } from 'react-native';
import TopicItem from './TopicItem';

const TopicList = ({ data }) => {
  const renderItem = ({ item }) => {
    return <TopicItem item={item} />;
  };
  return <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => `${item.id}`} />;
};
export default TopicList;
