import React from 'react';
import {FlatList} from 'react-native';
import ChatItem from './ChatItem';

import {users} from '../../../assets/data';

const ChatList = () => {
  const renderItem = ({item}) => {
    return <ChatItem item={item} />;
  };

  return (
    <FlatList
      data={users.results}
      renderItem={renderItem}
      keyExtractor={item => item.login.uuid}
    />
  );
};
export default ChatList;
