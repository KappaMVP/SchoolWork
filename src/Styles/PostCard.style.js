//每一個貼文卡的style
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 3,
    maxHeight: '90%',
    borderRadius: 10,
    elevation: 5,
    shadowRadius: 3,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    padding: 20,
    margin: 25,
    backgroundColor: '#f8f9fa',
  },

  cardImage: {
    height: '65%',
    width: '100%',
    marginTop: 13,
    marginBottom: 10,
    // borderWidth: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  image: {
    borderRadius: 5,
    height: '100%',
    width: '100%',
  },

  cardContent: {
    width: 200,
    // borderWidth: 1,
    backgroundColor: 'black',
  },

  cardName: {
    height: '15%',
    paddingVertical: 5,
    paddingHorizontal: 15,
    // borderWidth: 1,
    justifyContent: 'flex-start',
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlignVertical: 'center',
  },

  cardLabel: {
    height: '10%',
    paddingVertical: 2,
    paddingHorizontal: 15,
    flexDirection: 'row',
    // borderWidth: 1,
  },
  textLabel: {
    color: 'gray',
  },

  cardTime: {
    height: '10%',
    alignSelf: 'flex-end',
    paddingHorizontal: 15,
    // borderWidth: 1,
  },
  textTime: {
    color: 'black',
  },
});
