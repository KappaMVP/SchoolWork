//發照片
import React from 'react';
import {View, Text} from 'react-native';
import {postPageData as pageData} from '../data.source';

class PostPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  render() {
    return (
      <View>
        <Text> PostPage </Text>
      </View>
    );
  }
}

export default PostPage;
