import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import UserItem from './UserItem';

const ActiveList = ({data, loading, page, setPage, totalPage}) => {
  const renderItem = ({item}) => {
    return <UserItem item={item} />;
  };

  const renderFooter = () => {
    if (!loading) {
      return null;
    }
    return <ActivityIndicator style={{color: '#000'}} />;
  };

  const handleLoadMore = () => {
    if (!loading) {
      setPage(page + 1);
    }
  };

  return (
    <FlatList
      data={data}
      // refreshControl={
      //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      // }
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
export default ActiveList;
