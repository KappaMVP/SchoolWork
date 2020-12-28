//主頁顯示的簡易貼文
import React from 'react';
import {Image, View, Text} from 'react-native';
import Styles from '../Styles/PostCard.style';

function PostCard(props) {
  const {name, content, photo} = props.item;
  return (
    <View style={Styles.container}>
      <View style={Styles.cardImage}>
        <Image style={Styles.image} source={{uri: photo}} />
      </View>
      <View style={Styles.cardText}>
        <Text>{name}</Text>
        <Text>{content}</Text>
      </View>
    </View>
  );
}

export default PostCard;
