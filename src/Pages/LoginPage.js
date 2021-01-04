//登入
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import Styles from '../Styles/LoginPage.style';
import Icon from '../Views/Elements/Icon';
import {loginPageData as pageData} from '../data.source';
import Iconbtn from '../Views/Elements/IconBtn';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  //sign in
  // auth()
  //   .signInWithEmailAndPassword('lours288300@gmail.com', 'aa890521')
  //   .then(() => {
  //     console.log('User account created & signed in!');
  //   });

  //sign out
  // auth()
  //   .signOut()
  //   .then(() => console.log('User signed out!'));

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
      </View>
    );
  }
}

export default LoginPage;
