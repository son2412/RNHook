import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 12,
    paddingVertical: 8
  },
  userName: {
    textAlign: 'left',
    paddingLeft: 8,
    fontSize: 15
  },
  wave: {
    width: 28,
    height: 28,
    resizeMode: 'contain'
  },
  lastMessage: {
    textAlign: 'left',
    paddingLeft: 8,
    fontSize: 14,
    color: 'grey'
  }
});

export default styles;
