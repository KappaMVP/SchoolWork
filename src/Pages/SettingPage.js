//設定
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {settingPageData as pageData} from '../data.source';
import Icon from '../Views/Elements/Icon';
import {TouchableOpacity} from 'react-native-gesture-handler';

class SettingPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }
  onPress(id) {}

  render() {
    return (
      <View style={{height: '100%'}}>
        {pageData.options.map((e) => (
          <View>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Icon {...e.icon} size={40} />
              <Text style={{fontSize: 20}}>{e.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  }
}

export default SettingPage;
