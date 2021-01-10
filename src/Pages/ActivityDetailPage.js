//希望可以做到這
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {activityDetailPageData as pageData, iconData} from '../data.source';
import JoinerView from '../Views/JoinerView';
import Styles from '../Styles/WorkInProgress.style';
import ActStyles from '../Styles/ActivityView.style';

class ActivityDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      fakes: [
        {
          id: 1,
          userName: '美國隊長',
          idstyle: '攝影師',
        },
        {
          id: 2,
          userName: '劉勝隆',
          idstyle: '攝影師',
        },
        {
          id: 3,
          userName: '呂柏油',
          idstyle: '攝影師',
        },
        {
          id: 4,
          userName: '呂帥哲',
          idstyle: 'Model',
        },
      ],
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  render() {
    return (
      <View style={ActStyles.items}>
        <View style={Styles.page}>
          <Text style={ActStyles.infoTitle}>{this.props.fake.actName}</Text>
          <ScrollView style={ActStyles.inforBox}>
            <Text style={ActStyles.infoContent}>{this.props.fake.idstyle}</Text>
          </ScrollView>
        </View>
        <View style={Styles.page}>
          <Text style={ActStyles.title}>參與夥伴</Text>
          <ScrollView style={ActStyles.inforBox}>
            {this.state.fakes.map((fake) => (
              <JoinerView key={fake.id} fake={fake} />
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default ActivityDetailPage;
