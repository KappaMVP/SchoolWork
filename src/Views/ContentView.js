//貼文內容（圖片、內文、引用elements/awatar）
import React from 'react';
import {Image, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {navToContent} from '../helper/routerAction';
import Styles from '../Styles/Content.style';

function ContentView(props) {
  const {postername, content, photo, time, label, model, location} = props;
  return (
    <ScrollView style={Styles.container}>
      <View>
        <Image style={Styles.image} source={{uri: photo}} />
      </View>
      <View>
        <Text>{content}</Text>
      </View>
      <View>
        <Text>{postername}</Text>
      </View>
    </ScrollView>
  );
}

export default ContentView;
