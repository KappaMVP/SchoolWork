//通知的橫列
import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import NVStyles from '../Styles/NotifyView.style';
import ResultRow from '../Views/Elements/ResultRow';

function NotifyView(props) {
  const fakes = props.fakes;
  const fakelist = fakes.map((fake) => {
    fake;
  });
  return (
    <View style={NVStyles.zone}>
      <ScrollView style={NVStyles.items}>{fakelist}</ScrollView>
    </View>
  );
}

export default NotifyView;
