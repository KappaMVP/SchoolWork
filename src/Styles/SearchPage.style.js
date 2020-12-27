//搜尋的style
import {StyleSheet, Dimensions} from 'react-native';
import {getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  page: {
    height: '100%',
    width: Dimensions.get('window').width,
    marginTop: isIphoneX() ? getStatusBarHeight() + 10 : 5,
  },
});
