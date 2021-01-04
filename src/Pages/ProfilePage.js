import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
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
      Profile: [
        {
          id: 1999,
          name: 'Jacky  - photography',
          content: 'Your Instagram Top Nine is ready!',
          fans: '350粉絲',
          follow: '480追蹤者',
          post: '19篇貼文',
          url:
            'https://live.staticflickr.com/65535/50025256748_e67b905aa3_b.jpg',
        },
        {
          id: 2000,
          name: 'Jacky',
          content: 'Your Instagram Top Nine is ready!',
          fans: '350',
          follow: '480',
          post: '19',
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

  render() {
    const unlikePosts = this.state.Posts.filter((Post) => Post.like === '1');
    const likePosts = this.state.Posts.filter((Post) => Post.like === '2');
    const verylikePosts = this.state.Posts.filter((Post) => Post.like === '3');

    return (
      <View style={Styles.page}>
        <View style={Styles.List}>
          <Text style={styles.post}>{this.state.Profile[0].post}</Text>
          <Text style={styles.fans}>{this.state.Profile[0].fans}</Text>
          <Text style={styles.follow}>{this.state.Profile[0].follow}</Text>
        </View>

        <View style={Styles.List}>
          <Image
            style={styles.image1}
            source={{uri: this.state.Profile[0].url}}
          />
        </View>

        <View style={{flexDirection: 'column'}}>
          <Text style={styles.id}>{this.state.Profile[0].id}</Text>
          <Text style={styles.name}>{this.state.Profile[0].name}</Text>
          <Text style={styles.Postcontent}>
            {this.state.Profile[0].content}
          </Text>
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
  imagenew: {
    width: 500,
    height: 275,
  },
  new: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingVertical: 3, // 文字上下留白
  },
  new1: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingVertical: 3, // 文字上下留白
  },
  new2: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingVertical: 3, // 文字上下留白
  },

  new3: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F00',
  },

  List: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  id: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 2, // 文字上下留白
    marginLeft: 10,
  },
  PostItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  image: {
    width: 410,
    height: 275,
  },
  image1: {
    flexDirection: 'row',
    width: 100,
    height: 100,
    paddingVertical: 50, // 文字上下留白
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
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingVertical: 2, // 文字上下留白
    marginLeft: 10,
  },
  follow: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  fans: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  post: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 3, // 文字上下留白
    marginLeft: 10,
  },
});

export default ProfilePage;
