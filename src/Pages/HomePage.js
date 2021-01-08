//主頁
import React from 'react';
import {View} from 'react-native';
import {homePageData as pageData, iconData} from '../data.source';
import PostCard from '../Views/PostCard';
import Carousel from 'react-native-snap-carousel';
import Styles from '../Styles/HomePage.style';
import HeaderBtn from '../Views/HeaderBtn';
import {navToProfile, navToSearch, navToChat} from '../helper/routerAction';

class HomePage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
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

  render() {
    const fakedata = [
      {
        name: 'mei.qq',
        content: '55688',
        photo:
          'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
        time: '2020-12-12 12:12',
        who_like: ['kappa_map', 'lulusabee'],
        label: ['Canon2D', '18-55mmf2'],
        model: ['kappa_map'],
        location: ['高雄'],
      },
      {
        name: 'post2',
        content: '55688',
        photo: '',
        time: '2020-12-12 12:12',
        who_like: ['liker1', 'liker2'],
        label: ['label1', 'label2'],
        model: ['model1', 'model2'],
        location: ['高雄'],
      },
      {
        name: 'post2',
        content: '55688',
        photo: '',
        time: '2020-12-12 12:12',
        who_like: ['liker1', 'liker2'],
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
          data={fakedata}
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
