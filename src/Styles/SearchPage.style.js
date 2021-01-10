//搜尋的style
import {StyleSheet, Dimensions} from 'react-native';
import {getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  textStyles: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
  main: {
    flex: 1,
  },
  mainNotice: {
    flex: 0.3,
  },
  noticeContent: {
    flex: 0.7,
  },
  page: {
    height: '100%',
    width: Dimensions.get('window').width,
    marginTop: isIphoneX() ? getStatusBarHeight() + 10 : 5,
  },
  arrow: {
    marginTop: 10,
    marginLeft: 5,
  },
  search: {
    height: 40,
    borderRadius: 10,
    marginTop: 3,
    marginLeft: 10,
    marginBottom: 10,
    width: 320,
    paddingRight: 0,
    borderWidth: 0,
    borderColor: 'black',
    backgroundColor: '#F0F0F0',
  },
  delet: {
    fontSize: 25,
    marginTop: 0,
    marginLeft: 15,
  },
  searchBox: {
    flexDirection: 'row',
  },
});
