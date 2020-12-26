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

export const indexPage = {
  tabIcons: {
    HomePageIcon: {
      normal: {
        lib: 'Ionicons',
        name: 'home-outline',
      },
      seleted: {
        lib: 'Ionicons',
        name: 'home-sharp',
      },
    },
    ProfilePageIcon: {
      normal: {
        lib: 'Ionicons',
        name: 'person-outline',
      },
      seleted: {
        lib: 'Ionicons',
        name: 'person',
      },
    },
    ActivityPageIcon: {
      normal: {
        lib: 'FontAwesome',
        name: 'calendar-o',
      },
      seleted: {
        lib: 'FontAwesome',
        name: 'calendar-plus-o',
      },
    },
    NotifyPageIcon: {
      normal: {
        lib: 'Fontisto',
        name: 'bell',
      },
      seleted: {
        lib: 'Fontisto',
        name: 'bell-alt',
      },
    },
    PostPageIcon: {
      normal: {
        lib: 'SimpleLineIcons',
        name: 'camera',
      },
      seleted: {
        lib: 'SimpleLineIcons',
        name: 'camera',
      },
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
