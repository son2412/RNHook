import React, { Fragment, useState } from 'react';
import { StatusBar, Text, TouchableOpacity, View, SafeAreaView, Image, TextInput, ScrollView, Platform } from 'react-native';
import styles from './DetailProfile.Style';
import colors from '../../Themes/Colors';
import { barStyle } from '../../const';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Images from '../../../assets/images';
import ImagePicker from 'react-native-image-picker';
import { upload } from '../../Api/uploadApi';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
const DetailProfileScreen = () => {
  const navigation = useNavigation();
  const profile = useSelector(state => state.getMyProfile.data);
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState(profile.first_name);
  const [lastName, setLastName] = useState(profile.last_name);
  const [phone, setPhone] = useState(profile.phone);
  const [email, setEmail] = useState(profile.email);
  const [gender, setGender] = useState(profile.gender);
  const [birth, setBirth] = useState(profile.birth);
  const [avatar, setAvatar] = useState(profile.image ? profile.image.url : '');
  const [uploading, setUploading] = useState(false);

  const handleConfirmDate = date => {
    setBirth(moment(date).format('YYYY-MM-DD'));
    setShow(false);
  };

  const hideDatePicker = () => {
    setShow(false);
  };

  const handleSave = () => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      gender: gender,
      birth: birth
    };
    console.log(data);
    setVisible(false);
  };

  const renderToolbar = () => {
    return (
      <View style={styles.toolbar}>
        <StatusBar hidden={false} backgroundColor={colors.primary} barStyle={barStyle.lightContent} />
        <TouchableOpacity style={styles.viewWrapIcLeft} onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons name={'menu'} size={30} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.viewWrapTitleToolbar}>{/* <Text style={styles.titleToolbar}>Detail profile</Text> */}</View>
        <View style={styles.viewWrapIcRight}>
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text style={styles.titleToolbar}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const uploadAvatar = () => {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const image = { uri: response.uri, type: response.type, name: response.fileName || response.uri.substr(response.uri.lastIndexOf('/') + 1) };
        var fd = new FormData();
        fd.append('files', response);
        console.log(fd);
        upload(fd)
          .then(res => {
            console.log(res);
          })
          .catch(err => console.log(err));
      }
    });
  };

  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.mainContainer}>
          {renderToolbar()}
          <View style={styles.header}>
            <Image style={styles.avatar} source={avatar ? { uri: avatar } : Images.Images.Avatar} />
            {visible ? (
              <View style={styles.wrapCamera}>
                <MaterialCommunityIcons name={'camera-enhance-outline'} size={20} color={colors.black} onPress={uploadAvatar} />
              </View>
            ) : null}
          </View>
          <View style={styles.footer}>
            <ScrollView>
              <Text style={styles.text_footer}>FirstName</Text>
              <View style={styles.action}>
                <FontAwesome name="user-o" color="#05375a" size={20} />
                <TextInput
                  defaultValue={firstName}
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={val => setFirstName(val)}
                  editable={visible}
                />
              </View>
              <Text style={[styles.text_footer, { marginTop: 15 }]}>LastName</Text>
              <View style={styles.action}>
                <FontAwesome name="user-o" color="#05375a" size={20} />
                <TextInput
                  defaultValue={lastName}
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={val => setLastName(val)}
                  editable={visible}
                />
              </View>
              <Text style={[styles.text_footer, { marginTop: 15 }]}>Email</Text>
              <View style={styles.action}>
                <FontAwesome name="envelope-o" color="#05375a" size={20} />
                <TextInput
                  defaultValue={email}
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={val => setEmail(val)}
                  editable={visible}
                />
              </View>
              <Text style={[styles.text_footer, { marginTop: 15 }]}>Phone</Text>
              <View style={styles.action}>
                <FontAwesome name="mobile-phone" color="#05375a" size={20} />
                <TextInput
                  defaultValue={phone}
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={val => setPhone(val)}
                  editable={visible}
                />
              </View>
              <Text style={[styles.text_footer, { marginTop: 15 }]}>Birth</Text>
              <View style={styles.action}>
                <FontAwesome name="calendar" color="#05375a" size={20} />
                {Platform.OS === 'ios' ? (
                  <TextInput
                    defaultValue={birth}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onTouchStart={() => (visible ? setShow(true) : setShow(false))}
                    editable={false}
                  />
                ) : (
                  <TouchableOpacity disabled={!visible} onPress={() => setShow(true)}>
                    <TextInput defaultValue={birth} style={styles.textInput} autoCapitalize="none" editable={false} />
                  </TouchableOpacity>
                )}
              </View>
              <DateTimePickerModal
                date={new Date(birth)}
                isVisible={show && visible ? true : false}
                mode="date"
                onConfirm={handleConfirmDate}
                onCancel={hideDatePicker}
              />
              <Text style={[styles.text_footer, { marginTop: 15 }]}>Gender</Text>
              <View style={styles.action}>
                <FontAwesome name="transgender" color="#05375a" size={20} />
                <View style={styles.view_gender}>
                  <TouchableOpacity disabled={!visible} onPress={() => setGender(1)}>
                    <Text style={[styles.element_gender, gender === 1 && { color: 'green' }]}>Male</Text>
                  </TouchableOpacity>
                  <TouchableOpacity disabled={!visible} onPress={() => setGender(2)}>
                    <Text style={[styles.element_gender, gender === 2 && { color: 'green' }]}>Female</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.bodyContent}>
                <TouchableOpacity disabled={!visible} style={styles.buttonContainer} onPress={handleSave}>
                  <Text>Save</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          {/* </Animatable.View> */}
        </View>
      </SafeAreaView>
    </Fragment>
  );
};
export default DetailProfileScreen;
