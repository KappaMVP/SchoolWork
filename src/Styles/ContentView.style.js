import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    height: 'auto',
    width: Dimensions.get('window').width,
    flex: 1,
    backgroundColor: '#EFEFF1',
  },

  imageView: {
    padding: 10,
    margin: 10,
    height: 300,
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },

  divider: {
    width: '80%',
    borderBottomWidth: 2,
    borderBottomColor: '#DDD',
    alignSelf: 'center',
  },

  posterNameView: {
    marginVertical: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  posterNameText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  posterName: {
    color: '#343a40',
    fontWeight: 'bold',
    fontSize: 20,
  },

  contentView: {
    marginHorizontal: 20,
    justifyContent: 'flex-start',
  },
  content: {
    fontSize: 17,
  },

  labelContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelView: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#ced4da',
  },
  labelText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17,
  },
  label: {
    fontSize: 15,
    color: '#343a40',
  },

  timeView: {
    alignSelf: 'center',
    margin: 10,
  },
  time: {
    color: 'gray',
    fontSize: 15,
  },

  commentView: {
    marginVertical: 10,
  },

  addView: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#DDD',
    flexDirection: 'row',
    width: '90%',
    height: 35,
    justifyContent: 'center',
  },
  addText: {
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
  },
});
