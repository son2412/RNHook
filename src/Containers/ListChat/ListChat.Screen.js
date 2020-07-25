import React, {Fragment} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import styles from './ListChat.Style';
import {useNavigation} from '@react-navigation/native';

const ListChatScreen = () => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainContainer}>
          <Text style={styles.textContent}>Example this is the list chat</Text>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
export default ListChatScreen;
