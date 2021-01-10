import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  //整個框
  item: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },

  //頭貼
  avatar: {
    borderRadius: 40,
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },

  //整個文字框
  textView: {flexDirection: 'column'},

  //主標
  title: {
    fontSize: 20,
    width: 300,
  },

  //副標
  subtitle: {
    fontSize: 18,
    color: '#ADADAD',
  },

  //照片
  photo: {
    borderRadius: 5,
    margin: 10,
    width: 50,
    height: 50,
    position: 'absolute',
    right: 0,
  },
});
