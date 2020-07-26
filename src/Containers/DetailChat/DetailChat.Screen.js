import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import styles from './DetailChat.Style';
import colors from '../../Themes/Colors';
import {barStyle} from '../../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppStyles from '../../styles';

const DetailChatScreen = () => {
  const navigation = useNavigation();
  const onPress = () => {};

  const renderToolbar = () => {
    return (
      <View style={styles.toolbar}>
        <StatusBar
          hidden={false}
          backgroundColor={colors.primary}
          barStyle={barStyle.lightContent}
        />
        <TouchableOpacity
          style={styles.viewWrapIcLeft}
          onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons
            name={'arrow-left'}
            size={30}
            color={colors.white}
          />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>
          <Text style={styles.titleToolbar}>Rikky</Text>
        </View>
        <View style={styles.viewWrapIcRight}>
          <TouchableRipple
            onPress={onPress}
            style={styles.icon}
            rippleColor="rgba(0, 0, 0, .32)">
            <Icon size={24} color={AppStyles.colors.accentColor} name="call" />
          </TouchableRipple>
          <TouchableRipple
            onPress={onPress}
            style={styles.icon}
            rippleColor="rgba(0, 0, 0, .32)">
            <Icon
              size={24}
              color={AppStyles.colors.accentColor}
              name="videocam"
            />
          </TouchableRipple>
        </View>
      </View>
    );
  };

  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainContainer}>
          {renderToolbar()}
          <Text style={styles.textContent}>
            Example this is the detail chat screen
          </Text>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
export default DetailChatScreen;
