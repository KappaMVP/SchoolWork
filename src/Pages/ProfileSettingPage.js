//設定或設定>修改個人資料
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {profileSettingPageData as pageData} from '../data.source';
import TestImage from '../assets/test.jpg';
import PageStyles from '../Styles/Page.style';
import styles from '../Styles/ProfileSettingPage.style';

class ProfileSettingPage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    const {isNew} = this.props;
    const registerFirst = isNew
      ? {
          left: <View />, //不讓他返回
        }
      : {};
    this.props.navigation.setParams({
      title: pageData.title,
      hideTabBar: true,
      ...registerFirst,
    });
  }
  //變更大頭貼
  handleChangePhotoStiker = () => {};
  //變更姓名
  handleChangeUserName = () => {};
  //變更用戶名稱
  handleChangeUserID = () => {};
  //變更個人簡介
  handleChangeIntroduction = () => {};

  render() {
    return (
      <ScrollView style={PageStyles.page}>
        <View style={styles.imageView}>
          <Image source={TestImage} style={styles.photoStiker} />
          <TouchableOpacity onPress={() => this.HandleChangePhotoStiker()}>
            <Text style={styles.changePhotoStiker}>更換大頭貼照</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.item}>
            <Text style={styles.label}>姓名</Text>
            <TextInput
              placeholder="請輸入姓名"
              onValueChange={this.handleChangeUserName()}
              style={styles.textInput}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>用戶名稱</Text>
            <TextInput
              placeholder="請輸入用戶名稱"
              onValueChange={this.handleChangeUserID()}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.introductionItem}>
          <Text style={styles.label}>個人簡介</Text>
          <TextInput
            placeholder="請輸入個人簡介"
            onValueChange={this.handleChangeIntroduction()}
            style={styles.introduction}
            multiline
            numberOfLines={10}
            underlineColorAndroid={'transparent'}
          />
        </View>
      </ScrollView>
    );
  }
}

export default ProfileSettingPage;
