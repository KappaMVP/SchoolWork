//通知的橫列
import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import NVStyles from '../Styles/NotifyView.style';

export default function NotifyView(props) {
  const {
    selectAvatar,
    selectPost,
    fake: {id, postId, userName, status, time},
  } = props;
  return (
    <View style={NVStyles.zone}>
      <TouchableOpacity
        onPress={() => selectPost(postId)}
        style={NVStyles.content}>
        <View>
          <TouchableOpacity onPress={() => selectAvatar(id)}>
            <Image style={NVStyles.userImage} />
          </TouchableOpacity>
        </View>
        <View>
          <View style={{width: 270}}>
            <View style={NVStyles.littleCon}>
              <TouchableOpacity onPress={() => selectAvatar(id)}>
                <Text style={NVStyles.name}>{props.fake.userName}</Text>
              </TouchableOpacity>
              <Text style={NVStyles.status}>{props.fake.status}</Text>
              <Text style={NVStyles.time}>{props.fake.time}</Text>
            </View>
          </View>
        </View>
        <View>
          <Image style={NVStyles.postImage} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
