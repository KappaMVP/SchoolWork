//設定的選項
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from '../Views/Elements/Icon';

export default function SettingOption(props) {
  const {id, icon, name, onPress} = props;
  const test = {...icon};
  console.log(icon);

  console.log({...icon});
  console.log('------');

  return (
    <View>
      <TouchableOpacity
        style={{flexDirection: 'row'}}
        onPress={() => onPress(id)}>
        <Icon {...icon} size={40} />
        <Text style={{fontSize: 20}}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}
