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
      localtionData: [],
    };
  }
  fakedata = ['123456', '123456', '789'];

  handleChangeText = (value) => {
    this.setState({
      text: value,
      localtionData:
        value !== ''
          ? this.fakedata.filter((data) => data.includes(value))
          : [],
    });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    const {localtionData, text} = this.state;
    console.log(localtionData);

    return (
      <View style={Styles.page}>
        <View style={{flexDirection: 'row'}}>
          <View style={Styles.arrow}>
            <HeaderBtn data={[{btn: iconData.back, onPress: () => navPop()}]} />
          </View>
          <TextInput
            style={{
              height: 40,
              width: 380,
              borderColor: 'gray',
            }}
            keyboardType="default"
            placeholder="搜尋"
            value={text}
            onChangeText={this.handleChangeText}
          />
        </View>
        <View style={Styles.main}>
          <ScrollableTabView
            tabBarPosition="top"
            locked={false}
            tabBarUnderlineStyle="gray"
            renderTabBar={() => <DefaultTabBar />}>
            <View key="localtion" style={Styles.textStyles} tabLabel="地點">
              {localtionData.map((data) => (
                <Text>{data}</Text>
              ))}
            </View>
            <Text key="people" style={Styles.textStyles} tabLabel="使用者">
              {localtionData}
            </Text>
            <Text key="label" style={Styles.textStyles} tabLabel="標籤">
              {localtionData}
            </Text>
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}

export default SearchPage;
