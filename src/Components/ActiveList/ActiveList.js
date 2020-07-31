import React, {useState} from 'react';
import {FlatList, RefreshControl, ActivityIndicator} from 'react-native';
import UserItem from './UserItem';

const ActiveList = ({data, loading, page, setPage, fetchData}) => {
  const [refreshing, setRefreshing] = useState(false);
  const renderItem = ({item}) => {
    return <UserItem item={item} />;
  };

  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator style={{color: '#000'}} />;
  };

  const handleLoadMore = () => {
    if (!loading) {
      setPage(page + 1);
      fetchData(page);
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
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.id}`}
      onEndReachedThreshold={0.1}
      ListFooterComponent={renderFooter}
      onEndReached={handleLoadMore}
    />
  );
};
export default ActiveList;
