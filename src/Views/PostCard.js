//主頁顯示的簡易貼文
import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../Styles/PostCard.style';

function PostCard(props) {
  const {name, content} = props.item;
  return (
    <View style={Styles.view}>
      <Text>{name}</Text>
      <Text>{content}</Text>
    </View>
  );
}

export default PostCard;
