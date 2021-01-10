//搜尋結果的那個元素
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ResultRowStyle from '../../Styles/ResultRow.style';

export default function ResultRow(props) {
  /// 參數說明
  /// avatar    -> 顯示使用者照片
  /// title     -> 標題
  /// subtitle  -> 副標題
  /// photo     -> 圖片
  /// onPress   -> 此按鈕觸發之函數

  const {avatar, title, subtitle, photo, onPress} = props;
  // if (title.length >=)
  return (
    <TouchableOpacity onPress={() => onPress}>
      <View style={ResultRowStyle.item}>
        <View>
          <Image style={ResultRowStyle.avatar} source={{uri: avatar}} />
        </View>
        <View style={ResultRowStyle.textView}>
          <Text style={ResultRowStyle.title}>{title}</Text>
          <Text style={ResultRowStyle.subtitle}>{subtitle}</Text>
        </View>
        {photo === undefined ? (
          <View />
        ) : (
          <Image style={ResultRowStyle.photo} source={{uri: photo}} />
        )}
      </View>
    </TouchableOpacity>
  );
}
