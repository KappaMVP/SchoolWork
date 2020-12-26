export const routerKey = {
  HomePage: 'HomePage',
  ProfilePage: 'ProfilePage',
  ActivityPage: 'ActivityPage',
  NotifyPage: 'NotifyPage',
  PostPage: 'PostPage',
  ContentPage: 'ContentPage',
  SearchPage: 'SearchPage',
  ChatPage: 'ChatPage',
};

export const indexPage = {
  tabIcons: {
    HomePageIcon: {
      key: routerKey.HomePage,
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
      key: routerKey.ProfilePage,
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
      key: routerKey.ActivityPage,
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
      key: routerKey.NotifyPage,
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
      key: routerKey.PostPage,
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
};
