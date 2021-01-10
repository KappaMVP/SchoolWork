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
      data: [],
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
    this.setState({data: postList});
  };

  render() {
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
