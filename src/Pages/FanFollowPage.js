//追粉頁
import React from 'react';
import {View, Text} from 'react-native';
import {fanFollowPageData as pageData} from '../data.source';

class FanFollowPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.fanTitle, //這邊要用狀態改
    });
  }

  render() {
    return (
      <View>
        <Text> FanFollowPage </Text>
      </View>
    );
  }
}

export default FanFollowPage;
