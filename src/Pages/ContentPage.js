//內文頁面
import React from 'react';
import {ScrollView, View} from 'react-native';
import {contentPageData, contentPageData as pageData} from '../data.source';
import ContentView from '../Views/ContentView';
import {getPostContent} from '../helper/firebaseActions';

class ContentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: <View />};
  }
  async componentDidMount() {
    this.props.navigation.setParams({
      title: contentPageData.title,
    });

    if (this.props.userName === undefined) {
      const userName = 'LuLuSaBee';
      const postData = await getPostContent(this.props.postId);
      this.setState({
        view: (
          <ContentView
            postername={userName}
            photo={postData.photo}
            content={postData.content}
            time={postData.time}
            label={postData.label}
            model={postData.model}
            location={postData.location}
          />
        ),
      });
    } else {
      const {
        userName,
        content,
        photo,
        time,
        label,
        model,
        location,
        height,
      } = this.props;
      this.setState({
        view: (
          <ContentView
            postername={userName}
            photo={photo}
            content={content}
            time={time}
            label={label}
            model={model}
            location={location}
          />
        ),
      });
    }
  }
  render() {
    const {view} = this.state;
    return view;
  }
}

export default ContentPage;
