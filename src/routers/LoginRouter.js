//登入路由
import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import LoginPage from '../Pages/LoginPage';

function LoginRouter() {
  return (
    <Router>
      <Stack key="root">
        <Scene key="LoginPage" component={LoginPage} />
      </Stack>
    </Router>
  );
}

export default LoginRouter;
