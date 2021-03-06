import React, { Fragment, useState, useEffect } from 'react';
import { View, SafeAreaView, ActivityIndicator } from 'react-native';
import styles from './Active.Style';
// import {useNavigation} from '@react-navigation/native';
import ActiveList from '../../Components/ActiveList/ActiveList';
import { useDispatch, useSelector } from 'react-redux';
import { activeRequest } from '../../Redux/Actions/Active.Action';

const page_size = 15;
const ActiveScreen = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const listUserActive = useSelector(state => state.getUserActive.data);
  const fetching = useSelector(state => state.getUserActive.fetching);
  const totalPage = useSelector(state => state.getUserActive.totalPage);
  const loadingChat = useSelector(state => state.createChatWith.fetching);
  useEffect(() => {
    dispatch(activeRequest({ page_index: page, page_size }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLoad = page => {
    dispatch(activeRequest({ page_index: page, page_size }));
  };

  const renderLoadingChat = () => {
    if (loadingChat) {
      return (
        <View style={styles.viewLoading}>
          <ActivityIndicator size="small" />
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1 }}>
        {fetching && page === 1 ? (
          <ActivityIndicator size="small" />
        ) : (
          <View style={styles.mainContainer}>
            {loadingChat ? (
              <View style={styles.viewLoading}>
                <ActivityIndicator size="small" />
              </View>
            ) : (
              <ActiveList data={listUserActive} loading={fetching} page={page} setPage={setPage} totalPage={totalPage} loadMore={handleLoad} />
            )}
          </View>
        )}
      </SafeAreaView>
    </Fragment>
  );
};
export default ActiveScreen;
