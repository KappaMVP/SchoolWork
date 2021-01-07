import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from './Icon';

function IconInput(props) {
  ///參數說明
  ///containerStyle   -> 容器的style
  ///iconStyle        -> icon的style
  ///iconData         -> icon的data
  ///inputData        -> input的data，可能包含：
  ///    style        -> input的style
  ///    value        -> input的value
  ///    placeholder  -> input的預設顯示文字
  ///    onChangeText -> input的callback
  ///    anyProps     -> input的非必要其他選項(like secureTextEntry)

  const {containerStyle, iconStyle, iconData, inputData} = props;
  return (
    <View style={containerStyle}>
      <View style={iconStyle}>
        <Icon {...iconData} />
      </View>
      <TextInput {...inputData} />
    </View>
  );
}

export default IconInput;
