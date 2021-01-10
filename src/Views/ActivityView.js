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
    <View style={ActStyles.zone}>
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
            <Text style={ActStyles.subtitle}>{props.fake.subtitle}</Text>
          </View>
        </View>
        <View>
          <Image style={ActStyles.postImage} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
