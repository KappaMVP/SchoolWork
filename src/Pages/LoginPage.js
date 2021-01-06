//登入
import React from 'react';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';
import Styles from '../Styles/LoginPage.style';
import Icon from '../Views/Elements/Icon';
import {loginPageData as pageData} from '../data.source';
import Iconbtn from '../Views/Elements/IconBtn';
import {GoogleSigninButton} from '@react-native-community/google-signin';
import {facebookLogin, googleLogin} from '../helper/SocialAuthActions';

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
            <View style={Styles.inputView}>
              <View style={Styles.icon}>
                <Icon {...emailIcon} size={iconSize} />
              </View>
              <TextInput
                style={Styles.inputBox}
                onChangeText={(text) => this.onChangeEmail(text)}
                value={email}
                keyboardType="email-address"
                placeholder="帳號"
              />
            </View>
            <View style={Styles.inputView}>
              <View style={Styles.icon}>
                <Icon {...passwordIcon} size={iconSize} />
              </View>
              <TextInput
                style={Styles.inputBox}
                onChangeText={(text) => this.onChangePassword(text)}
                value={password}
                secureTextEntry
                placeholder="密碼"
              />
            </View>
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
            onPress={() => console.log('註冊')}
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
