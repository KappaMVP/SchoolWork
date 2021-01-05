//有icon的按鈕
import React from 'react';
import Icon from './Icon';
import {TouchableOpacity, Text, View} from 'react-native';

function Iconbtn(props) {
  const {onPress, styles, text, textStyle, ...items} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles}>
      {isEmpty(items) ? <View /> : <Icon {...items} />}
      {text === undefined ? <View /> : <Text style={textStyle}>{text}</Text>}
    </TouchableOpacity>
  );
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export default Iconbtn;
