//通知頁
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NotifyView from '../Views/NotifyView';
import {notifyPageData as pageData} from '../data.source';
// import ScrollableTabView, {
//   DefaultTabBar,
// } from 'react-native-scrollable-tab-view';
// import Icon from '../Views/Elements/Icon';
class NotifyPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  render() {
    return (
      // <View style={styles.main}>
      //   <ScrollableTabView
      //     tabBarPosition="top"
      //     locked={false}
      //     tabBarUnderlineStyle="gray"
      //     renderTabBar={() => <DefaultTabBar />}>
      //     <Text style={styles.textStyles} tabLabel="讚">
      //       Like
      //     </Text>
      //     <Text style={styles.textStyles} tabLabel="留言">
      //       Message
      //     </Text>
      //     <Text style={styles.textStyles} tabLabel="被標註">
      //       Mention
      //     </Text>
      //   </ScrollableTabView>
      // </View>
      <View></View>
    );
  }
}

const styles = StyleSheet.create({
  textStyles: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
  },
  main: {
    flex: 1,
  },
  mainNotice: {
    flex: 0.3,
  },
  noticeContent: {
    flex: 0.7,
  },
});

export default NotifyPage;
