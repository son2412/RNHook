import React, {Fragment} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './Group.Style';
import {useNavigation} from '@react-navigation/native';
import GroupList from '../../Components/GroupList/GroupList';

const GroupScreen = () => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainContainer}>
          <GroupList />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
export default GroupScreen;
