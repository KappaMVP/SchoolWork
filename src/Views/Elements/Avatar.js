//頭像
import React from 'react';
import Styles from '../../Styles/Avatar.style';
import {Image} from 'react-native';

export default function Avatar(props) {
  const {size, source} = props;
  return (
    <Image style={[Styles.img, {width: size, height: size}]} source={source} />
  );
}
