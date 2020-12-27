//跟這
import React from 'react';
import {View, Image} from 'react-native';
import {chatPageData as pageData} from '../data.source';
import Styles from '../Styles/WorkInProgress.style';

class ChatPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  render() {
    return (
      <View style={Styles.container}>
        <Image
          source={require('../assets/work_in_progress.gif')}
          resizeMode={'contain'}
          style={Styles.image}
        />
      </View>
    );
  }
}
export default ChatPage;
