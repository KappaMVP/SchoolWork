//設定>切換身份頁
import React from 'react';
import {View, Text} from 'react-native';
import {switchIdentityPageData as pageData} from '../data.source';

class SwitchIdentityPage extends React.Component {
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
        <Text> SwitchIdentityPage </Text>
      </View>
    );
  }
}
export default SwitchIdentityPage;
