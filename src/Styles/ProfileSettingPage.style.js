import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imageView: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  photoStiker: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  changePhotoStiker: {
    paddingVertical: 10,
    color: 'blue',
    fontWeight: 'bold',
  },
  item: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    marginLeft: 15,
  },
  label: {
    fontWeight: 'bold',
  },
  //個人簡介得style
  introductionItem: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  introduction: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    marginLeft: 15,
    textAlignVertical: 'top',
  },
});
