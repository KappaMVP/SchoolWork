//設定
import ToggleSwitch from 'toggle-switch-react-native'; //你一定會用到的 但不一定是這頁
import React from 'react';
import {View, Text} from 'react-native';
import {settingPageData as pageData} from '../data.source';

class SettingPage extends React.Component {
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
        <Text> SettingPage </Text>
      </View>
    );
  }
}

export default SettingPage;
