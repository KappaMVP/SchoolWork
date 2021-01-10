import {StyleSheet, Dimensions} from 'react-native';
const wid = Dimensions.get('window').width * 0.33333333333333333333333333;

export default StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: wid,
    height: wid,
  },
  squareContainer: {
    margin: 1,
    flex: 0.33333333333333333333333333,
    flexDirection: 'row',
  },
});
