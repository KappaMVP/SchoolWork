/* eslint-disable no-dupe-class-members */
//發照片
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';
import {postPageData as pageData} from '../data.source';
import {launchImageLibrary} from 'react-native-image-picker';
import {Actions} from 'react-native-router-flux';
import SearchableDropdown from '../helper/SearchableDropDown';

var persondata = [
  {id: 1, name: '鄭裕翰'},
  {id: 2, name: '蘇靖雅'},
  {id: 3, name: '劉聖龍'},
  {id: 4, name: '張耘翰'},
  {id: 5, name: '梅亞'},
  {id: 6, name: '河童'},
  {id: 7, name: '神諸葛'},
];

var labeldata = [
  {id: 1, name: '美食'},
  {id: 2, name: '景點'},
  {id: 3, name: '穿搭'},
  {id: 4, name: '日常'},
  {id: 5, name: '遊戲'},
];

var localdata = [
  {id: 1, name: '高雄科技大學'},
  {id: 2, name: '期末地獄'},
  {id: 3, name: '410'},
  {id: 4, name: 'All Pass宿舍'},
  {id: 5, name: '神魔三國誌'},
];

class PostPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null,
      content: null,
      person: [],
      label: [],
      local: [],
    };
  }

  //導航列
  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
      rightTitle: '發佈',
      onRight: () => {
        this.try();
      },
    });
  }

  try = () => {
    if (this.state.url !== null && this.state.content !== null) {
      Actions.HomePage();
      this.setState({
        url: null,
        content: null,
        person: [],
        label: [],
        local: [],
      });
    } else if (this.state.url === null || this.state.content === null) {
      console('123');
    }
  };

  //相簿
  handleOpenImageLibrary = () => {
    launchImageLibrary({}, this.handleSelectImage);
  };

  //相簿
  handleSelectImage = (result) => {
    if (!result.didCancel) {
      this.setState({url: result.uri});
    }
  };

  // 變更內文
  handleContent = (text) => {
    this.setState({
      content: text,
    });
  };

  // 變更人物
  PersonOnItemSelect = (person) => {
    const persondata = this.state.person;
    persondata.push(person);
    this.setState({person: persondata});
  };

  // 變更人物
  PersonOnRemoveItem = (person, index) => {
    const persondata = this.state.person.filter(
      (pperson) => pperson.id !== person.id,
    );
    this.setState({person: persondata});
  };

  // 變更標籤
  LableOnItemSelect = (item) => {
    const labeldata = this.state.label;
    labeldata.push(item);
    this.setState({label: labeldata});
  };

  // 變更標籤
  LableOnRemoveItem = (item, index) => {
    const labeldata = this.state.label.filter((sitem) => sitem.id !== item.id);
    this.setState({label: labeldata});
  };

  // 變更地點
  LocalOnItemSelect = (local) => {
    const localdata = this.state.local;
    localdata.push(local);
    this.setState({local: localdata});
  };

  // 變更地點
  LocalOnRemoveItem = (local, index) => {
    const localdata = this.state.local.filter(
      (slocal) => slocal.id !== local.id,
    );
    this.setState({local: localdata});
  };

  render() {
    const {content, url} = this.state;

    return (
      <View>
        {/* 照片、內文 */}
        <View style={styles.topview}>
          <TouchableOpacity onPress={this.handleOpenImageLibrary}>
            <View>
              <Image
                source={{
                  uri: !url
                    ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFGuIVc1OPCV-TmLSiDcJf2h_-7Grpdxni1A&usqp=CAU'
                    : url,
                }}
                style={styles.image}
              />
            </View>
          </TouchableOpacity>
          <View>
            <TextInput
              style={styles.contenttextInput}
              placeholder="加上解說..."
              value={content}
              onChangeText={this.handleContent}
              multiline={true}
            />
          </View>
        </View>

        {/* 人物 */}
        <View>
          <SearchableDropdown
            multi={true}
            selectedItems={this.state.person}
            onItemSelect={this.PersonOnItemSelect}
            containerStyle={{padding: 8}}
            onRemoveItem={this.PersonOnRemoveItem}
            // 下拉式選單的選項
            itemStyle={styles.itemStyle}
            itemTextStyle={{color: 'black'}}
            //下拉式選單的高度
            itemsContainerStyle={{maxHeight: 88}}
            items={persondata}
            chip={true}
            resetValue={false}
            textInputProps={{
              placeholder: '新增人物',
              underlineColorAndroid: 'transparent',
              //輸入框
              style: {
                padding: 12,
              },
            }}
            listProps={{
              nestedScrollEnabled: true,
            }}
          />
        </View>

        {/* 標籤 */}
        <View>
          <SearchableDropdown
            multi={true}
            selectedItems={this.state.label}
            onItemSelect={this.LableOnItemSelect}
            containerStyle={{padding: 8}}
            onRemoveItem={this.LableOnRemoveItem}
            // 下拉式選單的選項
            itemStyle={styles.itemStyle}
            itemTextStyle={{color: 'black'}}
            //下拉式選單的高度
            itemsContainerStyle={{maxHeight: 88}}
            items={labeldata}
            chip={true}
            resetValue={false}
            textInputProps={{
              placeholder: '新增標籤',
              underlineColorAndroid: 'transparent',
              //輸入框
              style: {
                padding: 12,
              },
            }}
            listProps={{
              nestedScrollEnabled: true,
            }}
          />
        </View>

        {/* 地點 */}
        <View>
          <SearchableDropdown
            multi={false}
            selectedItems={this.state.local}
            onItemSelect={this.LocalOnItemSelect}
            containerStyle={{padding: 8}}
            onRemoveItem={this.LocalOnRemoveItem}
            // 下拉式選單的選項
            itemStyle={styles.itemStyle}
            itemTextStyle={{color: 'black'}}
            //下拉式選單的高度
            itemsContainerStyle={{maxHeight: 88}}
            items={localdata}
            defaultIndex={2}
            chip={true}
            resetValue={false}
            textInputProps={{
              placeholder: '新增地點',
              underlineColorAndroid: 'transparent',
              //輸入框
              style: {
                padding: 12,
              },
            }}
            listProps={{
              nestedScrollEnabled: true,
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topview: {
    flexDirection: 'row',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
  image: {width: 150, height: 150, marginLeft: 10, marginVertical: 8},
  content: {
    flexDirection: 'row',
  },
  contenttextInput: {
    height: 170,
    width: 250,
    color: '#000',
    paddingHorizontal: 15,
  },
  //下拉式選單的選項
  itemStyle: {
    padding: 3,
    marginTop: 2,
    backgroundColor: '#ddd',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default PostPage;
