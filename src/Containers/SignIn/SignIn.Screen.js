import React, { useState, useRef, useEffect } from 'react';
import { Text, View, KeyboardAvoidingView, Button, ImageBackground, LayoutAnimation, TouchableOpacity } from 'react-native';
import styles from './SignIn.Style';
import { useNavigation } from '@react-navigation/native';
import { Input, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import Image from '../../../assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { signInRequest } from './SignIn.Action';
import AsyncStorage from '@react-native-community/async-storage';

const TabSelector = ({ selected }) => {
  return (
    <View style={styles.selectorContainer}>
      <View style={selected && styles.selected} />
    </View>
  );
};

TabSelector.propTypes = {
  selected: PropTypes.bool.isRequired
};
const SignInScreen = () => {
  const signIn = useSelector(state => state.signIn);
  const dispatch = useDispatch();

  let [isLoading, setIsLoading] = useState(false);
  let [selectedCategory, setSelectedCategory] = useState(false);
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [passwordConfirmation, setPasswordConfirmation] = useState('');
  let [isEmailValid, setIsEmailValid] = useState(true);
  let [isPasswordValid, setIsPasswordValid] = useState(true);
  let [isConfirmationValid, setIsConfirmationValid] = useState(true);

  let passwordInput = useRef('');
  let emailInput = useRef('');
  let confirmationInput = useRef('');

  const isLoginPage = selectedCategory === 0;
  const isSignUpPage = selectedCategory === 1;
  const navigation = useNavigation();

  const validateEmail = text => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(text);
  };

  const selectCategory = selecteCategory => {
    LayoutAnimation.easeInEaseOut();
    setSelectedCategory(selecteCategory);
    setIsLoading(false);
  };

  useEffect(() => {
    if (signIn.data !== null && signIn.data.token) {
      AsyncStorage.setItem('token', signIn.data.token);
      navigation.navigate('Drawer', {});
    }
  }, [signIn, navigation]);

  useEffect(() => {}, []);

  const _onPressSignIn = () => {
    setIsLoading(true);
    // Simulate an API call
    dispatch(signInRequest({ email: email, password: password }));
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      setIsLoading(false);
      setIsEmailValid(validateEmail(email));
      setIsPasswordValid(password.length >= 6);
    }, 1500);
  };
  const _onPressSignUp = () => {
    setIsLoading(true);
    // Simulate an API call
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      setIsLoading(false);
      setIsEmailValid(validateEmail(email) || emailInput.shake());
      setIsPasswordValid(password.length >= 6);
      setIsConfirmationValid(password === passwordConfirmation || confirmationInput.shake());
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Image.Images.BG_AUTH} style={styles.bgImage}>
        <View>
          <KeyboardAvoidingView contentContainerStyle={styles.loginContainer} behavior="position">
            <View style={styles.titleContainer}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.titleText}>REACT</Text>
              </View>
              <View style={{ marginTop: -10, marginLeft: 10 }}>
                <Text style={styles.titleText}>NATIVE</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button
                disabled={isLoading}
                type="clear"
                activeOpacity={0.7}
                onPress={() => selectCategory(0)}
                containerStyle={{ flex: 1 }}
                titleStyle={[styles.categoryText, isLoginPage && styles.selectedCategoryText]}
                title={'Login'}
              />
              <Button
                disabled={isLoading}
                type="clear"
                activeOpacity={0.7}
                onPress={() => selectCategory(1)}
                containerStyle={{ flex: 1 }}
                titleStyle={[styles.categoryText, isSignUpPage && styles.selectedCategoryText]}
                title={'Sign up'}
              />
            </View>
            <View style={styles.rowSelector}>
              <TabSelector selected={isLoginPage} />
              <TabSelector selected={isSignUpPage} />
            </View>
            <View style={styles.formContainer}>
              <Input
                leftIcon={
                  <Icon name="envelope-o" type="font-awesome" color="rgba(0, 0, 0, 0.38)" size={25} style={{ backgroundColor: 'transparent' }} />
                }
                value={email}
                keyboardAppearance="light"
                autoFocus={false}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                inputStyle={{ marginLeft: 10 }}
                placeholder={'Email'}
                containerStyle={{
                  borderBottomColor: 'rgba(0, 0, 0, 0.38)'
                }}
                ref={input => (emailInput = input)}
                onSubmitEditing={() => passwordInput.focus()}
                onChangeText={text => setEmail(text)}
                errorMessage={isEmailValid ? null : 'Please enter a valid email address'}
              />
              <Input
                leftIcon={
                  <Icon name="lock" type="simple-line-icon" color="rgba(0, 0, 0, 0.38)" size={25} style={{ backgroundColor: 'transparent' }} />
                }
                value={password}
                keyboardAppearance="light"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                returnKeyType={isSignUpPage ? 'next' : 'done'}
                blurOnSubmit={true}
                containerStyle={{
                  marginTop: 16,
                  borderBottomColor: 'rgba(0, 0, 0, 0.38)'
                }}
                inputStyle={{ marginLeft: 10 }}
                placeholder={'Password'}
                ref={input => (passwordInput = input)}
                onSubmitEditing={() => (isSignUpPage ? confirmationInput.focus() : _onPressSignIn)}
                onChangeText={text => setPassword(text)}
                errorMessage={isPasswordValid ? null : 'Please enter at least 8 characters'}
              />
              {isSignUpPage && (
                <Input
                  icon={<Icon name="lock" type="simple-line-icon" color="rgba(0, 0, 0, 0.38)" size={25} style={{ backgroundColor: 'transparent' }} />}
                  value={passwordConfirmation}
                  secureTextEntry={true}
                  keyboardAppearance="light"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="default"
                  returnKeyType={'done'}
                  blurOnSubmit={true}
                  containerStyle={{
                    marginTop: 16,
                    borderBottomColor: 'rgba(0, 0, 0, 0.38)'
                  }}
                  inputStyle={{ marginLeft: 10 }}
                  placeholder={'Confirm password'}
                  ref={input => (confirmationInput = input)}
                  onSubmitEditing={_onPressSignUp}
                  onChangeText={text => setPasswordConfirmation(text)}
                  errorMessage={isConfirmationValid ? null : 'Please enter the same password'}
                />
              )}
              <Button
                buttonStyle={styles.loginButton}
                containerStyle={{ marginTop: 32, flex: 0 }}
                activeOpacity={0.8}
                title={!isLoginPage ? 'LOGIN' : 'SIGN UP'}
                onPress={!isLoginPage ? _onPressSignIn : _onPressSignUp}
                titleStyle={styles.loginTextButton}
                loading={isLoading}
                disabled={isLoading}
              />
            </View>
          </KeyboardAvoidingView>
          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Drawer', {})}>
              <Text style={{ color: 'white' }}>{'Need help ?'}</Text>
            </TouchableOpacity>
            {/* <Button
              title={'Need help ?'}
              titleStyle={{color: 'white'}}
              buttonStyle={{backgroundColor: 'transparent'}}
              underlayColor="transparent"
              onPress={() => navigation.navigate('Drawer', {})}
            /> */}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default SignInScreen;
