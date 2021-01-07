//有icon的按鈕
import React from 'react';
import Icon from './Icon';
import {TouchableOpacity, Text, View} from 'react-native';

function Iconbtn(props) {
  /// 參數說明
  /// onPress   -> 此按鈕觸發之函數
  /// styles    -> 此按鈕樣式
  /// text      -> 顯示的文字
  /// textStyle -> 文字樣式
  /// items     -> 所有要送進Icon的參數

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
