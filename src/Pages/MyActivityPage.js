import React from 'react';
import {View, ScrollView} from 'react-native';
import {myActivityPage as pageData} from '../data.source';
import {navToActivityDetailPage} from '../helper/routerAction';
import ActivityView from '../Views/ActivityView';
import ActStyles from '../Styles/ActivityView.style';

export default class MyActivityPage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  render() {
    const {data} = this.props;
    return (
      <ScrollView style={ActStyles.items}>
        <View style={ActStyles.page}>
          {data.map((fake) => (
            <ActivityView
              key={fake.id}
              fake={fake}
              navToActivityDetailPage={() => navToActivityDetailPage({fake})}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}
