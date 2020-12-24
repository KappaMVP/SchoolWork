// Header style
import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    height: 60,
    backgroundColor: 'transparent',
    paddingTop: getStatusBarHeight(),
  },
});
