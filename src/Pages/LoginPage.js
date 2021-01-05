//登入
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Styles from '../Styles/LoginPage.style';
import Icon from '../Views/Elements/Icon';
import {loginPageData as pageData} from '../data.source';
import Iconbtn from '../Views/Elements/IconBtn';
import {GoogleSigninButton} from '@react-native-community/google-signin';
import {facebookLogin, googleLogin} from '../helper/SocialAuthActions';
//tmp
import {Button} from 'react-native';

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
                onChangeText={(email) => this.onChangeEmail(email)}
                value={email}
                keyboardType="email-address"
                placeholder="  帳號"
              />
            </View>
            <View style={Styles.inputView}>
              <View style={Styles.icon}>
                <Icon {...passwordIcon} size={iconSize} />
              </View>
              <TextInput
                style={Styles.inputBox}
                onChangeText={(password) => this.onChangePassword(password)}
                value={password}
                secureTextEntry
                placeholder="  密碼"
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
        <Button
          title="Facebook Sign-In"
          onPress={() => facebookLogin().then((res) => console.log(res))}
        />
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={() =>
            googleLogin()
              .then((res) => console.log(res))
              .catch((e) => console.log(e))
          }
          disabled={this.state.isSigninInProgress}
        />
      </View>
    );
  }
}

export default LoginPage;
