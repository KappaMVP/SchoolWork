//發照片
import React from 'react';
import {View, Image, TouchableOpacity, TextInput, Alert} from 'react-native';
import {postPageData as pageData} from '../data.source';
import {launchImageLibrary} from 'react-native-image-picker';
import SearchableDropdown from '../helper/SearchableDropDown';
import {uploadImage, addPost, getUid} from '../helper/firebaseActions';
import Styles from '../Styles/PostPage.style';
import {navToHomePage} from '../helper/routerAction';

var modeldata = [
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

var locationdata = [
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
      model: [],
      label: [],
      location: [],
    };
  }

  //導航列
  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
      rightTitle: '發佈',
      onRight: () => {
        this.handlePost();
      },
    });
  }

  //判斷URL&CONTENT是否填寫並加到Server
  handlePost = async () => {
    if (this.state.url !== null && this.state.content !== null) {
      const now = new Date();
      const time =
        now.getFullYear() +
        '-' +
        (now.getMonth() + 1) +
        '-' +
        now.getDate() +
        '-' +
        now.getHours() +
        '-' +
        now.getMinutes() +
        '-' +
        now.getSeconds();
      const result = await uploadImage(this.state.url, getUid() + '_' + time);
      if (result.status === 'ok') {
        const {url, ...items} = this.state;
        const postResult = await addPost({photo: url, time: time, ...items});
        if (postResult === 'ok') {
          navToHomePage();
          this.setState({
            url: null,
            content: null,
            model: [],
            label: [],
            location: [],
          });
        } else {
          Alert.alert(postResult);
        }
      } else {
        Alert.alert('錯誤，請稍後再試');
      }
    } else if (this.state.url === null) {
      Alert.alert('請選取照片');
    } else if (this.state.content === null) {
      Alert.alert('請輸入內文');
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
  modelOnItemSelect = (model) => {
    const modelData = this.state.model;
    modelData.push(model);
    this.setState({model: modelData});
  };

  // 變更人物
  modelOnRemoveItem = (model, index) => {
    const modelData = this.state.model.filter(
      (pmodel) => pmodel.id !== model.id,
    );
    this.setState({model: modelData});
  };

  // 變更標籤
  LableOnItemSelect = (item) => {
    const labelData = this.state.label;
    labelData.push(item);
    this.setState({label: labelData});
  };

  // 變更標籤
  LableOnRemoveItem = (item, index) => {
    const labelData = this.state.label.filter((sitem) => sitem.id !== item.id);
    this.setState({label: labelData});
  };

  // 變更地點
  locationOnItemSelect = (location) => {
    const locationData = this.state.location;
    locationData.push(location);
    this.setState({location: locationData});
  };

  // 變更地點
  locationOnRemoveItem = (location, index) => {
    const locationData = this.state.location.filter(
      (slocation) => slocation.id !== location.id,
    );
    this.setState({location: locationData});
  };

  render() {
    const {content, url} = this.state;

    return (
      <View>
        {/* 照片、內文 */}
        <View style={Styles.topview}>
          <TouchableOpacity onPress={this.handleOpenImageLibrary}>
            <View>
              <Image
                source={{
                  uri: !url
                    ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFGuIVc1OPCV-TmLSiDcJf2h_-7Grpdxni1A&usqp=CAU'
                    : url,
                }}
                style={Styles.image}
              />
            </View>
          </TouchableOpacity>
          <View>
            <TextInput
              style={Styles.contenttextInput}
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
            selectedItems={this.state.model}
            onItemSelect={this.modelOnItemSelect}
            containerStyle={Styles.containerStyle}
            onRemoveItem={this.modelOnRemoveItem}
            //下拉式選單的選項
            itemStyle={Styles.itemStyle}
            itemTextStyle={Styles.itemTextStyle}
            //下拉式選單的高度
            items={modeldata}
            ContainerStyle={Styles.itemsContainerStyle}
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
            containerStyle={Styles.containerStyle}
            onRemoveItem={this.LableOnRemoveItem}
            // 下拉式選單的選項
            itemStyle={Styles.itemStyle}
            itemTextStyle={Styles.itemTextStyle}
            //下拉式選單的高度
            itemsContainerStyle={Styles.itemsContainerStyle}
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
            multi={true}
            selectedItems={this.state.location}
            onItemSelect={this.locationOnItemSelect}
            containerStyle={Styles.containerStyle}
            onRemoveItem={this.locationOnRemoveItem}
            // 下拉式選單的選項
            itemStyle={Styles.itemStyle}
            itemTextStyle={Styles.itemTextStyle}
            //下拉式選單的高度
            itemsContainerStyle={Styles.itemsContainerStyle}
            items={locationdata}
            defaultIndex={1}
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

export default PostPage;
