export const routerKey = {
  ActivityDetailPage: 'ActivityDetailPage',
  ActivityPage: 'ActivityPage',
  ChatPage: 'ChatPage',
  ContentPage: 'ContentPage',
  FanFollowPage: 'FanFollowPage',
  HomePage: 'HomePage',
  LoginPage: 'LoginPage',
  MyActivityPage: 'MyActivityPage',
  NotifyPage: 'NotifyPage',
  PostPage: 'PostPage',
  ProfilePage: 'ProfilePage',
  ProfileSettingPage: 'ProfileSettingPage',
  RegisterPage: 'RegisterPage',
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

export const myActivityPage = {
  title: '我的活動',
};

export const activityDetailPageData = {
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
  fan: '粉絲',
  follow: '追蹤中',
};

export const profileSettingPageData = {
  title: '編輯個人資料',
};

export const settingPageData = {
  title: '設定',
  options: [
    {
      id: 1,
      name: '切換暗黑模式／明亮模式',
      icon: iconFormat('Entypo', 'light-bulb'),
    },
    {
      id: 2,
      name: '編輯個人檔案',
      icon: iconFormat('Fontisto', 'person'),
    },
    {
      id: 3,
      name: '切換身份別',
      icon: iconFormat('Ionicons', 'people'),
    },
    {
      id: 4,
      name: '關於',
      icon: iconFormat('Ionicons', 'information-circle-outline'),
    },
    {
      id: 5,
      name: '登出',
      icon: iconFormat('FontAwesome5', 'door-open'),
    },
  ],
};

export const postPageData = {
  title: '上傳新作品',
  infoTitle: {
    content: '內文',
    label: '標籤',
    loacte: '地點',
    model: '人物',
  },
};

export const switchIdentityPageData = {
  title: '切換身份',
};

export const searchPageData = {
  tabTitles: ['用戶', '標籤', '地點'],
};

// 註冊跟登入通用資訊
const emailText = '電子郵件地址';
const passwordText = '密碼';

export const registerPageData = {
  title: '加入Photogram',
  iconSize: 30,
  emailText: emailText,
  passwordText: passwordText,
  checkPasswordText: '再次輸入' + passwordText,
  checkBoxColor: {
    true: '#006284',
    false: '#888888',
  },
  policyText: {
    agree: '同意',
    privacy: '隱私政策',
    and: '與',
    service: '服務條款',
  },
  policylink:
    'https://www.privacypolicies.com/live/1a0fbc77-84c1-4e3f-aaf5-6b4c9ce01386',
  registerBtn: {
    able: '#006284',
    disable: '#dddddd',
  },
  registerAction: {
    error: {
      'auth/email-already-in-use': '該電子郵件已註冊',
      'auth/invalid-email': '電子郵件無效',
      'auth/operation-not-allowed': '操作無效',
      'auth/weak-password': '密碼強度不足',
    },
  },
};

export const loginPageData = {
  title: '登入',
  iconSize: 30,
  emailText: emailText,
  passwordText: passwordText,
  loginBtn: {
    text: '登入',
    color: '#006284',
  },
  registerBtn: {
    text: '註冊',
    color: '#888888',
  },
  facebookBtn: {
    text: 'Sign in with Facebook',
    color: 'white',
    size: 35,
    ...iconFormat('MaterialCommunityIcons', 'facebook'),
  },
  googleBtn: {
    text: 'Sign in with Google',
    lib: 'assets',
    source: require('./assets/btn_google_light_normal_ios.png'),
  },
  appleBtn: {
    text: 'Sign in with Apple',
    color: 'white',
    size: 20,
    ...iconFormat('MaterialCommunityIcons', 'apple'),
  },
  loginAsEmail: {
    error: {
      'auth/email-already-in-use': 'Email已被使用',
      'auth/invalid-email': '無效的Email',
      'auth/user-disabled': '用戶已被禁用',
      'auth/user-not-found': '找不到帳號',
      'auth/wrong-password': '密碼錯誤',
    },
    notFound: {
      message: '是否要前往註冊？',
      cancel: {text: '否'},
      rgister: {text: '前往註冊'},
    },
  },
};

export const iconData = {
  headerSize: 20,
  search: iconFormat('Feather', 'search'),
  chat: iconFormat('Feather', 'mail'),
  back: iconFormat('FontAwesome5', 'chevron-left'),
  emailIcon: iconFormat('Ionicons', 'mail'),
  passwordIcon: iconFormat('Ionicons', 'lock-closed'),
  ckeckPasswordIcon: iconFormat('MaterialCommunityIcons', 'lock-check'),
};

//utils
function iconFormat(lib, name) {
  return {lib: lib, name: name};
}
