//設定
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {settingPageData as pageData} from '../data.source';
import Icon from '../Views/Elements/Icon';
import {navToProfileSetting, navToSwitchIdentity} from '../helper/routerAction';
import {logOut} from '../helper/firebaseActions';

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
    // const funcData = [
    //   '',
    //   ,
    //   '',
    //   navToProfileSetting(),
    //   navToSwitchIdentity(),
    //   '',
    //   logOut(),
    // ];
    // const data = pageData.option.map((data, index) => {
    //   return {data, onPress: funcData[index]};
    // });
    return (
      <View style={{height: '100%'}}>
        {pageData.options.map((data) => (
          <View>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => this.onPress(data.id)}>
              <Icon {...data.icon} size={40} />
              <Text style={{fontSize: 20}}>{data.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

export default SettingPage;
