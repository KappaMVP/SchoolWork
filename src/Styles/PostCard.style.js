//每一個貼文卡的style
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'floralwhite',
  },
  cardImage: {
    borderWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cardText: {
    borderWidth: 1,
    justifyContent: 'flex-start',
  },
  image: {
    height: '80%',
    width: '100%',
  },
});
