import React, {useState} from 'react';
import {FlatList, View, RefreshControl, ActivityIndicator} from 'react-native';
import UserItem from './UserItem';

import {users} from '../../../assets/data';

const ActiveList = ({data, loading, page, setPage, fetchData}) => {
  const [refreshing, setRefreshing] = useState(false);
  const renderItem = ({item}) => {
    return <UserItem item={item} />;
  };

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 2,
          width: '100%',
          backgroundColor: '#CED0CE',
        }}
      />
    );
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
    setRefreshing(true)
    fetchData(1);
    setRefreshing(false);
  }

  return (
    <FlatList
      data={data}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      renderItem={renderItem}
      keyExtractor={(item, index) => item.user_id}
      onEndReachedThreshold={0.1}
      // ItemSeparatorComponent={renderSeparator}
      ListFooterComponent={renderFooter}
      onEndReached={handleLoadMore}
    />
  );
};
export default ActiveList;
