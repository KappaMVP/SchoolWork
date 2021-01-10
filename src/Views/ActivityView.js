//通知的橫列
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ActStyles from '../Styles/ActivityView.style';

export default function ActivityView(props) {
  const {
    selectAvatar,
    fake: {id, actName, idstyle},
    navToActivityDetailPage,
  } = props;
  return (
    <View style={ActStyles.page}>
      <TouchableOpacity
        onPress={() => navToActivityDetailPage()}
        style={ActStyles.content}>
        <View>
          <Image style={ActStyles.userImage} />
        </View>
        <View>
          <View style={{width: 270}}>
            <View style={ActStyles.littleCon}>
              <Text style={ActStyles.actName}>{props.fake.actName}</Text>
            </View>
            <View style={ActStyles.subtitle}>
              <Text>{props.fake.date}-</Text>
              <Text>{props.fake.time}</Text>
            </View>
          </View>
        </View>
        <View>
          <Image style={ActStyles.postImage} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
