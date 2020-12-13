import firebase from 'firebase';
import configs from './config';
import moment from 'moment';
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

export const Firebase = firebase.initializeApp(configs.firebase).database();

export const calTime = time => {
  const now = moment();
  const date = moment(time);
  if (now.diff(date, 'seconds') < 60) return 'just now';
  if (now.diff(date, 'minutes') < 60) return `${now.diff(date, 'minutes')} minutes ago`;
  if (now.diff(date, 'hours') < 24) return `${now.diff(date, 'hours')} hours ago`;
  if (now.diff(date, 'days') < 31) return `${now.diff(date, 'days')} days ago`;
  if (now.diff(date, 'months') < 12) return `${now.diff(date, 'months')} months ago`;
  return `${now.diff(date, 'years')} years`;
};
