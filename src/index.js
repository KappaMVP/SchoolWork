import React from 'react';
import {View, Text} from 'react-native';
import HeaderStyle from './Styles/HeaderStyle';

export default class index extends React.Component {
  constructor() {
    super();
    this.state = {
      a: 'a',
    };
  }
  render() {
    return (
      <View style={HeaderStyle.header}>
        <Text>sdadsad</Text>
      </View>
    );
  }
}
