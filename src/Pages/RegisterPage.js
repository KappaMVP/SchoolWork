import React from 'react';
import {View, Text} from 'react-native';
import {registerPageData as pageData} from '../data.source';

export default class RegisterPage extends React.Component {
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
        <Text>RegisterPage</Text>
      </View>
    );
  }
}
