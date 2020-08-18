import React, {Fragment, useEffect, useState} from 'react';
import {View, SafeAreaView, ActivityIndicator} from 'react-native';
import styles from './ListChat.Style';
import {useNavigation} from '@react-navigation/native';
import ChatList from '../../Components/ChatList/ChatList';
import {useDispatch, useSelector} from 'react-redux';
import {listChatRequest} from './ListChat.Acion';
import {listChatWithRequest} from '../../Redux/Actions/ListChatWith.Action';

const page_size = 20;
const ListChatScreen = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const listGroup = useSelector(state => state.getListGroup.data);
  const fetching = useSelector(state => state.getListGroup.fetching);
  const totalPage = useSelector(state => state.getListGroup.totalPage);
  useEffect(() => {
    dispatch(listChatRequest({page_index: page, page_size}));
    dispatch(listChatWithRequest({}));
  }, [dispatch]);

  useEffect(() => {
    setData([...data, ...listGroup]);
  }, [listGroup]);

  const fetchData = page_index => {
    dispatch(listChatRequest({page_index: page_index, page_size}));
  };
  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        {fetching ? (
          <ActivityIndicator size="large" />
        ) : (
          <View style={styles.mainContainer}>
            <ChatList
              data={data}
              loading={fetching}
              page={page}
              setPage={setPage}
              fetchData={fetchData}
              totalPage={totalPage}
            />
          </View>
        )}
      </SafeAreaView>
    </Fragment>
  );
};
export default ListChatScreen;
