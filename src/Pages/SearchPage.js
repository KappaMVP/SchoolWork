//搜尋
import React from 'react';
import {View, Text} from 'react-native';
import {navToProfile} from '../helper/routerAction';
import SearchView from '../Views/SearchView';
import Styles from '../Styles/SearchPage.style';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';

class SearchPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={Styles.page}>
        <Text>這邊是header 要放搜尋欄跟返回紐</Text>
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

export default SearchPage;
