//主頁顯示的簡易貼文
import React from 'react';
import {Image, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {navToContent} from '../helper/routerAction';
import Styles from '../Styles/PostCard.style';

function PostCard(props) {
  // const posterId = Object.keys(props.item);
  console.log(props.item);
  const {postername, photo, time, label, model, location} = props.item;
  console.log(model);

  return (
    <TouchableOpacity
      style={{height: '100%'}}
      onPress={() => navToContent({...props.item})}>
      <View style={Styles.container}>
        {/* 圖片 */}
        <View style={Styles.cardImage}>
          <Image style={Styles.image} source={{uri: photo}} />
        </View>

        {/* 內容 */}
        {/* 問題：View 沒有效果？作用？ */}
        <View sytle={Styles.cardContent}>
          {/* 貼文者姓名 */}
          <View style={Styles.cardName}>
            <Text style={Styles.textName}>{postername}</Text>
          </View>
          {/* 貼文標記麻豆 map */}
          <View style={Styles.cardLabel}>
            <Text style={{color: 'black'}}>
              Model
              {model.map((model) => (
                <Text style={Styles.textLabel}> #{model}</Text>
              ))}
            </Text>
          </View>
          {/* 貼文標籤 map */}
          <View style={Styles.cardLabel}>
            <Text style={{color: 'black'}}>
              Use
              {label.map((label) => (
                <Text style={Styles.textLabel}> #{label}</Text>
              ))}
            </Text>
          </View>
          {/* 貼文標記地點 */}
          <View style={Styles.cardLabel}>
            <Text style={{color: 'black'}}>
              At
              {location.map((location) => (
                <Text style={Styles.textLabel}> #{location}</Text>
              ))}
            </Text>
          </View>
          {/* 貼文時間 */}
          <View style={Styles.cardTime}>
            <Text sytle={Styles.textTime}>{time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default PostCard;
