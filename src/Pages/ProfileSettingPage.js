//設定或設定>修改個人資料
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {profileSettingPageData as pageData} from '../data.source';
import TestImage from './test.jpg';
import PageStyles from '../Styles/Page.style';

class ProfileSettingPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }
  //變更大頭貼
  HandleChangePhotoStiker() {}
  //變更姓名
  HandleChangeUserName() {}
  //變更用戶名稱
  HandleChangeUserID() {}
  //變更個人簡介
  HandleChangeIntroduction() {}

  render() {
    return (
      <View style={PageStyles.page}>
        <View style={styles.imageView}>
          <Image source={TestImage} style={styles.PhotoStiker} />
          <TouchableOpacity onPress={() => this.HandleChangePhotoStiker}>
            <Text style={styles.ChangePhotoStiker}>更換大頭貼照</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.item}>
            <Text style={styles.label}>姓名</Text>
            <TextInput
              value=""
              onValueChange={this.HandleChangeUserName()}
              style={styles.textInput}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>用戶名稱</Text>
            <TextInput
              value=""
              onValueChange={this.HandleChangeUserID()}
              style={styles.textInput}
            />
          </View>
          <View style={styles.item}>
            <Text style={styles.label}>個人簡介</Text>
            <TextInput
              value=""
              onValueChange={this.HandleChangeIntroduction()}
              style={styles.textInput}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageView: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  PhotoStiker: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  ChangePhotoStiker: {
    paddingVertical: 10,
    color: 'blue',
    fontWeight: 'bold',
  },
  item: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    marginLeft: 15,
  },
  label: {
    fontWeight: 'bold',
  },
});
export default ProfileSettingPage;
