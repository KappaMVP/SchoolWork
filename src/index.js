//集成
import React from 'react';
import {View} from 'react-native';
import PageStyle from './Styles/PageStyle';
import MainRouter from './routers/MainRouter';

function index() {
  return (
    <View style={PageStyle.page}>
      <MainRouter />
    </View>
  );
}

export default index;
