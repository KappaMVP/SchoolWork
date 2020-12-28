//通知的橫列
import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default function NotifyView(props) {
  return (
    <View style={Styles.content}>
      <Image source={{uri: props.fake.userPhoto}} />
      <View>
        <Text style={Styles.name}>{props.fake.userName}</Text>
      </View>
      <Text>{props.fake.status}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  content: {
    flexDirection: 'row', // 每個 TodoItem 區塊透過水平方向排列
    justifyContent: 'space-between', // 區塊貼齊左右兩邊
    alignItems: 'center', // 垂直置中
    marginVertical: 10, // 區塊上下垂直外距大小
    padding: 10, // 區塊四周內距大小
  },
  name: {
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
  },
  subTitle: {
    fontSize: 14, // 子標題文字大小
    color: 'gray', // 子標題文字顏色
  },
});
