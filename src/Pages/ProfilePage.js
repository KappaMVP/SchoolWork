//個人檔案
import React from 'react';
import {View, Text} from 'react-native';
import {profilePageData as pageData} from '../data.source';
import Styles from '../Styles/profilePage.style';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

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
      <View style={Styles.page}>
        <Text>123456789</Text>
        <ScrollableTabView>
          <Text key="page1" title="a">
            page1
          </Text>
          <Text key="page2" title="b">
            page2
          </Text>
          <Text key="page2" title="c">
            page3
          </Text>
        </ScrollableTabView>
      </View>
    );
  }
}

export default ProfilePage;
