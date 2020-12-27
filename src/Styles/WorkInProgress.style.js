//Work in progress style
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: Dimensions.get('window').height * 0.5,
    width: Dimensions.get('window').width * 0.6,
  },
});
