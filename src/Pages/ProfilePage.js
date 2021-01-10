import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {profilePageData as pageData, iconData} from '../data.source';
import styles from '../Styles/ProfilePage.style';
import PostWall from '../Views/PostWall';
import HeaderBtn from '../Views/HeaderBtn';
import {navToSetting, navToFanFollow} from '../helper/routerAction';
import Avatar from '../Views/Elements/Avatar';

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

        {
          id: 8,
          name: '123',
          content: 120,
          url:
            'https://live.staticflickr.com/65535/49983612971_a103f0385e_b.jpg',
          like: '1',
        },
        {
          id: 9,
          name: '457',
          content: 120,
          url:
            'https://live.staticflickr.com/65535/49983090718_71cfa75cfe_b.jpg',
          like: '2',
        },
        {
          id: 10,
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
      right: () => (
        <HeaderBtn
          data={[{btn: iconData.seetingIcon, onPress: () => navToSetting()}]}
        />
      ),
    });
  }

  fansLike = (data) => {
    Alert.alert('最近貼文進況', '12月25日發過一次文');
  };

  FollowLike = (id) => {
    Alert.alert('最近追蹤者近況', '三天前有五個人追蹤了您');
  };

  PostLike = (id) => {
    Alert.alert('最近貼文進況', '12月25日發過一次文');
  };

  render() {
    const {Profiles} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.content2}>
          <Avatar size={150} source={{uri: this.state.Profiles[0].url}} />
        </View>
        <View style={styles.content3}>
          <TouchableOpacity onPress={() => this.PostLike()}>
            <Text style={styles.post}>{this.state.Profiles[0].post}篇貼文</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.fansLike()}>
            <Text style={styles.fans}>{this.state.Profiles[0].fans}位粉絲</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navToFanFollow({Profiles: Profiles})}>
            <Text style={styles.follow}>
              {this.state.Profiles[0].follow}個追蹤者
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content3}>
          <Text style={styles.name}>{this.state.Profiles[0].name}</Text>
          <Text style={styles.Postcontent}>{this.state.Profiles.content}</Text>
        </View>
        <PostWall Posts={this.state.Posts} />
      </View>
    );
  }
}

export default ProfilePage;
