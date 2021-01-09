//設定>切換身份頁
import ToggleSwitch from 'toggle-switch-react-native'; //你一定會用到的 但不一定是這頁
import React from 'react';
import {View, Text} from 'react-native';
import {switchIdentityPageData as pageData} from '../data.source';
import PageStyles from '../Styles/Page.style';
import Styles from '../Styles/SwitchIdentityPage.style';

class SwitchIdentityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photog: true,
      model: false,
      normal: false,
      post: false,
      tags: false,
      keep: false,
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  handleOnToggleSwitch(type) {
    let step1 = {
      photog: false,
      model: false,
      normal: false,
      post: false,
      tags: false,
      keep: false,
    };
    step1[type] = true;
    step1.post = step1.photog;
    step1.tags = step1.model;
    step1.keep = step1.normal;
    this.setState(step1);
  }
  handleChangeToggle(thing) {
    switch (thing) {
      case 'post':
        this.setState({post: !this.state.post});
        break;
      case 'tags':
        this.setState({tags: !this.state.tags});
        break;
      case 'keep':
        this.setState({keep: !this.state.keep});
        break;
    }
  }

  render() {
    const {photog, model, normal, post, tags, keep} = this.state;
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
