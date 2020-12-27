//主路由
import React from 'react';
import TabViewIcon from '../helper/iconUtils';
import {mainRouter, routerKey} from '../data.source';
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux';
//pages
import HomePage from '../Pages/HomePage';
import ChatPage from '../Pages/ChatPage';
import PostPage from '../Pages/PostPage';
import NotifyPage from '../Pages/NotifyPage';
import SearchPage from '../Pages/SearchPage';
import SettingPage from '../Pages/SettingPage';
import ContentPage from '../Pages/ContentPage';
import ProfilePage from '../Pages/ProfilePage';
import ActivityPage from '../Pages/ActivityPage';
import FanFollowPage from '../Pages/FanFollowPage';
import ProfileSettingPage from '../Pages/ProfileSettingPage';
import SwitchIdentityPage from '../Pages/SwitchIdentityPage';
//test
import {navPop} from '../helper/routerAction';
import {iconData} from '../data.source';
import HeaderBtn from '../Views/HeaderBtn';

function MainRouter() {
  const {
    HomePageIcon,
    ProfilePageIcon,
    ActivityPageIcon,
    NotifyPageIcon,
    PostPageIcon,
  } = mainRouter.tabIcons;

  const ProfileSceneBundle = [
    <Scene key={routerKey.ProfilePage} component={ProfilePage} />,
    <Scene key={routerKey.FanFollowPage} component={FanFollowPage} />,
    <Scene key={routerKey.ContentPage} component={ContentPage} />,
  ];
  return (
    <Router>
      <Tabs
        {...mainRouter.tabConfig}
        renderBackButton={() => (
          <HeaderBtn data={[{btn: iconData.back, onPress: () => navPop()}]} />
        )}>
        {/*HomePage*/}
        <Stack
          key={routerKey.HomePage}
          icon={(e) => (
            <TabViewIcon source={HomePageIcon} focused={e.focused} />
          )}>
          <Scene key={routerKey.HomePage} component={HomePage} />
          <Scene key={routerKey.SearchPage} component={SearchPage} hideNavBar />
          <Scene key={routerKey.ChatPage} component={ChatPage} />
          {ProfileSceneBundle}
        </Stack>
        {/*ActivityPage*/}
        <Scene
          key={routerKey.ActivityPage}
          component={ActivityPage}
          icon={(e) => (
            <TabViewIcon source={ActivityPageIcon} focused={e.focused} />
          )}
        />
        {/*PostPage*/}
        <Scene
          key={routerKey.PostPage}
          component={PostPage}
          hideTabBar
          icon={(e) => (
            <TabViewIcon source={PostPageIcon} focused={e.focused} />
          )}
          back={true}
        />
        {/*NotifyPage*/}
        <Stack
          key={routerKey.NotifyPage}
          icon={(e) => (
            <TabViewIcon source={NotifyPageIcon} focused={e.focused} />
          )}>
          <Scene key={routerKey.NotifyPage} component={NotifyPage} />
          {ProfileSceneBundle}
        </Stack>
        {/*ProfilePage*/}
        <Stack
          key={routerKey.ProfilePage}
          icon={(e) => (
            <TabViewIcon source={ProfilePageIcon} focused={e.focused} />
          )}>
          {ProfileSceneBundle}
          <Scene key={routerKey.SettingPage} component={SettingPage} />
          <Scene key={routerKey.SearchPage} component={SearchPage} hideNavBar />
          <Scene
            key={routerKey.ProfileSettingPage}
            component={ProfileSettingPage}
          />
          <Scene
            key={routerKey.SwitchIdentityPage}
            component={SwitchIdentityPage}
          />
        </Stack>
      </Tabs>
    </Router>
  );
}
export default MainRouter;
