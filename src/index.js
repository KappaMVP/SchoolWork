//集成
import React from 'react';
import {View} from 'react-native';
import Styles from './Styles/Page.style';
import MainRouter from './routers/MainRouter';
import LoginRouter from './routers/LoginRouter';

//隱藏WARN的log
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['']);
//因react-native-scrollable-tab-view 底層引發 getNode 跟 unit key 的警告

function index() {
  return (
    <View style={Styles.page}>
      <LoginRouter />
      {/* <MainRouter /> */}
    </View>
  );
}
export default index;
