import firebase from 'firebase';
import configs from './config';
export const barStyle = {
  darkContent: 'dark-content',
  lightContent: 'light-content'
};

export const fontSize = { small: 14, medium: 16, large: 18 };

export const fontFamily = {
  bold: 'iCielVAGRoundedNext-Bold',
  regular: 'iCielVAGRoundedNext-Regular',
  medium: 'iCielVAGRoundedNext-Medium',
  light: 'iCielVAGRoundedNext-Light',
  demiBold: 'iCielVAGRoundedNext-DemiBold',
  lightItalic: 'iCielVAGRoundedNext-LightItalic'
};

export const Firebase = firebase.initializeApp(configs.firebase);
