//登入
import React from 'react';
import {View, Text, Alert} from 'react-native';
import Styles from '../Styles/LoginPage.style';
import {loginPageData as pageData, iconData} from '../data.source';
import Iconbtn from '../Views/Elements/IconBtn';
import IconInput from '../Views/Elements/IconInput';
import {facebookLogin, googleLogin} from '../helper/socialAuth';
import {navToRegisterPage} from '../helper/routerAction';
import {logInByEmail} from '../helper/firebaseActions';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeEmail = (email) => {
    this.setState({
      email: email,
    });
  };

  onChangePassword = (password) => {
    this.setState({
      password: password,
    });
  };

  handleLoginPress = async () => {
    const {email, password} = this.state;
    //檢查是否有輸入
    if (email === '') {
      Alert.alert('請輸入帳號');
      return;
    } else if (password === '') {
      Alert.alert('請輸入密碼');
      return;
    } else {
      const {error, notFound} = pageData.loginAsEmail;
      const result = await logInByEmail(email, password);
      if (result === 'ok') {
        return;
      } else if (result === 'auth/user-not-found') {
        const {message, cancel, rgister} = notFound;
        Alert.alert(error[result], message, [
          {...rgister, onPress: () => navToRegisterPage({email: email})},
          {...cancel},
        ]);
      } else {
        Alert.alert(error[result]);
      }
    }
  };

  render() {
    const {email, password} = this.state;
    const {
      title,
      iconSize,
      emailText,
      passwordText,
      loginBtn,
      registerBtn,
      facebookBtn,
      googleBtn,
      appleBtn,
    } = pageData;
    const {emailIcon, passwordIcon} = iconData;
    return (
      <View style={Styles.page}>
        <Text style={Styles.title}>{title}</Text>
        {/* 輸入框 */}
        <View style={Styles.inputContainer}>
          <IconInput
            containerStyle={Styles.inputView}
            iconStyle={Styles.icon}
            iconData={{...emailIcon, size: iconSize}}
            inputData={{
              style: Styles.inputBox,
              value: email,
              placeholder: emailText,
              keyboardType: 'email-address',
              onChangeText: (text) => this.onChangeEmail(text),
            }}
          />
          <IconInput
            containerStyle={Styles.inputView}
            iconStyle={Styles.icon}
            iconData={{...passwordIcon, size: iconSize}}
            inputData={{
              style: Styles.inputBox,
              value: password,
              placeholder: passwordText,
              secureTextEntry: true,
              onChangeText: (text) => this.onChangePassword(text),
            }}
          />
        </View>
        {/* 登入．註冊 按鈕 */}
        <View style={Styles.loginContainer}>
          <Iconbtn
            onPress={() => this.handleLoginPress()}
            styles={[Styles.actionButton, {backgroundColor: loginBtn.color}]}
            textStyle={Styles.actionText}
            text={loginBtn.text}
          />
          <Iconbtn
            onPress={() => navToRegisterPage()}
            styles={[Styles.actionButton, {backgroundColor: registerBtn.color}]}
            textStyle={Styles.actionText}
            text={registerBtn.text}
          />
        </View>
        <View style={Styles.divider} />
        {/* 第三方登入 */}
        <Iconbtn
          onPress={() => facebookLogin().catch((e) => Alert.alert(e))}
          styles={[Styles.signInWithBtn, Styles.facebookBtn]}
          textStyle={[Styles.signInWithBtnText, Styles.facebookText]}
          {...facebookBtn}
        />
        <Iconbtn
          onPress={() => googleLogin().catch((e) => Alert.alert(e))}
          styles={[Styles.signInWithBtn, Styles.googleBtn]}
          textStyle={[Styles.signInWithBtnText, Styles.googleText]}
          {...googleBtn}
          imgStyle={Styles.googleIcon}
        />
        <Iconbtn
          onPress={() => Alert.alert('功能開發中')}
          styles={[Styles.signInWithBtn, Styles.appleBtn]}
          textStyle={[Styles.signInWithBtnText, Styles.appleText]}
          {...appleBtn}
        />
      </View>
    );
  }
}

export default LoginPage;
