import React, { Fragment, useEffect, useState } from 'react';
import { View, SafeAreaView, ActivityIndicator } from 'react-native';
import styles from './ListChat.Style';
// import {useNavigation} from '@react-navigation/native';
import ChatList from '../../Components/ChatList/ChatList';
import { useDispatch, useSelector } from 'react-redux';
import { listChatRequest } from './ListChat.Acion';
import { listChatWithRequest } from '../../Redux/Actions/ListChatWith.Action';
import { Firebase } from '../../const';

const page_size = 20;
const ListChatScreen = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(1);
  const [messages, setMessages] = useState(1);
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const listGroup = useSelector(state => state.getListGroup.data);
  const fetching = useSelector(state => state.getListGroup.fetching);
  const totalPage = useSelector(state => state.getListGroup.totalPage);
  useEffect(() => {
    dispatch(listChatRequest({ page_index: page, page_size }));
    dispatch(listChatWithRequest({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLoading(true);
    let arrMessage = [];
    listGroup.map(group => {
      Firebase.ref('chats/' + group.id).on('value', snap => {
        let items = [];
        let item = {};
        snap.forEach(child => {
          const childItem = child.val();
          const user = group.users.find(x => childItem.sender_id === x.id);
          item = {
            _id: childItem.id,
            text: childItem.message,
            createdAt: childItem.created_at || new Date(),
            user: {
              _id: user.id,
              name: user.first_name + ' ' + user.last_name,
              avatar: user.image ? user.image.url : null
            }
          };
          items.push(item);
        });
        arrMessage.push({ [group.id]: items.sort((a, b) => b._id - a._id) });
        setLoading(false);
      });
    });
    setMessages(arrMessage);
  }, [listGroup]);

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1 }}>
        {fetching || loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <View style={styles.mainContainer}>
            <ChatList data={listGroup} loading={fetching} page={page} setPage={setPage} totalPage={totalPage} messages={messages} />
          </View>
        )}
      </SafeAreaView>
    </Fragment>
  );
};
export default ListChatScreen;
