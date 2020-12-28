//發照片
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import {postPageData as pageData} from '../data.source';
import {launchImageLibrary} from 'react-native-image-picker';
import {navToHomePage} from '../helper/routerAction';

class PostPage extends React.Component {
  constructor() {
    super();
    this.state = {
      content: null,
      label: null,
      local: null,
      url: null,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  handleOpenImageLibrary = () => {
    launchImageLibrary({}, this.handleSelectImage);
  };

  handleSelectImage = (result) => {
    if (!result.didCancel) {
      this.setState({url: result.uri});
    }
  };

  // 變更內文
  handleContent = (text) => {
    this.setState({
      name: text,
    });
  };

  // 變更標籤
  handleLabel = (text) => {
    this.setState({
      price: text,
    });
  };

  // 變更地點
  handleLocal = (text) => {
    this.setState({
      desc: text,
    });
  };

  render() {
    const {content, label, local, url} = this.state;
    return (
      <View>
        <View>
          <TouchableOpacity onPress={this.handleOpenImageLibrary}>
            <View>
              <Text style={{color: '#ffffff', fontWeight: '700', flex: 0.9}}>
                Login
              </Text>
              <Image
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFGuIVc1OPCV-TmLSiDcJf2h_-7Grpdxni1A&usqp=CAU',
                }}
                style={{height: 150, width: 150}}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.item}>
            <Text style={styles.label}>內文：</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>人物：</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>標籤：</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>地點：</Text>
          </View>
          <View>
            <Button title="發佈" onPress={navToHomePage} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {width: 100, height: 100, marginLeft: 15},
  item: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  label: {fontWeight: 'bold'},
});

export default PostPage;
