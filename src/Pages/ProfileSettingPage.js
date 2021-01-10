//設定或設定>修改個人資料
import React from 'react';
import {profileSettingPageData as pageData} from '../data.source';
import Styles from '../Styles/ProfileSettingPage.style';
import {launchImageLibrary} from 'react-native-image-picker';
import {navToSwitchIdentity, navPop} from '../helper/routerAction';
import Iconbtn from '../Views/Elements/IconBtn';
import Avatar from '../Views/Elements/Avatar';
import Toast from 'react-native-tiny-toast';
import {
  defaultAvatar,
  getUid,
  getUserData,
  updateProfile,
  uploadImage,
} from '../helper/firebaseActions';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

class ProfileSettingPage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      custID: '',
      userName: '',
      avatar: defaultAvatar,
      profile: '',
    };
  }

  componentDidMount() {
    const {isNew} = this.props;
    const registerFirst = isNew
      ? {
          left: <View />, //不讓他返回
          right: (
            <Iconbtn
              styles={Styles.nextStep}
              onPress={this.handleNextStap}
              text={'下一步'}
              textStyle={Styles.nextStepText}
            />
          ),
        }
      : {
          right: (
            <Iconbtn
              styles={Styles.nextStep}
              onPress={this.handleSave}
              text={'儲存'}
              textStyle={Styles.nextStepText}
            />
          ),
        };
    this.props.navigation.setParams({
      title: pageData.title,
      hideTabBar: true,
      ...registerFirst,
    });
    if (!isNew) {
      this.handleDefaultData();
    }
  }

  handleSave = async () => {
    const {custID, avatar} = this.state;
    if (custID.length === 0) {
      Alert.alert('ID一定要填！');
      return;
    }
    const toast = Toast.showLoading('儲存中...');
    const uploadResult = avatar.includes(getUid)
      ? await uploadImage(avatar)
      : {status: 'ok', url: avatar};
    if (uploadResult.status === 'ok') {
      this.setState({avatar: uploadResult.url});
      const result = await updateProfile({
        ...this.state,
        avatar: uploadResult.url,
      });
      if (result === 'ok') {
        Toast.hide(toast);
        Toast.showSuccess('修改成功');
        navPop();
      } else {
        Toast.hide(toast);
        Alert.alert('錯誤，請稍後再試');
      }
    } else {
      Toast.hide(toast);
      Alert.alert('錯誤，請稍後再試');
    }
  };

  handleDefaultData = async () => {
    const userData = await getUserData();
    this.setState({
      custID: userData.custID,
      userName: userData.userName,
      avatar: userData.avatar,
      profile: userData.profile,
    });
  };

  handleNextStap = () => {
    const {custID} = this.state;
    if (custID.length === 0) {
      Alert.alert('ID一定要填！');
    } else {
      navToSwitchIdentity({
        isNew: true,
        ...this.state,
        setUser: this.props.setUser,
      });
    }
  };

  handleSelectImage = async (result) => {
    if (!result.didCancel) {
      this.setState({avatar: result.uri});
    }
  };

  //變更大頭貼
  handleChangeAvatar = () => {
    launchImageLibrary({}, this.handleSelectImage);
  };

  //變更名稱
  handleChangeName = (text) => {
    this.setState({
      userName: text,
    });
  };

  //變更用戶ID
  handleChangeCustID = (text) => {
    this.setState({
      custID: text,
    });
  };

  //變更個人簡介
  handleChangeProfile = (text) => {
    this.setState({
      profile: text,
    });
  };

  render() {
    const {custID, avatar, userName, profile} = this.state;
    const {changeAvatarText, inputText} = pageData;

    return (
      <ScrollView>
        <View style={Styles.page}>
          <View style={Styles.imageView}>
            <Avatar source={{uri: avatar}} size={100} />
            <TouchableOpacity onPress={() => this.handleChangeAvatar()}>
              <Text style={Styles.changeAvatarText}>{changeAvatarText}</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.inputContainer}>
            <View style={Styles.item}>
              <Text style={Styles.label}>{inputText.custId.text}</Text>
              <TextInput
                value={custID}
                placeholder={inputText.custId.default}
                onChangeText={(text) => this.handleChangeCustID(text)}
                style={Styles.textInput}
              />
            </View>
            <View style={Styles.item}>
              <Text style={Styles.label}>{inputText.name.text}</Text>
              <TextInput
                value={userName}
                placeholder={inputText.name.default}
                onChangeText={(text) => this.handleChangeName(text)}
                style={Styles.textInput}
              />
            </View>
            <View style={Styles.mutiLineItem}>
              <Text style={Styles.label}>{inputText.introduction.text}</Text>
              <TextInput
                value={profile}
                placeholder={inputText.introduction.default}
                onChangeText={(text) => this.handleChangeProfile(text)}
                style={[Styles.profile, Styles.textInput]}
                multiline
                numberOfLines={10}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ProfileSettingPage;
