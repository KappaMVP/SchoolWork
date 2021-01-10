import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from '../Styles/ProfilePage.style';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import SquareElement from './Elements/SquareElement';

export default function PostWall(props) {
  const {Posts} = props;
  const unlikePosts = Posts.filter((Post) => Post.like === '1');
  const likePosts = Posts.filter((Post) => Post.like === '2');
  const verylikePosts = Posts.filter((Post) => Post.like === '3');
  return (
    <ScrollableTabView>
      <View style={styles.content} tabLabel="發布貼文">
        {unlikePosts.map((Post) => (
          <SquareElement key={Post.id} url={Post.url} />
        ))}
      </View>

      <View style={styles.content} tabLabel="收藏貼文">
        {likePosts.map((Post) => (
          <SquareElement key={Post.id} url={Post.url} />
        ))}
      </View>
      <View style={styles.content} tabLabel="標記貼文">
        {verylikePosts.map((Post) => (
          <SquareElement key={Post.id} url={Post.url} />
        ))}
      </View>
    </ScrollableTabView>
  );
}
