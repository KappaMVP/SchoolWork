//RegisterPage style
import {StyleSheet} from 'react-native';

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
    width: '100%',
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
  checkContainer: {
    height: '10%',
    flexDirection: 'row',
    marginVertical: 20,
    ...centerVH,
  },
  checkbox: {
    alignSelf: 'center',
    height: 15,
  },
  checkText: {
    fontSize: 15,
  },
  policyText: {
    color: '#008ae6',
  },
  registerBtn: {
    width: '60%',
    borderRadius: 5,
    padding: 10,
  },
  registerText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
