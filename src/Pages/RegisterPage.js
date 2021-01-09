import React from 'react';
import {Text, View, Linking, TouchableOpacity, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {registerPageData as pageData, iconData} from '../data.source';
import IconInput from '../Views/Elements/IconInput';
import Styles from '../Styles/RegisterPage.style';
import {registerFirebase} from '../helper/firebaseActions';

import DeviceInfo from 'react-native-device-info';
const isAndroid = DeviceInfo.getSystemName() === 'Android';

export default class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      email: props.email === undefined ? '' : props.email,
      password: '',
      checkPassword: '',
      checkPolicy: false,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  onChangeEmail = (email) => {
    this.setState({
      email: email,
    });
  };

  onChangePassword = (password) => {
    this.setState({password: password});
  };

  onChangeCheckPassword = (checkPassword) => {
    this.setState({
      checkPassword: checkPassword,
    });
  };

  onChangeCheckPolicy = (checkPolicy) => {
    this.setState({checkPolicy: checkPolicy});
  };

  handlePolicyClick = () => {
    const {policylink} = pageData;
    Linking.openURL(policylink);
  };

  handleRegisterClick = async () => {
    const {email, password, checkPassword} = this.state;
    if (password !== checkPassword) {
      Alert.alert('兩次密碼不同');
    } else {
      const {error} = pageData.registerAction;
      const result = await registerFirebase(email, password);
      if (result === 'ok') {
        return;
      } else {
        Alert.alert(error[result]);
      }
    }
  };

  render() {
    const {email, password, checkPassword, checkPolicy} = this.state;
    const {emailIcon, passwordIcon, ckeckPasswordIcon} = iconData;
    const {
      iconSize,
      emailText,
      passwordText,
      checkPasswordText,
      checkBoxColor,
      policyText,
      registerBtn,
    } = pageData;
    const checkBoxProps = isAndroid
      ? {
          tintColors: checkBoxColor,
        }
      : {
          boxType: 'square',
          onAnimationType: 'one-stroke',
          offAnimationType: 'bounce',
          onTintColor: checkBoxColor.true,
          tintColor: checkBoxColor.false,
        };
    const btnDisable =
      !checkPolicy || email === '' || password === '' || checkPassword === '';
    return (
      <View style={Styles.page}>
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
          <IconInput
            containerStyle={Styles.inputView}
            iconStyle={Styles.icon}
            iconData={{...ckeckPasswordIcon, size: iconSize}}
            inputData={{
              style: Styles.inputBox,
              value: checkPassword,
              placeholder: checkPasswordText,
              secureTextEntry: true,
              onChangeText: (text) => this.onChangeCheckPassword(text),
            }}
          />
        </View>
        {/* 同意政策 */}
        <View style={Styles.checkContainer}>
          <CheckBox
            value={checkPolicy}
            onValueChange={(value) => this.onChangeCheckPolicy(value)}
            style={Styles.checkbox}
            {...checkBoxProps}
          />
          <Text style={Styles.checkText}>{policyText.agree}</Text>
          <TouchableOpacity onPress={this.handlePolicyClick}>
            <Text style={[Styles.checkText, Styles.policyText]}>
              {policyText.privacy}
            </Text>
          </TouchableOpacity>
          <Text style={Styles.checkText}>{policyText.and}</Text>
          <TouchableOpacity onPress={this.handlePolicyClick}>
            <Text style={[Styles.checkText, Styles.policyText]}>
              {policyText.service}
            </Text>
          </TouchableOpacity>
        </View>
        {/* 加入 */}
        <TouchableOpacity
          onPress={this.handleRegisterClick}
          disabled={btnDisable}
          style={[
            Styles.registerBtn,
            {
              backgroundColor: btnDisable
                ? registerBtn.disable
                : registerBtn.able,
            },
          ]}>
          <Text style={Styles.registerText}>{pageData.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
