//集成
import React from 'react';
import {View} from 'react-native';
import HomePage from './Pages/HomePage';
import ProfilePage from './Pages/ProfilePage';
import NotifyPage from './Pages/NotifyPage';
import PageStyle from './Styles/PageStyle';
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux';
import {indexPage} from './data.source';
import TabViewIcon from './utils/iconUtils';

class index extends React.Component {
  render() {
    const {HomePageIcon, ProfilePageIcon} = indexPage.tabIcons;
    return (
      <View style={PageStyle.page}>
        <Router>
          <Scene key="root" hideNavBar>
            <Tabs
              key="tabBar"
              showLabel={true}
              headerMode={'float'}
              tabBarPosition="bottom"
              activeTintColor="#12afed"
              headerLayoutPreset={'center'}>
              <Stack
                key="HomePage"
                icon={(e) => (
                  <TabViewIcon source={HomePageIcon} focused={e.focused} />
                )}>
                <Scene key="HomePage" component={HomePage} />
                <Scene key="ProfilePage" component={ProfilePage} />
              </Stack>
              <Scene key="ActivityPage" component={HomePage} />
              <Scene key="PostPage" component={HomePage} hideTabBar />
              <Scene key="NotifyPage" component={NotifyPage} />
              <Stack
                key="ProfilePage"
                icon={(e) => (
                  <TabViewIcon source={ProfilePageIcon} focused={e.focused} />
                )}>
                <Scene key="ProfilePage" component={ProfilePage} />
                <Scene key="PostPage" component={ProfilePage} />
              </Stack>
            </Tabs>
          </Scene>
        </Router>
      </View>
    );
  }
}

export default index;
