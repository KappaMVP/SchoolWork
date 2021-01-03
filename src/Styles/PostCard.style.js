//每一個貼文卡的style
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'floralwhite',
  },
  cardImage: {
    flex: 0.8,
    borderWidth: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  cardLike: {
    borderWidth: 1,
    flexDirection: 'row',
  },
  textLike: {},
  cardName: {
    borderWidth: 1,
    justifyContent: 'flex-start',
  },
  textName: {},
  cardContent: {
    borderWidth: 1,
  },
  textContent: {},

  cardLabel: {
    flexDirection: 'row',
    borderWidth: 1,
  },
  textLabel: {
    color: 'gray',
  },
  cardModel: {
    flexDirection: 'row',
    borderWidth: 1,
  },
  textModel: {
    color: 'gray',
  },
  cardTime: {
    borderWidth: 1,
  },
  textTime: {
    color: 'black',
  },
});
