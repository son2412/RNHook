import React, {Fragment} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import styles from './Call.Style';
import {useNavigation} from '@react-navigation/native';
import CallList from '../../Components/CallList/CallList';

const CallScreen = () => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainContainer}>
          <CallList />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
export default CallScreen;
