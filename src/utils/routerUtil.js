import {routerKey} from '../data.source';
import {Actions} from 'react-native-router-flux';

export function navToProfilePage(props) {
  Actions.push(routerKey.ProfilePage, props);
}

export function navPop() {
  Actions.pop();
}
