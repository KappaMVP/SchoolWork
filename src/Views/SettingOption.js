//設定的選項
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from '../Views/Elements/Icon';
import Styles from '../Styles/SettingOption.style';

export default function SettingOption(props) {
  const {id, icon, name, onPress} = props;
  return (
    <View style={Styles.View}>
      <TouchableOpacity style={Styles.item} onPress={() => onPress(id)}>
        <View style={Styles.iconView}>
          <Icon {...icon} size={40} />
        </View>
        <Text style={Styles.lable}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}
