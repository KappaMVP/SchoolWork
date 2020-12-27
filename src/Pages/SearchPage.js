//搜尋
import React from 'react';
import {View, Text} from 'react-native';
import {navToProfile} from '../helper/routerAction';
import SearchView from '../Views/SearchView';

class SearchPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: '搜尋',
    });
  }

  render() {
    return (
      <View>
        <Text>SearchPage</Text>
      </View>
    );
  }
}

export default SearchPage;
