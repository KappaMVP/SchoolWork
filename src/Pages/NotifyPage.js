//通知頁
import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import NotifyView from '../Views/NotifyView';
import {notifyPageData as pageData} from '../data.source';
class NotifyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fakes: [
        {
          id: 1,
          postId: 2,
          userName: '美國隊長',
          status: 'Like your post.',
          time: '2020-12-25 12:20',
        },
        {
          id: 2,
          postId: 4,
          userName: '奇異博士',
          status: 'Leave a message on your post.',
          time: '2020-12-26 13:20',
        },
        {
          id: 3,
          postId: 1,
          userName: '蜘蛛人',
          status: 'Tagged you on other people post.',
          time: '2020-12-27 14:20',
        },
        {
          id: 4,
          postId: 10,
          userName: '黑寡婦',
          status: 'Leave a message on your post.',
          time: '2020-12-28 15:20',
        },
        {
          id: 5,
          postId: 5,
          userName: '雷神索爾',
          status: 'Like your post.',
          time: '2021-01-01 16:20',
        },
        {
          id: 6,
          postId: 7,
          userName: '喵喵',
          status: 'Like your post.',
          time: '2021-01-02 16:20',
        },
        {
          id: 7,
          postId: 6,
          userName: '汪汪',
          status: 'Like your post.',
          time: '2020-11-11 16:20',
        },
        {
          id: 8,
          postId: 3,
          userName: '啾啾',
          status: 'Like your post.',
          time: '2020-11-30 16:20',
        },
      ],
    };
  }

  //时间转换成刚刚，几分钟前，几小时之前，几天前等，常用于展示记录消息评论时间

  // static dateToMsgTime(dataString) {
  //   const dateTime = DateUtil.parserDateString(dataString);
  //   const now = new Date();
  //   const nowTimeSpan = now.getTime();
  //   const oldTimeSpan = dateTime.getTime();
  //   let result = '';
  //   const milliseconds = nowTimeSpan - oldTimeSpan;
  //   if (milliseconds <= 1000 * 60 * 1) {
  //     result = '刚刚';
  //   } else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
  //     result = `${Math.round(milliseconds / (1000 * 60))}分钟前`;
  //   } else if (
  //     1000 * 60 * 60 * 1 < milliseconds &&
  //     milliseconds <= 1000 * 60 * 60 * 24
  //   ) {
  //     result = `${Math.round(milliseconds / (1000 * 60 * 60))}小时前`;
  //   } else if (
  //     1000 * 60 * 60 * 24 < milliseconds &&
  //     milliseconds <= 1000 * 60 * 60 * 24 * 2
  //   ) {
  //     result = `一天前${dataString.substr(11, 5)}`;
  //   } else if (
  //     1000 * 60 * 60 * 24 * 2 < milliseconds &&
  //     milliseconds <= 1000 * 60 * 60 * 24 * 3
  //   ) {
  //     result = `两天前${dataString.substr(11, 5)}`;
  //   } else {
  //     result = dataString.substr(0, 10);
  //   }
  //   return result;
  // }

  //計算過去了多少天

  //   function howData(mdata){
  //     let d = new Date(mdata);
  //     let reduce = new Date().getTime()-d.getTime()
  //     return reduce/1000/3600/24
  //  }

  //  howData("2019-07-24")

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  selectAvatar = () => {};

  selectPost = () => {};

  render() {
    return (
      <View style={NPStyles.container}>
        <ScrollView style={NPStyles.items}>
          <Text style={NPStyles.title}>本週</Text>
          {this.state.fakes.map((fake) => (
            <NotifyView key={fake.id} fake={fake} />
          ))}
          <Text style={NPStyles.title}>本月</Text>
          {this.state.fakes.map((fake) => (
            <NotifyView key={fake.id} fake={fake} />
          ))}
          <Text style={NPStyles.title}>更早之前</Text>
          {this.state.fakes.map((fake) => (
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

export default NotifyPage;
