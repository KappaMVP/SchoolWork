//設定
import ToggleSwitch from 'toggle-switch-react-native'; //你一定會用到的 但不一定是這頁
import React from 'react';
import {View, Text} from 'react-native';
import {settingPageData as pageData} from '../data.source';
import Icon from '../Views/Elements/Icon';

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
      <View style={{height: '100%'}}>
        <Text> Settinge </Text>
        {pageData.options.map((e) => {
          const {icon} = e;
          console.log(icon);
          <Icon {...icon} size={20} />;
        })}
        <Icon {...pageData.options[0].icon} size={20} />
        <Icon {...pageData.options[1].icon} size={20} />
        <Icon {...pageData.options[2].icon} size={20} />
        <Icon {...pageData.options[3].icon} size={20} />
        <Icon {...pageData.options[4].icon} size={20} />
      </View>
    );
  }
}

export default SettingPage;
