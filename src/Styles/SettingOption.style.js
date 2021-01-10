import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  View: {
    // marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
  },
  iconView: {
    paddingTop: 5,
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: 5,
    width: 55,
    height: 55,
  },
  lable: {
    alignItems: 'center',
    fontSize: 20,
  },
});
