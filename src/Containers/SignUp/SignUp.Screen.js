import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from './SignUp.Style';
import moment from 'moment';

const SignUpScreen = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [birth, setBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);

  const handlePasswordChange = val => setPassword(val);

  const handleConfirmPasswordChange = val => setConfirmPassword(val);

  const updateSecureTextEntry = () => setSecureTextEntry(!secureTextEntry);

  const updateConfirmSecureTextEntry = () =>
    setConfirmSecureTextEntry(!confirmSecureTextEntry);

  const handleConfirmDate = date => {
    setBirth(moment(date).format('YYYY-MM-DD'));
    setShow(false);
  };

  const hideDatePicker = () => {
    setShow(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>FirstName</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your FirstName"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => setFirstName(val)}
            />
            {firstName ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={[styles.text_footer, {marginTop: 15}]}>LastName</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your LastName"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => setLastName(val)}
            />
            {lastName ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={[styles.text_footer, {marginTop: 15}]}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="envelope-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => setEmail(val)}
            />
            {email ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={[styles.text_footer, {marginTop: 15}]}>Phone</Text>
          <View style={styles.action}>
            <FontAwesome name="mobile-phone" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Phone"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => setPhone(val)}
            />
            {phone ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={[styles.text_footer, {marginTop: 15}]}>Birth</Text>
          <View style={styles.action}>
            <FontAwesome name="calendar" color="#05375a" size={20} />
            {Platform.OS === 'ios' ? (
              <TextInput
                placeholder="Your Birth"
                style={styles.textInput}
                autoCapitalize="none"
                onTouchStart={() => setShow(true)}
                editable={false}
                value={birth}
              />
            ) : (
              <TouchableOpacity onPress={() => setShow(true)}>
                <TextInput
                  placeholder="Your Birth"
                  style={styles.textInput}
                  autoCapitalize="none"
                  editable={false}
                  value={birth}
                />
              </TouchableOpacity>
            )}
            {birth ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <DateTimePickerModal
            isVisible={show}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={hideDatePicker}
          />
          <Text style={[styles.text_footer, {marginTop: 15}]}>Gender</Text>
          <View style={styles.action}>
            <FontAwesome name="transgender" color="#05375a" size={20} />
            <View style={styles.view_gender}>
              <TouchableOpacity onPress={() => setGender(1)}>
                <Text style={[styles.element_gender, gender === 1 ? {color: 'green'} : null]}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setGender(2)}>
                <Text style={[styles.element_gender, gender === 2 ? {color: 'green'} : null]}>Female</Text>
              </TouchableOpacity>
            </View>

            {gender ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} style={{marginLeft: '60%'}} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={[styles.text_footer, {marginTop: 10}]}>Password</Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Text style={[styles.text_footer, {marginTop: 10}]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={confirmSecureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={val => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {confirmSecureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Privacy policy
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  borderColor: '#009387',
                  borderWidth: 1,
                  marginTop: 10,
                  backgroundColor: '#009387',
                },
              ]}
              onPress={() => {}}>
              <Text style={[styles.textSign, {color: '#fff'}]}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: '#009387',
                  borderWidth: 1,
                  marginTop: 10,
                },
              ]}>
              <Text style={[styles.textSign, {color: '#009387'}]}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;
