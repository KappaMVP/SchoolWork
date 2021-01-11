//貼文內容（圖片、內文、引用elements/awatar）
import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Styles from '../Styles/ContentView.style';
import Comment from '../Views/Comment';
import {iconData as pageData} from '../data.source';
import Iconbtn from '../Views/Elements/IconBtn';
let imgsize = {width: 1, height: 1};

function ContentView(props) {
  const {
    postername,
    height,
    content,
    photo,
    time,
    label,
    model,
    location,
  } = props;
  const commentdata = [
    {
      postid: 'LuLuSaBee',
      comment: '先猜猜等等又有乳房大軍',
      photo:
        'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg',
      time: '2020-12-12 12:12',
    },
    {
      postid: 'kappa_mvp',
      comment: '人們說我的乳房很漂亮是真的嗎？',
      photo:
        'data:image/jpeg;base64,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',
      time: '2020-12-12 12:12',
    },
    {
      postid: 'yunzhe_lu',
      comment: '真的♥',
      photo: 'https://attach.setn.com/newsimages/2020/05/02/2533867-XXL.jpg',
      time: '2020-12-12 12:12',
    },
  ];
  const {keep, unkeep, edit, remove} = pageData;

  // 獲取圖片高度去做View高度的變換
  // 此方法會延遲但暫時只能先這樣
  Image.getSize(
    photo,
    (width, height) => (imgsize = {width: width, height: height}),
  );
  const imgheight = Math.floor(
    ((Dimensions.get('window').width * imgsize.height) / imgsize.width) * 0.9,
  );
  // console.log(imgheight); 確認資料用

  return (
    <ScrollView style={Styles.container}>
      <View style={[Styles.photoView, {height: imgheight}]}>
        <View style={Styles.imageView}>
          <Image style={Styles.image} source={{uri: photo}} />
        </View>
        <View style={Styles.iconBtnContainer}>
          <Iconbtn
            styles={Styles.iconBtnView}
            imgStyle={Styles.iconBtn}
            {...unkeep}
          />
          <Iconbtn
            styles={Styles.iconBtnView}
            imgStyle={Styles.iconBtn}
            {...edit}
          />
          <Iconbtn
            styles={Styles.iconBtnView}
            imgStyle={Styles.iconBtn}
            {...remove}
          />
        </View>
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
            <Text style={Styles.label}>{location.name}</Text>
          </View>
        ))}
        {label.map((label) => (
          <View style={Styles.labelView}>
            <Text style={Styles.label}>{label.name}</Text>
          </View>
        ))}
        {model.map((model) => (
          <View style={Styles.labelView}>
            <Text style={Styles.label}>{model.name}</Text>
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
