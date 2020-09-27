import React from 'react';
import { ActivityIndicator, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import styles from './Topic.Style';
import colors from '../../Themes/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { barStyle } from '../../const';
import { useDispatch, useSelector } from 'react-redux';
import NoDataView from '../../Components/NoDataView';
import { getTopicRequest } from './Topic.Action';
import { useNavigation } from '@react-navigation/native';
import TopicList from '../../Components/TopicList/TopicList';

const TopicScreen = () => {
  const navigation = useNavigation();
  const topics = useSelector(state => state.getTopic);
  const dispatch = useDispatch();

  const renderToolbar = () => {
    return (
      <View style={styles.toolbar}>
        <StatusBar hidden={false} backgroundColor={colors.primary} barStyle={barStyle.lightContent} />
        <TouchableOpacity style={styles.viewWrapIcLeft} onPress={navigation.openDrawer}>
          <MaterialCommunityIcons name={'menu'} size={30} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>RNHook</Text>
        </View>
        <View style={styles.viewWrap1IcRight}>
          <MaterialCommunityIcons name={'plus'} size={30} color={colors.white} />
        </View>
      </View>
    );
  };

  const renderDataView = () => {
    if (topics.data) {
      return <TopicList />;
    } else if (topics.err) {
      return <NoDataView onRetryPress={getTopics} />;
    } else {
      return null;
    }
  };

  const renderLoading = () => {
    if (topics.fetching) {
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
    <View style={styles.mainContainer}>
      {renderToolbar()}
      {/* <TopicList /> */}
      {renderDataView()}
      {renderLoading()}
    </View>
  );
};
export default TopicScreen;
