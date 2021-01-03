//通知的橫列
import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

export default function NotifyView(props) {
  return (
    // <TouchableOpacity style={NVStyles.zone}>
    //   <View style={NVStyles.content}>
    //     <Image style={NVStyles.userImage} />
    //     <Text style={NVStyles.name}>{props.fake.userName}</Text>
    //     <Text style={NVStyles.status}>{props.fake.status}</Text>
    //   </View>
    //   <View>
    //     <Text style={NVStyles.status}>{props.fake.time}</Text>
    //   </View>
    // </TouchableOpacity>
    <TouchableOpacity style={NVStyles.content}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Image style={NVStyles.userImage} />
        </View>
        <View>
          <View>
            <View style={NVStyles.littleCon}>
              <Text style={NVStyles.name}>{props.fake.userName}</Text>
              <Text style={NVStyles.status}>{props.fake.status}</Text>
            </View>
            <View style={NVStyles.time}>
              <Text>{props.fake.time}</Text>
            </View>
          </View>
          <View>
            <Image style={NVStyles.userImage} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const NVStyles = StyleSheet.create({
  zone: {
    borderBottomWidth: 2,
  },
  content: {
    padding: 5, // 區塊四周內距大小
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  littleCon: {
    width: 280,
    flexDirection: 'row',
  },
  userImage: {
    margin: 10,
    flexDirection: 'row',
    width: 40,
    height: 40,
    backgroundColor: 'gray',
  },
  name: {
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold',
    textAlign: 'left',
  },
  status: {
    fontSize: 18, // 子標題文字大小
    color: 'black', // 子標題文字顏色
    textAlign: 'left',
  },
  time: {
    paddingLeft: 1,
  },
});
