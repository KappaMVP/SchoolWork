import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from '../Styles/PostWall.style';

function PostWall(props) {
  return (
    <View style={styles.PostWall}>
      <TouchableOpacity>
        <Image style={styles.image} source={{uri: props.Post.url}} />
      </TouchableOpacity>
    </View>
  );
}

export default PostWall;
