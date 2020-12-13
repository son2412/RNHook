import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'react-native-paper';
import { signInRequest } from './SignIn.Action';
import AsyncStorage from '@react-native-community/async-storage';
import { checkSignIn } from '../../actions';
import styles from './Login.Style';
import Toast from 'react-native-simple-toast';

const SignInScreen = () => {
  const validateEmail = text => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(text);
  };
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true
  });
  const signIn = useSelector(state => state.signIn.data);
  const signInError = useSelector(state => state.signIn.err);
  const fetching = useSelector(state => state.signIn.fetching);
  const { colors } = useTheme();

  useEffect(() => {
    if (signIn && signIn.success) {
      AsyncStorage.setItem('token', signIn.data.token);
      dispatch(checkSignIn(signIn.data.token));
    }
    if (signInError && !signInError.success) {
      Toast.show(signInError.message);
      // Alert.alert('Error !', signInError.message, [{ text: 'Okay' }]);
      return;
    }
  }, [signIn, signInError, navigation, dispatch]);

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 6) {
      setData({ ...data, password: val, isValidPassword: true });
    } else {
      setData({ ...data, password: val, isValidPassword: false });
    }
  };

  const updateSecureTextEntry = () => setData({ ...data, secureTextEntry: !data.secureTextEntry });

  const handleValidEmail = val => {
    if (validateEmail(val)) {
      setData({ ...data, isValidUser: true });
    } else {
      setData({ ...data, isValidUser: false });
    }
  };

  const loginHandle = (email, password) => {
    if (data.email.length === 0 || data.password.length === 0) {
      // Toast.show('Wrong Input! Email or password field cannot be empty.');
      Alert.alert('Wrong Input!', 'Email or password field cannot be empty.', [{ text: 'Okay' }]);
      return;
    }
    dispatch(signInRequest({ email: email, password: password }));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome!</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Animatable.View animation="fadeInUpBig" style={[styles.footer, { backgroundColor: colors.background }]}>
          <Text style={[styles.text_footer, { color: colors.text }]}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              placeholder="Your Email"
              placeholderTextColor="#666666"
              style={[styles.textInput, { color: colors.text }]}
              autoCapitalize="none"
              onChangeText={val => textInputChange(val)}
              onEndEditing={e => handleValidEmail(e.nativeEvent.text)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Email invalid.</Text>
            </Animatable.View>
          )}

          <Text style={[styles.text_footer, { color: colors.text, marginTop: 15 }]}>Password</Text>
          <View style={styles.action}>
            <Feather name="lock" color={colors.text} size={20} />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#666666"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={[styles.textInput, { color: colors.text }]}
              autoCapitalize="none"
              onChangeText={val => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? <Feather name="eye-off" color="grey" size={20} /> : <Feather name="eye" color="grey" size={20} />}
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>Password must be 6 characters long.</Text>
            </Animatable.View>
          )}

          <TouchableOpacity>
            <Text style={{ color: '#009387', marginTop: 15 }}>Forgot password?</Text>
          </TouchableOpacity>
          <View style={styles.button}>
            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  borderColor: '#009387',
                  borderWidth: 1,
                  marginTop: 15,
                  backgroundColor: '#009387'
                }
              ]}
              onPress={() => loginHandle(data.email, data.password)}>
              <Text style={[styles.textSign, { color: '#fff' }]}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              style={[
                styles.signIn,
                {
                  borderColor: '#009387',
                  borderWidth: 1,
                  marginTop: 15
                }
              ]}>
              <Text style={[styles.textSign, { color: '#009387' }]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
