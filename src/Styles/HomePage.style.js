//整個頁面的css
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  page: {
    height: '100%',
    width: Dimensions.get('window').width,
  },
  slide: {
    backgroundColor: '#dee2e6',
    padding: 15,
    width: Dimensions.get('window').width,
  },
});
