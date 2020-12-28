//搜尋
import React from 'react';
import {View, Text} from 'react-native';
import {navToProfile} from '../helper/routerAction';
import SearchView from '../Views/SearchView';
import Styles from '../Styles/SearchPage.style';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import {TextInput} from 'react-native-gesture-handler';
import {navPop} from '../helper/routerAction';
import {iconData} from '../data.source';
import HeaderBtn from '../Views/HeaderBtn';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChangeText = (value) => {
    this.setState({
      text: value,
    });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    const {text} = this.state;

    return (
      <View style={Styles.page}>
        <Text>
          <HeaderBtn data={[{btn: iconData.back, onPress: () => navPop()}]} />
        </Text>
        <TextInput
          keyboardType="default"
          placeholder="搜尋"
          value={text}
          onChangeText={this.handleChangeText}
        />
        <View style={Styles.main}>
          <ScrollableTabView
            tabBarPosition="top"
            locked={false}
            tabBarUnderlineStyle="gray"
            renderTabBar={() => <DefaultTabBar />}>
            <Text key="localtion" style={Styles.textStyles} tabLabel="地點">
              {text}
            </Text>
            <Text key="people" style={Styles.textStyles} tabLabel="使用者">
              {text}
            </Text>
            <Text key="label" style={Styles.textStyles} tabLabel="標籤">
              {text}
            </Text>
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}

export default SearchPage;
