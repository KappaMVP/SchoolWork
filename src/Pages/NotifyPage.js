//通知頁
import React from 'react';
import {View} from 'react-native';
import NotifyView from '../Views/NotifyView';
import NPStyles from '../Styles/NotifyPage.style';
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

  countTime = () => {};

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  selectAvatar = () => {};

  selectPost = () => {};

  render() {
    const fakes = this.state;
    return (
      <View>
        <NotifyView />
      </View>
    );
  }
}

export default NotifyPage;
