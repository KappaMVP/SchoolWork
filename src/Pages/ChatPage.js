//跟這
import React from 'react';
import {View, Text} from 'react-native';
import {chatPageData as pageData} from '../data.source';

class ChatPage extends React.Component {
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
        <Text> ChatPage </Text>
      </View>
    );
  }
}
export default ChatPage;
