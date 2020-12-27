//搜尋
import React from 'react';
import {View, Text} from 'react-native';
import {navToProfile} from '../helper/routerAction';
import SearchView from '../Views/SearchView';
import Styles from '../Styles/SearchPage.style';

class SearchPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={Styles.page}>
        <Text>SearchPage</Text>
      </View>
    );
  }
}

export default SearchPage;
