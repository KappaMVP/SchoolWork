//集成
import React from 'react';
import {View} from 'react-native';
import PageStyle from './Styles/PageStyle';
import MainRouter from './routers/MainRouter';
import LoginRouter from './routers/LoginRouter';

function index() {
  return (
    <View style={PageStyle.page}>
      {/* <LoginRouter /> */}
      <MainRouter />
    </View>
  );
}

export default index;
