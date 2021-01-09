import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flex: 1,
    borderWidth: 3,
    padding: 10,
  },
  image: {
    height: 300,
    width: '100%',
  },
});
