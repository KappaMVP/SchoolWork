//LoginPage的css
import {StyleSheet, Dimensions} from 'react-native';

const centerVH = {justifyContent: 'center', alignItems: 'center'};

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
    width: '85%',
    height: 40,
    fontSize: 20,
  },
  icon: {
    marginHorizontal: 5,
    opacity: 0.8,
  },
  divider: {
    width: '60%',
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
});
