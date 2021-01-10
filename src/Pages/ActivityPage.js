import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {activityPageData as pageData} from '../data.source';
import Styles from '../Styles/WorkInProgress.style';
import ActivityView from '../Views/ActivityView';
import ActStyles from '../Styles/ActivityView.style';
import {
  navToMyActivityPage,
  navToActivityDetailPage,
} from '../helper/routerAction';

class ActivityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fakes: [
        {
          id: 1,
          actName: '活動1',
          subtitle: '123567',
          idstyle: '攝影師',
        },
        {
          id: 2,
          actName: '活動2',
          subtitle: '456',
          idstyle: '攝影師',
        },
        {
          id: 3,
          actName: '活動3',
          subtitle: '789',
          idstyle: '攝影師',
        },
        {
          id: 4,
          actName: '活動4',
          subtitle: '1234',
          idstyle: 'Model',
        },
        {
          id: 5,
          actName: '活動5',
          subtitle: '45687',
          idstyle:
            '要10秒鐘，就可以形塑一個事物的第一印象！讓別人對於你產生強烈的興趣和觀感嗎？如果還不知道的，請趕快閱讀《【活動頁Banner設計】活動的第一印象，如何做出好的活動Banner！》讓活動變得更加讓人印象深刻！若說活動頁Banner是活動的門面，吸引用戶目光停留在這個活動上，那麼文案就會是活動的內部裝潢，讓用戶決定是否繼續深入了解並參與這個活動喔！因此同樣的，就由Accupass帶領各位，一起分享如何寫出好的活度病毒文案吧！',
        },
      ],
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      title: pageData.title,
    });
  }

  onPress(data) {
    navToMyActivityPage((data = {data}));
  }

  render() {
    const {fakes} = this.state;

    return (
      <ScrollView style={ActStyles.items}>
        <View style={Styles.page}>
          <View style={Styles.main}>
            <TouchableOpacity onPress={() => this.onPress(fakes)}>
              <View style={ActStyles.arrow}>
                <Text style={ActStyles.myact2}>我的活動</Text>
                <Text style={ActStyles.myact3}>▶</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={ActStyles.container}>
            <Text style={ActStyles.title}>全部活動</Text>
            {this.state.fakes.map((fake) => (
              <ActivityView
                key={fake.id}
                fake={fake}
                navToActivityDetailPage={() => navToActivityDetailPage({fake})}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ActivityPage;
