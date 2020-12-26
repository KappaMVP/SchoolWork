export const routerKey = {
  HomePage: 'HomePage',
  ProfilePage: 'ProfilePage',
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
    iconSize: 30,
  },
};
