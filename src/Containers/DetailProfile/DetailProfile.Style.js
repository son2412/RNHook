import {StyleSheet, Platform} from 'react-native';
import ApplicationStyle from '../../Themes/Application.Style';
import {fontFamily, fontSize} from '../../const';
import colors from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyle,
  textContent: {
    fontFamily: fontFamily.regular,
    color: colors.charcoalGrey,
    fontSize: fontSize.medium,
    marginTop: 10,
    alignSelf: 'center',
  },
  header: {
    backgroundColor: '#fe9c8f',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
  },
  wrapCamera: {
    backgroundColor: 'white',
    borderRadius: 50,
    position: 'absolute',
    left: '60%',
    top: '62%',
    padding: 7,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 16,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    // paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  name: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  body: {
    paddingTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  view_gender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  element_gender: {
    marginLeft: 50,
    fontSize: 16,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
