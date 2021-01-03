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

class PostPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 初始餐點名稱
      content: null,
      // 初始餐點金額
      label: null,
      // 初始餐點說明
      local: null,
      // 初始餐點圖片路徑
      url: null,
      //初始
      lists: [],
    };
  }

  fackdata = [1, 2, 3, 345];

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
      rightTitle: '發佈',
      onRight: () => {
        Actions.HomePage();
      },
    });
  }

  handleOpenImageLibrary = () => {
    launchImageLibrary({}, this.handleSelectImage);
  };

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

  // 變更標籤
  handleLabel = (text) => {
    const {lists} = this.state;
    let newlists = lists;
    newlists.push(text);
    this.setState({
      label: text,
      lists: newlists,
    });
  };

  // 變更地點
  handleLocal = (text) => {
    this.setState({
      local: text,
    });
  };

  handleAdd = (list) => {
    this.setState({
      lists: [
        ...this.state.lists,
        {
          ...list,
        },
      ],
    });
  };

  render() {
    const {content, label, local, url} = this.state;
    const LabelButtom = (props) => {
      const {list} = props;
      return (
        <TouchableOpacity>
          <View>
            <View>
              <Text>{list.lists}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View>
        <View style={styles.top}>
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
            <Text></Text>
            <TextInput
              style={styles.contenttextInput}
              placeholder="加上解說..."
              value={content}
              onChangeText={this.handleContent}
              multiline={true}
            />
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>人物：</Text>
        </View>

        <ScrollView style={styles.label} horizontal={true}>
          <Text style={styles.title}>標籤：</Text>
          <View>
            {/* <TextInput value={label} onChangeText={this.handleLabel} /> */}
            <TextInput
              value={label}
              onChangeText={this.handleLabel}
              onSubmitEditing={this.handleAdd}
            />
            {this.state.lists.map((list, index) => {
              return <LabelButtom key={index} list={list} />;
            })}
          </View>
        </ScrollView>

        <View style={styles.item}>
          <Text style={styles.title}>地點：</Text>
          <TextInput value={local} onChangeText={this.handleLocal} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
  image: {width: 150, height: 150, marginLeft: 10, marginVertical: 8},
  content: {
    flexDirection: 'row',
  },
  label: {
    height: 40,
    marginVertical: 5,
    paddingHorizontal: 10,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
  item: {
    height: 40,
    flexDirection: 'row',
    marginVertical: 5,
    paddingHorizontal: 10,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  contenttextInput: {
    height: 130,
    width: 250,
    color: '#000',
    paddingHorizontal: 15,
  },
  // labeltextInput: {
  //   height: 130,
  //   width: 250,
  //   color: '#000',
  //   paddingHorizontal: 15,
  // },
  downtextInput: {
    height: 130,
    width: 250,
  },
});

export default PostPage;
