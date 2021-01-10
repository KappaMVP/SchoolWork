//PostPage style
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  topview: {
    flexDirection: 'row',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
  image: {width: 150, height: 150, marginLeft: 10, marginVertical: 8},
  content: {
    flexDirection: 'row',
  },
  contenttextInput: {
    height: 170,
    width: 250,
    color: '#000',
    paddingHorizontal: 15,
  },
  //下拉式選單的選項
  itemStyle: {
    padding: 3,
    marginTop: 2,
    backgroundColor: '#ddd',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 5,
  },
  itemTextStyle: {color: 'black'},
  containerStyle: {padding: 8},
  itemsContainerStyle: {maxHeight: 88},
});
