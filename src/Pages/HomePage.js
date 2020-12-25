//主頁
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

function HomePage() {
  return (
    <View>
      <TouchableOpacity onPress={() => Actions.push('ProfilePage')}>
        <Text>HomePage</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomePage;
