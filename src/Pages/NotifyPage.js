//通知頁
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import NotifyView from '../Views/NotifyView';
import {notifyPageData as pageData} from '../data.source';
class NotifyPage extends React.Component {
  fakes = [
    {
      id: 1,
      userName: '美國隊長',
      userPhoto: 'https://picsum.photos/600/300?random=5',
      status: 'Like your post.',
    },
    {
      id: 2,
      userName: '奇異博士',
      userPhoto: 'https://picsum.photos/600/300?random=21',
      status: 'Leave a message on your post.',
    },
    {
      id: 3,
      userName: '蜘蛛人',
      userPhoto: 'https://picsum.photos/600/300?random=6',
      status: 'Tagged you on other people post.',
    },
    {
      id: 4,
      userName: '黑寡婦',
      userPhoto: 'https://picsum.photos/600/300?random=28',
      status: 'Leave a message on your post.',
    },
    {
      id: 5,
      userName: '雷神索爾',
      userPhoto: 'https://picsum.photos/600/300?random=23',
      status: 'Like your post.',
    },
  ];

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  render() {
    return (
      <View>
        {this.fakes.map(function (fake) {
          return <NotifyView key={fake.id} fake={fake} />;
        })}
      </View>
    );
  }
}

export default NotifyPage;
