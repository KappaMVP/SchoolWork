//集成
import React from 'react';
import {View} from 'react-native';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import NotifyPage from './Pages/NotifyPage';
import PageStyle from './Styles/PageStyle';
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux';
import Icon from './Views/Icon';

function index() {
  return (
    <View style={PageStyle.page}>
      <Router style={PageStyle.page}>
        <Scene key="root" hideNavBar>
          <Tabs
            key="tabBar"
            showLabel={true}
            tabBarPosition="bottom"
            activeTintColor="#12afed"
            headerLayoutPreset={'center'}>
            <Scene key="HomePage" component={HomePage} title="主頁" />
            <Scene key="ActivityPage" component={HomePage} title="活動" />
            <Scene key="PostPage" component={HomePage} title="發布" />
            <Scene key="NotifyPage" component={HomePage} title="通知" />
            <Stack
              key="ProfilePage"
              title="個人"
              icon={() => (
                <Icon lib="Ionicons" name="person-outline" size={30} />
              )}>
              <Scene key="ProfilePage" component={ProfilePage} />
              <Scene key="ProfilePage" component={ProfilePage} />
            </Stack>
          </Tabs>
        </Scene>
      </Router>
    </View>
  );
}

export default index;
