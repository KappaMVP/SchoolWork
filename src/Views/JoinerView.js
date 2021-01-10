import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ActStyles from '../Styles/ActivityView.style';

export default function JoinerView(props) {
  const {
    selectAvatar,
    fake: {id, userName, idstyle},
    navToActivityDetailPage,
  } = props;
  return (
    <View style={ActStyles.zone}>
      <View style={ActStyles.content}>
        <View>
          <Image style={ActStyles.userImage} />
        </View>
        <View>
          <View style={{width: 270}}>
            <View style={ActStyles.littleCon}>
              <Text style={ActStyles.username}>{props.fake.userName}</Text>
            </View>
            <Text style={ActStyles.idstyle}>{props.fake.idstyle}</Text>
          </View>
        </View>
        <View>
          <Image style={ActStyles.postImage} />
        </View>
      </View>
    </View>
  );
}
