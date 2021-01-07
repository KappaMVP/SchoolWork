//登入
import React from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import Styles from '../Styles/LoginPage.style';
import {loginPageData as pageData} from '../data.source';
import Iconbtn from '../Views/Elements/IconBtn';
import IconInput from '../Views/Elements/IconInput';
import {facebookLogin, googleLogin} from '../helper/socialAuth';
import {navToRegisterPage} from '../helper/routerAction';

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

  render() {
    const {email, password} = this.state;
    const {
      title,
      iconSize,
      emailIcon,
      passwordIcon,
      loginBtn,
      registerBtn,
      facebookBtn,
      googleBtn,
    } = pageData;
    return (
      <View style={Styles.page}>
        <Text style={Styles.title}>{title}</Text>
        <View>
          <View style={Styles.inputContainer}>
            <IconInput
              containerStyle={Styles.inputView}
              iconStyle={Styles.icon}
              iconData={{...emailIcon, size: iconSize}}
              inputData={{
                style: Styles.inputBox,
                value: email,
                placeholder: '帳號',
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
                placeholder: '密碼',
                secureTextEntry: true,
                onChangeText: (text) => this.onChangePassword(text),
              }}
            />
          </View>
        </View>
        <View style={Styles.loginContainer}>
          <Iconbtn
            onPress={() => console.log('登入')}
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
        <Iconbtn
          onPress={() =>
            facebookLogin()
              .then((res) => console.log('facebook login'))
              .catch((e) => Alert.alert(e))
          }
          styles={[Styles.signInWithBtn, Styles.facebookBtn]}
          textStyle={[Styles.signInWithBtnText, Styles.facebookText]}
          {...facebookBtn}
        />
        <Iconbtn
          onPress={() =>
            googleLogin()
              .then((res) => console.log('google login'))
              .catch((e) => Alert.alert(e))
          }
          styles={[Styles.signInWithBtn, Styles.googleBtn]}
          textStyle={[Styles.signInWithBtnText, Styles.googleText]}
          {...googleBtn}
          imgStyle={Styles.googleIcon}
        />
      </View>
    );
  }
}

export default LoginPage;
