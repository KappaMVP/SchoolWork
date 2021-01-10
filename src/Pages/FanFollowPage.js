//追粉頁
import React from 'react';
import {View, Text} from 'react-native';
import {fanFollowPageData as pageData} from '../data.source';

class FanFollowPage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.fanTitle, //這邊要用狀態改
    });
  }

  render() {
    const {Profiles} = this.props;
    console.log('........');
    console.log(Profiles);
    return <View></View>;
  }
}

export default FanFollowPage;
