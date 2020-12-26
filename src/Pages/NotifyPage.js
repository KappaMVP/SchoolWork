//通知頁
//個人檔案
import React from 'react';
import {Actions} from 'react-native-router-flux';
import {View, TouchableOpacity, Text} from 'react-native';

function test() {
  Actions.push('ProfilePage');
}

function NotifyPage() {
  return (
    <View>
      <TouchableOpacity onPress={() => test}>
        <Text> Test </Text>
      </TouchableOpacity>
    </View>
  );
}

export default NotifyPage;
