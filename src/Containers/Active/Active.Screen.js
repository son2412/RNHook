import React, {Fragment} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import styles from './Active.Style';
import {useNavigation} from '@react-navigation/native';
import ActiveList from '../../Components/ActiveList/ActiveList';

const ActiveScreen = () => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainContainer}>
          <ActiveList />
          {/* <Text style={styles.textContent}>Example this is the list user active</Text> */}
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
export default ActiveScreen;
