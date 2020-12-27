//通知頁
import React from 'react';
import {View, Text} from 'react-native';
import NotifyView from '../Views/NotifyView';
import {notifyPageData as pageData} from '../data.source';

class NotifyPage extends React.Component {
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
        <Text> NotifyPage </Text>
      </View>
    );
  }
}

export default NotifyPage;
