import {StyleSheet} from 'react-native';

const NVStyles = StyleSheet.create({
  zone: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingLeft: 5, // 區塊四周內距大小
    paddingRight: 5,
    paddingTop: 2,
    paddingEnd: 2,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
  },
  littleCon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  userImage: {
    borderRadius: 5,
    margin: 10,
    flexDirection: 'row',
    width: 40,
    height: 40,
    backgroundColor: 'gray',
  },
  postImage: {
    borderRadius: 7,
    margin: 5,
    flexDirection: 'row',
    width: 60,
    height: 60,
    backgroundColor: 'gray',
  },
  name: {
    fontSize: 18, // 標題文字大小
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 5,
  },
  status: {
    fontSize: 18, // 子標題文字大小
    color: 'black', // 子標題文字顏色
    textAlign: 'left',
    marginTop: 5,
    marginEnd: 5,
  },
  time: {
    fontSize: 18,
    color: '#ADADAD',
  },
});

export default NVStyles;
