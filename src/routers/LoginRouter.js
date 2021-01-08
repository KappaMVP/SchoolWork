//登入路由
import React from 'react';
import {View} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import Styles from '../Styles/LoginRouter.style';
import {navPop} from '../helper/routerAction';
import {iconData} from '../data.source';
import HeaderBtn from '../Views/HeaderBtn';

//pages
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

function LoginRouter() {
  return (
    <View style={Styles.page}>
      <Router>
        <Stack
          key="root"
          renderBackButton={() => (
            <HeaderBtn data={[{btn: iconData.back, onPress: () => navPop()}]} />
          )}
          headerLayoutPreset={'center'}>
          <Scene key="LoginPage" component={LoginPage} hideNavBar />
          <Scene key="RegisterPage" component={RegisterPage} />
        </Stack>
      </Router>
    </View>
  );
}

export default LoginRouter;
