//設定或設定>修改個人資料
import React from 'react';
import {profileSettingPageData as pageData} from '../data.source';
import Styles from '../Styles/ProfileSettingPage.style';
import {upLoadImage} from '../helper/firebaseActions';
import {launchImageLibrary} from 'react-native-image-picker';
import {defaultAvatar} from '../helper/firebaseActions';
import {navToSwitchIdentity} from '../helper/routerAction';
import Iconbtn from '../Views/Elements/IconBtn';
import Avatar from '../Views/Elements/Avatar';
import {
  View,
  Text,
  Image,
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
      name: '',
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
      : {};
    this.props.navigation.setParams({
      title: pageData.title,
      hideTabBar: true,
      ...registerFirst,
    });
  }

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
      const resultlList = await upLoadImage(result.uri);
      if (resultlList.status === 'ok') {
        this.setState({avatar: resultlList.url});
      } else {
        Alert.alert('錯誤');
      }
    }
  };

  //變更大頭貼
  handleChangeAvatar = () => {
    launchImageLibrary({}, this.handleSelectImage);
  };

  //變更名稱
  handleChangeName = (text) => {
    this.setState({
      name: text,
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
    const {custID, avatar, name, profile} = this.state;
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
                value={name}
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
