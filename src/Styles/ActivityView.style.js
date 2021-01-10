import {StyleSheet} from 'react-native';

const ActStyles = StyleSheet.create({
  //全部活動頁面

  //頁面
  page: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    backgroundColor: '#E0E0E0',
    textAlign: 'left', // 標題文字置中
    fontWeight: 'bold',
    fontSize: 20, // 標題文字大小
    padding: 10,
  },
  infoTitle: {
    color: 'black',
    backgroundColor: '#E0E0E0',
    textAlign: 'center', // 標題文字置中
    fontWeight: 'bold',
    fontSize: 20, // 標題文字大小
    padding: 10,
  },
  infoContent: {
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center', // 標題文字置中
    fontWeight: 'bold',
    fontSize: 20, // 標題文字大小
    padding: 10,
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
  username: {
    fontSize: 30, // 子標題文字大小
    color: 'black', // 子標題文字顏色
    textAlign: 'left',
    marginTop: 5,
    marginEnd: 5,
  },
  actName: {
    fontSize: 30, // 子標題文字大小
    color: 'black', // 子標題文字顏色
    textAlign: 'left',
    marginTop: 5,
    marginEnd: 5,
  },
  idstyle: {
    fontSize: 18,
    color: '#ADADAD',
  },

  //全部活動副標
  subtitle: {
    fontSize: 18,
    color: '#ADADAD',
    flexDirection: 'row',
  },
  arrow: {flexDirection: 'row'},
  myact: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 30,
  },
  myact2: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 30,
    flexDirection: 'row',
    paddingLeft: 140,
  },
  myact3: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 30,
    flexDirection: 'row',
    paddingLeft: 120,
  },
  inforBox: {
    width: '100%',
    height: 250,
  },
});

export default ActStyles;
