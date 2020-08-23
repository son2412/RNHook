import React, {Fragment, useEffect, useState} from 'react';
import {View, SafeAreaView, ActivityIndicator} from 'react-native';
import styles from './ListChat.Style';
// import {useNavigation} from '@react-navigation/native';
import ChatList from '../../Components/ChatList/ChatList';
import {useDispatch, useSelector} from 'react-redux';
import {listChatRequest} from './ListChat.Acion';
import {listChatWithRequest} from '../../Redux/Actions/ListChatWith.Action';

const page_size = 20;
const ListChatScreen = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const listGroup = useSelector(state => state.getListGroup.data);
  const fetching = useSelector(state => state.getListGroup.fetching);
  const totalPage = useSelector(state => state.getListGroup.totalPage);
  useEffect(() => {
    dispatch(listChatRequest({page_index: page, page_size}));
    dispatch(listChatWithRequest({}));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        {fetching ? (
          <ActivityIndicator size="small" />
        ) : (
          <View style={styles.mainContainer}>
            <ChatList
              data={listGroup}
              loading={fetching}
              page={page}
              setPage={setPage}
              totalPage={totalPage}
            />
          </View>
        )}
      </SafeAreaView>
    </Fragment>
  );
};
export default ListChatScreen;
