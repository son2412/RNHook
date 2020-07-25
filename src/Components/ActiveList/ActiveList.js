import React from 'react';
import {FlatList} from 'react-native';
import UserItem from './UserItem';

import {users} from '../../../assets/data';

const ActiveList = () => {
  const renderItem = ({item}) => {
    return <UserItem item={item} />;
  };

  return (
    <FlatList
      data={users.results}
      renderItem={renderItem}
      keyExtractor={item => item.login.uuid}
    />
  );
};
export default ActiveList;
