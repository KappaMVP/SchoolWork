//通知頁
import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import NotifyView from '../Views/NotifyView';
import {notifyPageData as pageData} from '../data.source';
class NotifyPage extends React.Component {
  fakes = [
    {
      id: 1,
      userName: '美國隊長',
      status: 'Like your post.',
      time: '2020-12-25 12:20',
    },
    {
      id: 2,
      userName: '奇異博士',
      status: 'Leave a message on your post.',
      time: '2020-12-26 13:20',
    },
    {
      id: 3,
      userName: '蜘蛛人',
      status: 'Tagged you on other people post.',
      time: '2020-12-27 14:20',
    },
    {
      id: 4,
      userName: '黑寡婦',
      status: 'Leave a message on your post.',
      time: '2020-12-28 15:20',
    },
    {
      id: 5,
      userName: '雷神索爾',
      status: 'Like your post.',
      time: '2020-12-29 16:20',
    },
  ];

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  render() {
    return (
      <View style={NPStyles.container}>
        <ScrollView>
          <Text style={NPStyles.title}>本週</Text>
          <View>
            {this.fakes.map((fake) => (
              <NotifyView key={fake.id} fake={fake} />
            ))}
          </View>
          <Text style={NPStyles.title}>本月</Text>
          {this.fakes.map((fake) => (
            <NotifyView key={fake.id} fake={fake} />
          ))}
          <Text style={NPStyles.title}>更早之前</Text>
          {this.fakes.map((fake) => (
            <NotifyView key={fake.id} fake={fake} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const NPStyles = StyleSheet.create({
  container: {
    flex: 1, // 分割畫面區塊
    backgroundColor: '#FFF', // 版面背景顏色
  },
  title: {
    textAlign: 'left', // 標題文字置中
    fontWeight: 'bold',
    fontSize: 20, // 標題文字大小
    padding: 10,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
    paddingVertical: 10,
  },
  todoTitle: {
    color: '#5661EC',
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    padding: 10, // 上下垂直內聚大小
  },
  todoItems: {
    marginHorizontal: 10, // TodoItems 整個區塊的左右外距大小
  },
});

export default NotifyPage;
