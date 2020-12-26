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
import PageStyle from './Styles/PageStyle';
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux';
import {indexPage, routerKey} from './data.source';
import TabViewIcon from './utils/iconUtils';

class index extends React.Component {
  render() {
    const {
      HomePageIcon,
      ProfilePageIcon,
      ActivityPageIcon,
      NotifyPageIcon,
      PostPageIcon,
    } = indexPage.tabIcons;
    return (
      <View style={PageStyle.page}>
        <Router>
          <Tabs
            key="tabBar"
            showLabel={false}
            headerMode={'float'}
            tabBarPosition="bottom"
            headerLayoutPreset={'center'}>
            {/*HomePage*/}
            <Stack
              key={routerKey.HomePage}
              icon={(e) => (
                <TabViewIcon source={HomePageIcon} focused={e.focused} />
              )}>
              <Scene key={routerKey.HomePage} component={HomePage} />
              <Scene key={routerKey.ProfilePage} component={ProfilePage} />
              <Scene key={routerKey.ContentPage} component={ContentPage} />
              <Scene key={routerKey.SearchPage} component={SearchPage} />
              <Scene key={routerKey.ChatPage} component={ChatPage} />
            </Stack>
            {/*ActivityPage*/}
            <Scene
              key="ActivityPage"
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
              key="NotifyPage"
              icon={(e) => (
                <TabViewIcon source={NotifyPageIcon} focused={e.focused} />
              )}>
              <Scene key="NotifyPage" component={NotifyPage} />
              <Scene key={routerKey.ProfilePage} component={ProfilePage} />
              <Scene key={routerKey.ContentPage} component={ContentPage} />
            </Stack>
            {/*ProfilePage*/}
            <Stack
              key={routerKey.ProfilePage}
              icon={(e) => (
                <TabViewIcon source={ProfilePageIcon} focused={e.focused} />
              )}>
              <Scene key={routerKey.ProfilePage} component={ProfilePage} />
              <Scene key={routerKey.ContentPage} component={ContentPage} />
            </Stack>
          </Tabs>
        </Router>
      </View>
    );
  }
}

export default index;
