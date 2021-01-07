import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {profilePageData as pageData} from '../data.source';
import Styles from '../Styles/ProfilePage.style';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Posts: [
        {
          id: 1,
          name: '吳天天',
          content: 350,
          url:
            'https://live.staticflickr.com/65535/49983611666_f329a3c368_b.jpg',
          like: '1',
        },
        {
          id: 2,
          name: '張和合',
          content: 280,
          url:
            'https://live.staticflickr.com/65535/49997526092_91d7cf0963_b.jpg',
          like: '3',
        },
        {
          id: 3,
          name: '陳踢踢',
          content: 180,
          url:
            'https://live.staticflickr.com/65535/49983091473_e09c8bb326_b.jpg',
          like: '2',
        },
        {
          id: 4,
          name: '王呵呵',
          content: 120,
          url: 'https://i.imgur.com/Yg1t5sW.jpg',
        },
        {
          id: 5,
          name: '123',
          content: 120,
          url:
            'https://live.staticflickr.com/65535/49983613426_29e5108012_b.jpg',
          like: '1',
        },
        {
          id: 6,
          name: '457',
          content: 120,
          url:
            'https://live.staticflickr.com/65535/49983090718_71cfa75cfe_b.jpg',
          like: '2',
        },
        {
          id: 7,
          name: '789',
          content: 120,
          url:
            'https://live.staticflickr.com/65535/49983612971_a103f0385e_b.jpg',
          like: '3',
        },
      ],
      Profiles: [
        {
          id: 1999,
          name: 'Jacky  - photography',
          content: 'Your Instagram Top Nine is ready!',
          fans: 350,
          follow: 480,
          post: 19,
          url:
            'https://live.staticflickr.com/65535/50025256748_e67b905aa3_b.jpg',
        },
      ],
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  fansLike = (id) => {
    const newProfile = this.state.Profiles.map((Profile) => {
      return Profile.id === id
        ? {...Profile, fans: Profile.fans + 1}
        : {...Profile};
    });
    alert('兩分鐘前有人追蹤了你');
    this.setState({
      Profiles: newProfile,
    });
  };

  FollowLike = (id) => {
    const newProfile = this.state.Profiles.map((Profile) => {
      return Profile.id === id
        ? {...Profile, Follow: Profile.Follow + 1}
        : {...Profile};
    });
    alert('你在昨天追蹤了三個人');
    this.setState({
      Profiles: newProfile,
    });
  };

  PostLike = (id) => {
    const newProfile = this.state.Profiles.map((Profile) => {
      return Profile.id === id
        ? {...Profile, Post: Profile.Post + 1}
        : {...Profile};
    });
    alert('12月25日發過一次文');
    this.setState({
      Profiles: newProfile,
    });
  };

  render() {
    const unlikePosts = this.state.Posts.filter((Post) => Post.like === '1');
    const likePosts = this.state.Posts.filter((Post) => Post.like === '2');
    const verylikePosts = this.state.Posts.filter((Post) => Post.like === '3');

    return (
      <View style={Styles.page}>
        <View style={styles.content2}>
          <Image
            style={styles.image1}
            source={{uri: this.state.Profiles[0].url}}
          />
        </View>
        <View style={styles.content3}>
          <TouchableOpacity onPress={() => this.PostLike(id)}>
            <Text style={styles.post}>{this.state.Profiles[0].post}篇貼文</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.fansLike(id)}>
            <Text style={styles.fans}>{this.state.Profiles[0].fans}位粉絲</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.FollowLike(id)}>
            <Text style={styles.follow}>
              {this.state.Profiles[0].follow}個追蹤者
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content3}>
          <Text style={styles.name}>{this.state.Profiles[0].name}</Text>
          <Text style={styles.Postcontent}>{this.state.Profiles.content}</Text>
        </View>

        <ScrollableTabView>
          <ScrollView tabLabel="發布貼文">
            {unlikePosts.map((Post) => (
              <PostItem key={Post.id} Post={Post} />
            ))}
          </ScrollView>
          <ScrollView tabLabel="收藏貼文">
            {likePosts.map((Post) => (
              <PostItem key={Post.id} Post={Post} />
            ))}
          </ScrollView>
          <ScrollView tabLabel="標記貼文">
            {verylikePosts.map((Post) => (
              <PostItem key={Post.id} Post={Post} />
            ))}
          </ScrollView>
        </ScrollableTabView>
      </View>
    );
  }
}

function PostItem(props) {
  return (
    <View style={styles.PostItem}>
      <Image style={styles.image} source={{uri: props.Post.url}} />
      <View style={styles.PostContent}>
        <Text style={styles.name}>{props.Post.name}</Text>
        <Text style={styles.Postcontent}>{props.Post.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  List: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  id: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  PostItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    paddingTop: 10,
  },
  image: {
    width: 410,
    height: 275,
  },
  image1: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
    height: 150,
  },
  content2: {
    flex: 0.6,
    alignItems: 'center',
  },
  content3: {
    flex: 0.3,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  PostContent: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F00',
  },
  Postcontent: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F00',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
  },
  follow: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 25, // 文字上下留白
  },
  fans: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    paddingVertical: 25, // 文字上下留白
  },
  post: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 25, // 文字上下留白
    marginLeft: 10,
  },
});

export default ProfilePage;
