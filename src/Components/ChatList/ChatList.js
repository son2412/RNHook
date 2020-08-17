import React from 'react';
import {FlatList} from 'react-native';
import ChatItem from './ChatItem';

const ChatList = ({data, loading, page, setPage, fetchData, totalPage}) => {
  const renderItem = ({item}) => {
    return <ChatItem item={item} />;
  };

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator style={{color: '#000'}} />;
  };

  const handleLoadMore = () => {
    if (!loading) {
      setPage(page + 1);
      // fetchData(page);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData(1);
    setRefreshing(false);
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.id}`}
      onEndReachedThreshold={0.4}
      ListFooterComponent={
        totalPage > 0 && page <= totalPage ? renderFooter : null
      }
      onEndReached={totalPage > 0 && page <= totalPage && handleLoadMore}
    />
  );
};
export default ChatList;
