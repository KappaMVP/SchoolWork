//設定或設定>修改個人資料
import React from 'react';
import {View, Text} from 'react-native';
import {profileSettingPageData as pageData} from '../data.source';

class ProfileSettingPage extends React.Component {
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
        <Text> ProfileSettingPage </Text>
      </View>
    );
  }
}

export default ProfileSettingPage;
