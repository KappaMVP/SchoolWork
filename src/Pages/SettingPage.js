//設定
import React from 'react';
import {View} from 'react-native';
import {settingPageData as pageData} from '../data.source';
import {navToProfileSetting, navToSwitchIdentity} from '../helper/routerAction';
import {logOut} from '../helper/firebaseActions';
import SettingOption from '../Views/SettingOption';

class SettingPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  onPress(id) {
    if (id === 1) {
    } else if (id === 2) {
      navToProfileSetting();
    } else if (id === 3) {
      navToSwitchIdentity();
    } else if (id === 4) {
    } else if (id === 5) {
      logOut();
    }
  }

  render() {
    return (
      <View style={{height: '100%'}}>
        {pageData.options.map((data) => (
          <SettingOption
            id={data.id}
            icon={data.icon}
            name={data.name}
            onPress={this.onPress}
          />
        ))}
      </View>
    );
  }
}

export default SettingPage;
