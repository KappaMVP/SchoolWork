//登入路由
import React from 'react';
import {View} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import LoginPage from '../Pages/LoginPage';
import Styles from '../Styles/LoginRouter.style';

function LoginRouter() {
  return (
    <View style={Styles.page}>
      <Router>
        <Stack key="root" hideNavBar>
          <Scene key="LoginPage" component={LoginPage} />
        </Stack>
      </Router>
    </View>
  );
}

export default LoginRouter;
