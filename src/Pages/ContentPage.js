//內文頁面
import React from 'react';
import {ScrollView} from 'react-native';
import {contentPageData, contentPageData as pageData} from '../data.source';
import ContentView from '../Views/ContentView';

class ContentPage extends React.Component {
  componentDidMount() {
    this.props.navigation.setParams({
      title: contentPageData.title,
    });
  }
  render() {
    const {
      postername,
      content,
      photo,
      time,
      label,
      model,
      location,
      height,
    } = this.props;
    console.log(height);
    return (
      <ContentView
        height={height}
        postername={postername}
        photo={photo}
        content={content}
        time={time}
        label={label}
        model={model}
        location={location}
      />
    );
  }
}

export default ContentPage;
