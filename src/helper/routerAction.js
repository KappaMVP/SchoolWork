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

export function navPop() {
  Actions.pop();
}
