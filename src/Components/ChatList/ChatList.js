import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import ChatItem from './ChatItem';
import _ from 'lodash';

const ChatList = ({ data, loading, page, setPage, totalPage, messages }) => {
  const renderItem = ({ item }) => {
    return <ChatItem item={item} message={message(item)} />;
  };

  const message = (item) => {
    const find = messages.find(m => Object.keys(m)[0] === item.id.toString());
    if (!find) return null;
    return find[item.id.toString()];
  }

  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return <ActivityIndicator size="small" style={{ color: '#000' }} />;
  };

  const handleLoadMore = () => {
    if (!loading) {
      setPage(page + 1);
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.id}`}
      onEndReachedThreshold={0.4}
      ListFooterComponent={totalPage > 0 && page <= totalPage ? renderFooter : null}
      onEndReached={totalPage > 0 && page <= totalPage && handleLoadMore}
    />
  );
};
export default ChatList;
