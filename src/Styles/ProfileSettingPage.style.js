import DeviceInfo from 'react-native-device-info';
import {StyleSheet} from 'react-native';
const isAndroid = DeviceInfo.getSystemName() === 'Android';

export default StyleSheet.create({
  page: {
    alignItems: 'center',
  },
  imageView: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  changeAvatarText: {
    paddingVertical: 10,
    color: 'blue',
    fontWeight: 'bold',
  },
  item: {
    marginVertical: 10,
    height: isAndroid ? 60 : 50,
  },
  mutiLineItem: {
    height: '20%',
  },
  textInput: {
    width: '100%',
    paddingTop: 10,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  profile: {
    textAlignVertical: 'top',
    height: 'auto',
  },
  inputContainer: {
    width: '80%',
    height: '100%',
  },
  nextStep: {
    marginRight: 10,
  },
  nextStepText: {
    color: 'blue',
  },
});
