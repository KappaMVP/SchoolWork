//集成
import React from 'react';
import {View} from 'react-native';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import NotifyPage from './Pages/NotifyPage';
import ActivityPage from './Pages/ActivityPage';
import PostPage from './Pages/PostPage';
import SearchPage from './Pages/SearchPage';
import ContentPage from './Pages/ContentPage';
import ChatPage from './Pages/ChatPage';
import SettingPage from './Pages/SettingPage';
import ProfileSettingPage from './Pages/ProfileSettingPage';
import SwitchIdentityPage from './Pages/SwitchIdentityPage';
import PageStyle from './Styles/PageStyle';
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux';
import {indexPage, routerKey} from './data.source';
import TabViewIcon from './utils/iconUtils';

function index() {
  const {
    HomePageIcon,
    ProfilePageIcon,
    ActivityPageIcon,
    NotifyPageIcon,
    PostPageIcon,
  } = indexPage.tabIcons;

  const ProfilePageScene = (
    <Scene key={routerKey.ProfilePage} component={ProfilePage} />
  );
  const ConrtentPageScene = (
    <Scene key={routerKey.ContentPage} component={ContentPage} />
  );
  return (
    <View style={PageStyle.page}>
      <Router>
        <Tabs {...indexPage.tabConfig}>
          {/*HomePage*/}
          <Stack
            key={routerKey.HomePage}
            icon={(e) => (
              <TabViewIcon source={HomePageIcon} focused={e.focused} />
            )}>
            <Scene key={routerKey.HomePage} component={HomePage} />
            <Scene key={routerKey.SearchPage} component={SearchPage} />
            <Scene key={routerKey.ChatPage} component={ChatPage} />
            {ProfilePageScene}
            {ConrtentPageScene}
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
            {ProfilePageScene}
            {ConrtentPageScene}
          </Stack>
          {/*ProfilePage*/}
          <Stack
            key={routerKey.ProfilePage}
            icon={(e) => (
              <TabViewIcon source={ProfilePageIcon} focused={e.focused} />
            )}>
            {ProfilePageScene}
            {ConrtentPageScene}
            <Scene key={routerKey.SettingPage} component={SettingPage} />
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
    </View>
  );
}

export default index;
