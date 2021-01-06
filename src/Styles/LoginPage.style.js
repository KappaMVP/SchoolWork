//LoginPage的css
import {StyleSheet, Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const centerVH = {justifyContent: 'center', alignItems: 'center'};
const isAndroid = DeviceInfo.getSystemName() === 'Android';

export default StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 10,
  },
  page: {
    flex: 1,
    ...centerVH,
  },
  inputContainer: {
    width: Dimensions.get('window').width,
    ...centerVH,
  },
  inputView: {
    width: '80%',
    borderColor: 'gray',
    marginTop: 10,
    flexDirection: 'row',
    ...centerVH,
    borderRadius: 5,
    backgroundColor: '#F0F0F0',
  },
  inputBox: {
    width: '80%',
    height: 40,
    fontSize: 20,
    paddingTop: 0,
    paddingBottom: 0,
    marginLeft: 5,
  },
  icon: {
    marginHorizontal: 5,
    opacity: 0.8,
  },
  divider: {
    width: isAndroid ? '60%' : '65%',
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 1,
    margin: 20,
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  actionButton: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    width: '30%',
    ...centerVH,
  },
  actionText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  signInWithBtn: {
    flex: 1,
    width: isAndroid ? '55%' : '60%',
    maxHeight: 48,
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 3,
    //ios shadow
    shadowRadius: 3,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    //android shadow
    elevation: 3,
    ...centerVH,
  },
  signInWithBtnText: {
    fontWeight: '700',
  },
  facebookBtn: {
    paddingLeft: 10,
    flex: 1,
    backgroundColor: '#1877F2',
  },
  facebookText: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
  },
  googleBtn: {
    backgroundColor: '#FFFFFF',
  },
  googleText: {
    flex: 1,
    color: 'gray',
    textAlign: 'center',
  },
  googleIcon: {
    marginLeft: 3,
    flex: 1,
    resizeMode: 'cover',
    maxHeight: 48,
    maxWidth: 48,
  },
});
