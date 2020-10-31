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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: 420
    // marginVertical: 8
    // borderRadius: 3P
  },
  iconBar: {
    flexDirection: 'row',
    width: '100%'
    // borderColor: 'rgb(233,233,233)',
    // borderTopWidth: StyleSheet.hairlineWidth,
    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
  paginationStyle: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  paginationText: {
    color: 'white'
  }
});

export default styles;
