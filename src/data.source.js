export const routerKey = {
  ActivityPage: 'ActivityPage',
  ChatPage: 'ChatPage',
  ContentPage: 'ContentPage',
  FanFollowPage: 'FanFollowPage',
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

export const notifyPageData = {
  title: '通知',
};

export const activityPageData = {
  title: '活動',
};

export const chatPageData = {
  title: '聊天室',
};

export const fanFollowPageData = {
  fanTitle: '粉絲',
  followTitle: '追蹤中',
};

export const profilePageData = {
  title: '個人頁面（這邊可以討論是否改那個人的名稱）',
};

export const profileSettingPageData = {
  title: '修改個人資料',
};

export const settingPageData = {
  title: '設定',
  options: [
    {
      name: '切換暗黑模式／明亮模式',
      icon: iconFormat(), //你填
    },
    {
      name: '編輯個人檔案',
      icon: iconFormat(), //你填
    },
    {
      name: '切換身份別',
      icon: iconFormat(), //你填
    },
    {
      name: '關於',
      icon: iconFormat(), //你填
    },
    {
      name: '登出',
      icon: iconFormat(), //你填
    },
  ],
};

export const postPageData = {
  title: '上傳新作品',
};

export const switchIdentityPageData = {
  title: '切換身份',
};

export const iconData = {
  headerSize: 20,
  search: iconFormat('Feather', 'search'),
  chat: iconFormat('Feather', 'mail'),
  back: iconFormat('FontAwesome5', 'chevron-left'),
};

function iconFormat(lib, name) {
  return {lib: lib, name: name};
}
