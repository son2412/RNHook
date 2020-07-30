import React, {Fragment, useEffect} from 'react';
import {View, SafeAreaView, ActivityIndicator} from 'react-native';
import styles from './ListChat.Style';
import {useNavigation} from '@react-navigation/native';
import ChatList from '../../Components/ChatList/ChatList';
import {useDispatch, useSelector} from 'react-redux';
import {listChatRequest} from './ListChat.Acion';

const ListChatScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const listGroup = useSelector(state => state.getListGroup.data);
  const fetching = useSelector(state => state.getListGroup.fetching);
  useEffect(() => {
    dispatch(listChatRequest({}));
  }, [dispatch]);
  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        {fetching ? (
          <ActivityIndicator size="large" />
        ) : (
          <View style={styles.mainContainer}>
            <ChatList />
          </View>
        )}
      </SafeAreaView>
    </Fragment>
  );
};
export default ListChatScreen;
