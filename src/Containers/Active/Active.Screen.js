import React, {Fragment, useState, useEffect} from 'react';
import {View, SafeAreaView, ActivityIndicator} from 'react-native';
import styles from './Active.Style';
import {useNavigation} from '@react-navigation/native';
import ActiveList from '../../Components/ActiveList/ActiveList';
import {useDispatch, useSelector} from 'react-redux';
import {activeRequest} from './Active.Action';

const page_size = 15;
const ActiveScreen = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const listUserActive = useSelector(state => state.getUserActive.data);
  const fetching = useSelector(state => state.getUserActive.fetching);
  const totalPage = useSelector(state => state.getUserActive.totalPage);
  useEffect(() => {
    dispatch(activeRequest({page_index: page, page_size}));
  }, [page]);

  useEffect(() => {
    setData([...data, ...listUserActive]);
  }, [listUserActive]);

  const fetchData = page_index => {
    dispatch(activeRequest({page_index: page_index, page_size}));
  };

  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        {fetching && page === 1 ? (
          <ActivityIndicator size="large" />
        ) : (
          <View style={styles.mainContainer}>
            <ActiveList
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
export default ActiveScreen;
