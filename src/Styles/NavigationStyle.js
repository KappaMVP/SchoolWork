//Navigation style
import {StyleSheet} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  totalview: {
    flex: 1,
    backgroundColor: 'transparent',
    marginBottom: getBottomSpace(),
  },
});
