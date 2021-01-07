import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import DeviceInfo from 'react-native-device-info';

export async function facebookLogin() {
  const result = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);
  if (result.isCancelled) {
    return '用戶取消使用facebook登入';
  }
  const data = await AccessToken.getCurrentAccessToken();
  if (!data) {
    throw '憑證錯誤';
  }
  const facebookCredential = auth.FacebookAuthProvider.credential(
    data.accessToken,
  );
  return auth().signInWithCredential(facebookCredential);
}

export async function googleLogin() {
  if (DeviceInfo.getSystemName() === 'Android') {
    throw '暫時性錯誤，請改用IOS測試此功能，十分感謝';
  }
  GoogleSignin.configure({
    webClientId:
      '297755056675-m4cjbsg1el1hj4ab3r34bgdtov6cfv1d.apps.googleusercontent.com',
  });
  // Get the users ID token
  try {
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      return '用戶取消使用google登入';
    } else if (error.code === statusCodes.IN_PROGRESS) {
      throw '處理中';
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      throw '版本錯誤';
    } else {
      throw '未知錯誤';
    }
  }
}
