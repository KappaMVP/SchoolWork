//內文頁面
import React from 'react';
import {ScrollView} from 'react-native';
import ContentView from '../Views/ContentView';

class ContentPage extends React.Component {
  render() {
    const {
      postername,
      content,
      photo,
      time,
      label,
      model,
      location,
    } = this.props;
    return (
      <ContentView
        postername={postername}
        photo={photo}
        time={time}
        label={label}
        model={model}
        location={location}
      />
    );
  }
}

export default ContentPage;
