//設定>切換身份頁
import React from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {View, Text, Alert} from 'react-native';
import {switchIdentityPageData as pageData} from '../data.source';
import PageStyles from '../Styles/Page.style';
import Iconbtn from '../Views/Elements/IconBtn';
import Styles from '../Styles/SwitchIdentityPage.style';
import {navPop} from '../helper/routerAction';
import Toast from 'react-native-tiny-toast';
import {
  createDocuments,
  updateIdentity,
  getUserData,
} from '../helper/firebaseActions';

class SwitchIdentityPage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      identity: {
        photog: false,
        model: false,
        normal: true,
      },
      priority: {
        post: false,
        tags: false,
        keep: true,
      },
    };
  }

  componentDidMount() {
    const {isNew} = this.props;
    const registerFirst = isNew
      ? {
          styles: Styles.nextStep,
          textStyle: Styles.nextStepText,
          onPress: this.handleAddToFireBase,
          text: '完成',
        }
      : {
          styles: Styles.nextStep,
          textStyle: Styles.nextStepText,
          onPress: this.handleSave,
          text: '儲存',
        };
    this.props.navigation.setParams({
      title: pageData.title,
      hideTabBar: true,
      right: <Iconbtn {...registerFirst} />,
    });
    if (!isNew) {
      this.handleDefaultData();
    }
  }

  handleDefaultData = async () => {
    const userData = await getUserData();
    this.setState({
      identity: userData.identity,
      priority: userData.priority,
    });
  };

  handleAddToFireBase = async () => {
    const result = await createDocuments({...this.props, ...this.state});
    if (result[0] === 'ok' && result[1] === 'ok') {
      this.props.setUser(true);
    }
  };

  handleSave = async () => {
    const {identity, priority} = this.state;
    const result = await updateIdentity(identity, priority);

    if (result === 'ok') {
      Toast.showSuccess('修改成功');
      navPop();
    } else {
      Alert.alert('錯誤，請稍後再試');
    }
  };

  handleOnToggleSwitch(type) {
    let identity = {
      photog: false,
      model: false,
      normal: false,
    };
    let priority = {
      post: false,
      tags: false,
      keep: false,
    };
    identity[type] = true;
    priority.post = identity.photog;
    priority.tags = identity.model;
    priority.keep = identity.normal;
    this.setState({identity: identity, priority: priority});
  }

  handleChangeToggle(thing) {
    let priority = {
      post: false,
      tags: false,
      keep: false,
    };
    priority[thing] = true;
    this.setState({priority: priority});
  }

  render() {
    const {identity, priority} = this.state;
    const {identityTitle, identityData, prioritytitle, priorityData} = pageData;
    return (
      // 切換身分
      <View style={PageStyles}>
        <View style={Styles.block}>
          <Text style={Styles.title}>{identityTitle}</Text>
          {identityData.map((data) => (
            <View style={Styles.item}>
              <Text style={Styles.text}>{data.name}</Text>
              <View style={Styles.toggle}>
                <ToggleSwitch
                  isOn={identity[data.tag]}
                  onColor="#006284"
                  offColor="#888888"
                  size="large"
                  onToggle={() => this.handleOnToggleSwitch(data.tag)}
                />
              </View>
            </View>
          ))}
        </View>
        {/* 切換功能 */}
        <View style={Styles.block}>
          <Text style={Styles.title}>{prioritytitle}</Text>
          {priorityData.map((data) => (
            <View style={Styles.item}>
              <Text style={Styles.text}>{data.name}</Text>
              <View style={Styles.toggle}>
                <ToggleSwitch
                  isOn={priority[data.tag]}
                  onColor="#006284"
                  offColor="#888888"
                  size="large"
                  onToggle={() => this.handleChangeToggle(data.tag)}
                />
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default SwitchIdentityPage;
