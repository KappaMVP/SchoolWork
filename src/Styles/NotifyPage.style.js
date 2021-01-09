import {StyleSheet} from 'react-native';

const NPStyles = StyleSheet.create({
  container: {
    flex: 1, // 分割畫面區塊
    backgroundColor: '#FFF', // 版面背景顏色
  },
  title: {
    color: 'black',
    backgroundColor: '#E0E0E0',
    textAlign: 'left', // 標題文字置中
    fontWeight: 'bold',
    fontSize: 20, // 標題文字大小
    padding: 10,
  },
  items: {
    borderBottomWidth: 1,
  },
});

export default NPStyles;
