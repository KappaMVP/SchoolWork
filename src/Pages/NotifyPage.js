import React from 'react';
import {View, Text, ScrollView} from 'react-native';
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
          url:
            'https://live.staticflickr.com/65535/49983612971_a103f0385e_b.jpg',
          userImage: 'https://i.imgur.com/Yg1t5sW.jpg',
          week: 2,
        },
        {
          id: 2,
          postId: 4,
          userName: '奇異博士',
          status: 'Leave a message on your post.',
          time: '2020-12-26 13:20',
          url:
            'https://live.staticflickr.com/65535/49983612971_a103f0385e_b.jpg',
          userImage: 'https://i.imgur.com/Yg1t5sW.jpg',
          week: 2,
        },
        {
          id: 3,
          postId: 1,
          userName: '蜘蛛人',
          status: 'Tagged you on other people post.',
          time: '2020-12-27 14:20',
          url:
            'https://live.staticflickr.com/65535/49983612971_a103f0385e_b.jpg',
          userImage: 'https://i.imgur.com/Yg1t5sW.jpg',
          week: 2,
        },
        {
          id: 4,
          postId: 10,
          userName: '黑寡婦',
          status: 'Leave a message on your post.',
          time: '2020-12-28 15:20',
          url:
            'https://live.staticflickr.com/65535/49983612971_a103f0385e_b.jpg',
          userImage: 'https://i.imgur.com/Yg1t5sW.jpg',
          week: 2,
        },
        {
          id: 5,
          postId: 5,
          userName: '雷神索爾',
          status: 'Like your post.',
          time: '2021-01-01 16:20',
          url:
            'https://live.staticflickr.com/65535/49983612971_a103f0385e_b.jpg',
          userImage: 'https://i.imgur.com/Yg1t5sW.jpg',
          week: 1,
        },
        {
          id: 6,
          postId: 7,
          userName: '喵喵',
          status: 'Like your post.',
          time: '2021-01-02 16:20',
          url:
            'https://live.staticflickr.com/65535/49983612971_a103f0385e_b.jpg',
          userImage: 'https://i.imgur.com/Yg1t5sW.jpg',
          week: 1,
        },
        {
          id: 7,
          postId: 6,
          userName: '汪汪',
          status: 'Like your post.',
          time: '2020-11-11 16:20',
          url:
            'https://live.staticflickr.com/65535/49983612971_a103f0385e_b.jpg',
          userImage: 'https://i.imgur.com/Yg1t5sW.jpg',
          week: 1,
        },
        {
          id: 8,
          postId: 3,
          userName: '啾啾',
          status: 'Like your post.',
          time: '2020-11-30 16:20',
          url:
            'https://live.staticflickr.com/65535/49983612971_a103f0385e_b.jpg',
          userImage: 'https://i.imgur.com/Yg1t5sW.jpg',
          week: 1,
        },
      ],
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  countTime = (time) => {
    console.log(time);
    const sendTime = time;
    const nowTime = new Date().valueOf();
    const space = nowTime - sendTime;

    const days = Math.floor(space / (24 * 3600 * 1000));

    const no1 = space % (24 * 3600 * 1000);
    const hours = Math.floor(no1 / (3600 * 1000));

    const no2 = no1 % (3600 * 1000);
    const min = Math.floor(no2 / (60 * 1000));

    const no3 = no2 % (60 * 1000);
    const sec = Math.floor(no3 / 1000);

    if (days < 0) {
      const myText = days + '天前';
      return <Text>{myText}</Text>;
    }
    if (days === 0 && hours > 0) {
      const myText = hours + '小時前';
      return <Text>{myText}</Text>;
    }
    if (days === 0 && hours === 0 && min > 0) {
      const myText = min + '分前';
      return <Text>{myText}</Text>;
    }
    if (days === 0 && hours === 0 && min === 0 && sec > 0) {
      const myText = sec + '剛剛';
      return <Text>{myText}</Text>;
    }
  };

  selectAvatar = () => {};
  selectPost = () => {};

  render() {
    const week = this.state.fakes.filter((fake) => fake.week === 1);
    const month = this.state.fakes.filter((fake) => fake.week === 2);
    const beforeMonth = this.state.fakes.filter((fake) => fake.week === 3);
    //const beforeMonth = this.state.fakes.filter();

    return (
      <ScrollView style={NPStyles.items}>
        <Text style={NPStyles.title}>本周</Text>
        <NotifyView datas={week} />
        <Text style={NPStyles.title}>本月</Text>
        <NotifyView datas={month} />
        <Text style={NPStyles.title}>更早之前</Text>
        <NotifyView datas={beforeMonth} />
      </ScrollView>
    );
  }
}

export default NotifyPage;
