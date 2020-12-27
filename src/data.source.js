export const routerKey = {
  ActivityPage: 'ActivityPage',
  ChatPage: 'ChatPage',
  ContentPage: 'ContentPage',
  HomePage: 'HomePage',
  LoginPage: 'LoginPage',
  NotifyPage: 'NotifyPage',
  PostPage: 'PostPage',
  ProfilePage: 'ProfilePage',
  ProfileSettingPage: 'ProfileSettingPage',
  SearchPage: 'SearchPage',
  SettingPage: 'SettingPage',
  SwitchIdentityPage: 'SwitchIdentityPage',
};

export const mainRouter = {
  tabIcons: {
    HomePageIcon: {
      normal: iconFormat('Ionicons', 'home-outline'),
      seleted: iconFormat('Ionicons', 'home-sharp'),
    },
    ProfilePageIcon: {
      normal: iconFormat('Ionicons', 'person-outline'),
      seleted: iconFormat('Ionicons', 'person'),
    },
    ActivityPageIcon: {
      normal: iconFormat('FontAwesome', 'calendar-o'),
      seleted: iconFormat('FontAwesome', 'calendar-plus-o'),
    },
    NotifyPageIcon: {
      normal: iconFormat('Fontisto', 'bell'),
      seleted: iconFormat('Fontisto', 'bell-alt'),
    },
    PostPageIcon: {
      normal: iconFormat('SimpleLineIcons', 'camera'),
      seleted: iconFormat('SimpleLineIcons', 'camera'),
    },
    iconSize: 30,
  },
  tabConfig: {
    key: 'tabBar',
    showLabel: false,
    headerMode: 'float',
    tabBarPosition: 'bottom',
    headerLayoutPreset: 'center',
  },
};

export const homePageData = {
  title: '首頁',
};

export const iconData = {
  search: iconFormat('Ionicons', 'search-outline'),
};

function iconFormat(lib, name) {
  return {lib: lib, name: name};
}
