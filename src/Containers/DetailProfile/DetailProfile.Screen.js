import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import styles from './DetailProfile.Style';
import colors from '../../Themes/Colors';
import {barStyle} from '../../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const DetailProfileScreen = () => {
  const navigation = useNavigation();

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
          {/* <Text style={styles.titleToolbar}>Detail profile</Text> */}
        </View>
        <View style={styles.viewWrapIcRight}>
          <Text style={styles.titleToolbar}>Edit</Text>
        </View>
      </View>
    );
  };

  return (
    <Fragment>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.mainContainer}>
          {renderToolbar()}
          <View style={styles.header} />
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
            }}
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 2</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
export default DetailProfileScreen;
