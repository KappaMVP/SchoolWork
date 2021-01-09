//留言
import React from 'react';
import {Image, View, Text} from 'react-native';
import Styles from '../Styles/Comment.style';
import test from '../assets/test.jpg';

function Comment(props) {
  const {postid, comment, photo, time} = props.data;
  return (
    <View style={Styles.container}>
      <View style={Styles.imageView}>
        <Image style={Styles.image} source={{uri: photo}} />
      </View>
      <View>
        <View style={Styles.commentView}>
          <Text style={Styles.postid}>{postid}</Text>
          <Text style={Styles.comment}>{comment}</Text>
        </View>
        <View style={Styles.timeView}>
          <Text style={Styles.time}>{time}</Text>
        </View>
      </View>
    </View>
  );
}

export default Comment;
