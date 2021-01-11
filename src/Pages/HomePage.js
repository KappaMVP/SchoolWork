//主頁
import React from 'react';
import {View} from 'react-native';
import {homePageData as pageData, iconData} from '../data.source';
import PostCard from '../Views/PostCard';
import Carousel from 'react-native-snap-carousel';
import Styles from '../Styles/HomePage.style';
import HeaderBtn from '../Views/HeaderBtn';
import {navToSearch, navToChat} from '../helper/routerAction';
import {getPostList} from '../helper/firebaseActions';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          comment: [],
          content: '',
          keep: 0,
          label: [],
          location: [],
          model: [],
          photo: '',
          time: '',
        },
      ],
    };
  }

  componentDidMount() {
    this.loadData();
    const data = [
      {
        btn: iconData.search,
        onPress: () => navToSearch(),
      },
      {
        btn: iconData.chat,
        onPress: () => navToChat(),
      },
    ];
    this.props.navigation.setParams({
      title: pageData.title,
      right: () => <HeaderBtn data={data} />,
    });
  }

  loadData = async () => {
    const postList = await getPostList();
    let data = [];
    Object.keys(postList[0]).map((id) =>
      data.push({...postList[0][id], postID: id}),
    );

    this.setState({data: data});
  };

  render() {
    const fakedata = [
      {
        postername: 'mei.qq',
        content:
          '我是一個好可愛的人！我是一個好可愛的人！我是一個好可愛的人！我是一個好可愛的人！我是一個好可愛的人！我是一個好可愛的人！我是一個好可愛的人！我是一個好可愛的人！我是一個好可愛的人！我是一個好可愛的人！我是一個好可愛的人！我是一個好可愛的人！',
        photo:
          'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
        time: '2020-12-12 12:12',
        label: ['Canon2D', '18-55mmf2'],
        model: ['kappa_map'],
        location: ['高雄'],
      },
      {
        postername: 'post2',
        content: '55688',
        photo:
          'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
        time: '2020-12-12 12:12',
        label: ['label1', 'label2'],
        model: ['model1', 'model2'],
        location: ['高雄'],
      },
      {
        postername: 'post2',
        content: '55688',
        photo:
          'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
        time: '2020-12-12 12:12',
        label: ['label1', 'label2'],
        model: ['model1', 'model2'],
        location: ['高雄'],
      },
    ];
    return (
      <View style={Styles.page}>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          layout={'tinder'}
          data={this.state.data}
          renderItem={(props) => <PostCard {...props} />}
          sliderWidth={Styles.slide.width}
          itemWidth={Styles.slide.width}
          slideStyle={Styles.slide}
        />
      </View>
    );
  }
}

export default HomePage;
