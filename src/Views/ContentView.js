//貼文內容（圖片、內文、引用elements/awatar）
import React from 'react';
import {Image, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Styles from '../Styles/ContentView.style';
import Comment from '../Views/Comment';

function ContentView(props) {
  const {postername, content, photo, time, label, model, location} = props;
  const commentdata = [
    {
      postid: 'kappa_mvp',
      comment: '真的♥',
      photo:
        'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
      time: '2020-12-12 12:12',
    },
    {
      postid: 'kappa_mvp',
      comment: '真的♥',
      photo:
        'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
      time: '2020-12-12 12:12',
    },
    {
      postid: 'kappa_mvp',
      comment: '真的♥',
      photo:
        'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
      time: '2020-12-12 12:12',
    },
  ];
  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.imageView}>
        <Image style={Styles.image} source={{uri: photo}} />
      </View>
      <View style={Styles.divider} />
      <View style={Styles.posterNameView}>
        <Text style={Styles.posterNameText}>photography by </Text>
        <Text style={Styles.posterName}>{postername}</Text>
      </View>
      <View style={Styles.contentView}>
        <Text style={Styles.content}>{content}</Text>
      </View>
      <View style={Styles.labelContainer}>
        {location.map((location) => (
          <View style={Styles.labelView}>
            <Text style={Styles.label}>{location}</Text>
          </View>
        ))}
        {label.map((label) => (
          <View style={Styles.labelView}>
            <Text style={Styles.label}>{label}</Text>
          </View>
        ))}
        {model.map((model) => (
          <View style={Styles.labelView}>
            <Text style={Styles.label}>{model}</Text>
          </View>
        ))}
      </View>

      <View style={Styles.timeView}>
        <Text style={Styles.time}>{time}</Text>
      </View>

      <View style={Styles.divider} />

      <View style={Styles.commentView}>
        {commentdata.map((comment) => (
          <Comment data={comment} />
        ))}
        <TouchableOpacity>
          <View style={Styles.addView}>
            <Text style={Styles.addText}>＋ Add Comment</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default ContentView;
