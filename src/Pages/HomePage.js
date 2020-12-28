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
        name: 'post1',
        content: '55688',
        photo:
          'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
        time: '2020-12-12 12:12:12',
        who_like: ['liker1', 'liker2'],
        label: ['label1', 'label2'],
        model: ['model1', 'model2'],
      },
      {
        name: 'post2',
        content: '55688',
        photo:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhelpx.adobe.com%2Fstock%2Fhow-to%2Fvisual-reverse-image-search.html&psig=AOvVaw0ijNuHR8WCkxK9RTdHbGeO&ust=1609132842162000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj3rY617e0CFQAAAAAdAAAAABAJ',
        time: '2020-12-12 12:12:12',
        who_like: ['liker1', 'liker2'],
        label: ['label1', 'label2'],
        model: ['model1', 'model2'],
      },
      {
        name: 'post2',
        content: '55688',
        photo:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nbcnews.com%2Fnews%2Fworld%2Fstalking-suspect-allegedly-studied-pop-idol-s-pupil-images-online-n1064916&psig=AOvVaw0ijNuHR8WCkxK9RTdHbGeO&ust=1609132842162000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj3rY617e0CFQAAAAAdAAAAABAh',
        time: '2020-12-12 12:12:12',
        who_like: ['liker1', 'liker2'],
        label: ['label1', 'label2'],
        model: ['model1', 'model2'],
      },
    ];
    return (
      <View style={Styles.page}>
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
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
