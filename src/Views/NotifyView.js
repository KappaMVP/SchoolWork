//通知的橫列
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import NVStyles from '../Styles/NotifyView.style';

export default function NotifyView(props) {
  return (
    <TouchableOpacity>
      <View style={NVStyles.zone}>
        <TouchableOpacity>
          <View>
            <Image
              style={NVStyles.userImage}
              source={{uri: props.fake.userImage}}
            />
          </View>
        </TouchableOpacity>
        <View style={{width: 270}}>
          <View style={NVStyles.littleCon}>
            <TouchableOpacity>
              <Text style={NVStyles.name}>{props.fake.userName}</Text>
            </TouchableOpacity>
            <Text style={NVStyles.status}>{props.fake.status}</Text>
            <Text style={NVStyles.time}>{props.fake.time}</Text>
          </View>
        </View>
        <Image style={NVStyles.postImage} source={{uri: props.fake.url}} />
      </View>
    </TouchableOpacity>
  );
}
