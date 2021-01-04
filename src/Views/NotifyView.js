//通知的橫列
import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

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

const NVStyles = StyleSheet.create({
  zone: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingLeft: 5, // 區塊四周內距大小
    paddingRight: 5,
    paddingTop: 2,
    paddingEnd: 2,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
  },
  littleCon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  userImage: {
    borderRadius: 5,
    margin: 10,
    flexDirection: 'row',
    width: 40,
    height: 40,
    backgroundColor: 'gray',
  },
  postImage: {
    borderRadius: 7,
    margin: 5,
    flexDirection: 'row',
    width: 60,
    height: 60,
    backgroundColor: 'gray',
  },
  name: {
    fontSize: 18, // 標題文字大小
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 5,
  },
  status: {
    fontSize: 18, // 子標題文字大小
    color: 'black', // 子標題文字顏色
    textAlign: 'left',
    marginTop: 5,
    marginEnd: 5,
  },
  time: {
    fontSize: 18,
    color: '#ADADAD',
  },
});
