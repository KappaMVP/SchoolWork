import React from 'react';
import {View} from 'react-native';
import Styles from '../Styles/PostWall.style';
import SquareElement from './Elements/SquareElement';

export default function PostWall(props) {
  return (
    <View style={Styles.wall} tabLabel="發布貼文">
      {props.data.map((post) => (
        <SquareElement key={post.postID} url={post.photo} id={post.postID} />
      ))}
    </View>
  );
}
