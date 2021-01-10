// //貼文牆的正方形元素（點進去會到某個貼文）
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from '../../Styles/PostWall.style';

export default function SquareElement(props) {
  const {id, url} = props;
  return (
    <View style={styles.PostWall}>
      <TouchableOpacity>
        <Image style={styles.image} source={{uri: url}} />
      </TouchableOpacity>
    </View>
  );
}
