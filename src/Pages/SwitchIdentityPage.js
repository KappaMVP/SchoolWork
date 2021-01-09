//設定>切換身份頁
import ToggleSwitch from 'toggle-switch-react-native'; //你一定會用到的 但不一定是這頁
import React from 'react';
import {View, Text} from 'react-native';
import {switchIdentityPageData as pageData} from '../data.source';
import PageStyles from '../Styles/Page.style';
import Iconbtn from '../Views/Elements/IconBtn';
import Styles from '../Styles/SwitchIdentityPage.style';
import {createDocuments} from '../helper/firebaseActions';

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
          right: (
            <Iconbtn
              styles={Styles.nextStep}
              onPress={this.handleAddToFireBase}
              text={'完成'}
              textStyle={Styles.nextStepText}
            />
          ),
        }
      : {};
    this.props.navigation.setParams({
      title: pageData.title,
      ...registerFirst,
    });
  }

  handleAddToFireBase = async () => {
    const result = await createDocuments({...this.props, ...this.state});
    if (result[0] === 'ok' && result[1] === 'ok') {
      this.props.setUser(true);
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
    const {photog, model, normal} = this.state.identity;
    const {post, tags, keep} = this.state.priority;
    return (
      // 切換身分
      <View style={PageStyles}>
        <Text style={Styles.title}>身份:</Text>
        <View style={Styles.item}>
          <Text>攝影師</Text>
          <View style={Styles.toggle}>
            <ToggleSwitch
              isOn={photog}
              onColor="#006284"
              offColor="#888888"
              size="large"
              onToggle={() => this.handleOnToggleSwitch('photog')}
            />
          </View>
        </View>
        <View style={Styles.item}>
          <Text>模特兒</Text>
          <View style={Styles.toggle}>
            <ToggleSwitch
              isOn={model}
              onColor="#006284"
              offColor="#888888"
              size="large"
              onToggle={() => this.handleOnToggleSwitch('model')}
            />
          </View>
        </View>
        <View style={Styles.item}>
          <Text>一般帳號</Text>
          <View style={Styles.toggle}>
            <ToggleSwitch
              isOn={normal}
              onColor="#006284"
              offColor="#888888"
              size="large"
              onToggle={() => this.handleOnToggleSwitch('normal')}
            />
          </View>
        </View>
        {/* 切換功能 */}
        <Text style={Styles.title}>功能:</Text>
        <View style={Styles.item}>
          <Text>貼文</Text>
          <View style={Styles.toggle}>
            <ToggleSwitch
              isOn={post}
              onColor="#006284"
              offColor="#888888"
              size="large"
              onToggle={(isOn) => this.handleChangeToggle('post')}
            />
          </View>
        </View>
        <View style={Styles.item}>
          <Text>標註</Text>
          <View style={Styles.toggle}>
            <ToggleSwitch
              isOn={tags}
              onColor="#006284"
              offColor="#888888"
              size="large"
              onToggle={(isOn) => this.handleChangeToggle('tags')}
            />
          </View>
        </View>
        <View style={Styles.item}>
          <Text>收藏</Text>
          <View style={Styles.toggle}>
            <ToggleSwitch
              isOn={keep}
              onColor="#006284"
              offColor="#888888"
              size="large"
              onToggle={(isOn) => this.handleChangeToggle('keep')}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default SwitchIdentityPage;
