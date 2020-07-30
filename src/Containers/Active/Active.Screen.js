import React, {Fragment, useState, useEffect} from 'react';
import {View, SafeAreaView, ActivityIndicator} from 'react-native';
import styles from './Active.Style';
import {useNavigation} from '@react-navigation/native';
import ActiveList from '../../Components/ActiveList/ActiveList';
import {useDispatch, useSelector} from 'react-redux';
import {activeRequest} from './Active.Action';

const ActiveScreen = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const listUserActive = useSelector(state => state.getUserActive.data);
  const fetching = useSelector(state => state.getUserActive.fetching);
  useEffect(() => {
    dispatch(activeRequest({page_index: page}));
  }, [dispatch]);

  const fetchData = page => {
    dispatch(activeRequest({page_index: page}));
  };

  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        {fetching && page === 1 ? (
          <ActivityIndicator size="large" />
        ) : (
          <View style={styles.mainContainer}>
            <ActiveList
              data={listUserActive}
              loading={fetching}
              page={page}
              setPage={setPage}
              fetchData={fetchData}
            />
          </View>
        )}
      </SafeAreaView>
    </Fragment>
  );
};
export default ActiveScreen;