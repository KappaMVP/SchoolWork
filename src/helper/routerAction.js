//router's actions
import {Actions} from 'react-native-router-flux';
import {routerKey} from '../data.source';

export function navToProfile(props) {
  Actions.push(routerKey.ProfilePage, {...props});
}

export function navToSearch(props) {
  Actions.push(routerKey.SearchPage, {...props});
}

export function navToChat(props) {
  Actions.push(routerKey.ChatPage, {...props});
}

export function navToContent(props) {
  Actions.push(routerKey.ContentPage, {...props});
}

export function navToActivity(props) {
  Actions.push(routerKey.ActivityPage, {...props});
}

export function navToNotify(props) {
  Actions.push(routerKey.NotifyPage, {...props});
}

export function navToPost(props) {
  Actions.push(routerKey.PostPage, {...props});
}

export function navToProfileSetting(props) {
  Actions.push(routerKey.ProfileSettingPage, {...props});
}

export function replaceToProfileSetting(props) {
  Actions.replace(routerKey.ProfileSettingPage, {...props});
}

export function navToSetting(props) {
  Actions.push(routerKey.SettingPage, {...props});
}

export function navToSwitchIdentity(props) {
  Actions.push(routerKey.SwitchIdentityPage, {...props});
}

export function navToFanFollow(props) {
  Actions.push(routerKey.FanFollowPage, {...props});
}

export function navToHomePage(props) {
  Actions.push(routerKey.HomePage, {...props});
}

export function raplaceToHomePage(props) {
  Actions.repalce(routerKey.HomePage, {...props});
}

export function navToRegisterPage(props) {
  Actions.push(routerKey.RegisterPage, {...props});
}

export function navPop() {
  Actions.pop();
}
