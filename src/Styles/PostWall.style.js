import {StyleSheet, Dimensions} from 'react-native';
const wid = Dimensions.get('window').width * 0.33;

export default StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: wid,
    height: wid,
  },
  PostWall: {
    margin: 1,
    flex: 0.33,
    flexDirection: 'row',
  },
});
