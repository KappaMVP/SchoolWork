//主頁顯示的簡易貼文
import React from 'react';
import {Image, View, Text} from 'react-native';
import Styles from '../Styles/PostCard.style';

function PostCard(props) {
  const {name, photo, who_like, time, label, model} = props.item;
  return (
    <View style={Styles.container}>
      {/* 圖片 */}
      <View style={Styles.cardImage}>
        <Image style={Styles.image} source={{uri: photo}} />
      </View>
      {/* 貼文讚數 map */}
      <View style={Styles.cardLike}>
        <Text>目前有</Text>
        {who_like.map((like) => (
          <Text> {like}</Text>
        ))}
        <Text> 按讚</Text>
      </View>
      {/* 貼文者姓名 */}
      <View style={Styles.cardName}>
        <Text>{name}</Text>
      </View>
      {/* 貼文標籤 map */}
      <View style={Styles.cardLabel}>
        {label.map((label) => (
          <Text style={Styles.textLabel}>#{label} </Text>
        ))}
      </View>
      {/* 貼文標記麻豆 map */}
      <View style={Styles.cardModel}>
        {model.map((model) => (
          <Text style={Styles.textModel}>#{model} </Text>
        ))}
      </View>
      {/* 貼文時間 */}
      <View style={Styles.cardTime}>
        <Text sytle={Styles.textTime}>{time}</Text>
      </View>
    </View>
  );
}

export default PostCard;
