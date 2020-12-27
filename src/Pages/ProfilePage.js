//個人檔案
import React from 'react';
import {View, Text} from 'react-native';
import {profilePageData as pageData} from '../data.source';

class ProfilePage extends React.Component {
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
        <Text> ProfilePage </Text>
      </View>
    );
  }
}

export default ProfilePage;
