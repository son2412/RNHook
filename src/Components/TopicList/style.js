import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  userBar: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  picture: {
    width: Dimensions.get('window').width,
    height: 420,
    // marginVertical: 8
    // borderRadius: 3P
  },
  iconBar: {
    flexDirection: 'row',
    width: '100%'
    // borderColor: 'rgb(233,233,233)',
    // borderTopWidth: StyleSheet.hairlineWidth,
    // borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

export default styles;
