import React, {Fragment} from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './ListChat.Style';
import {useNavigation} from '@react-navigation/native';
import ChatList from '../../Components/ChatList/ChatList';

const ListChatScreen = () => {
  const navigation = useNavigation();

  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainContainer}>
          <ChatList />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
export default ListChatScreen;
