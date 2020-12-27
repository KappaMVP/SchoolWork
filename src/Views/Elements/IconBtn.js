//有icon的按鈕
import React from 'react';
import Icon from './Icon';
import {TouchableOpacity} from 'react-native';

function Iconbtn(props) {
  const {onPress, styles, ...items} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles}>
      <Icon {...items} />
    </TouchableOpacity>
  );
}

export default Iconbtn;
