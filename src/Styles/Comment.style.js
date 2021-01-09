import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#DDD',
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
  },

  imageView: {
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  image: {
    borderRadius: 60,
    height: 60,
    width: 60,
    marginHorizontal: 13,
  },

  commentView: {
    marginTop: 8,
  },
  postid: {
    height: 25,
    fontSize: 15,
    fontWeight: 'bold',
  },
  comment: {
    height: 25,
    fontSize: 15,
  },

  timeView: {
    marginBottom: 8,
  },
  time: {
    height: 25,
    fontSize: 15,
    color: '#6c757d',
  },
});
