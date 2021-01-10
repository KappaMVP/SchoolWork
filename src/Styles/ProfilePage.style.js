//Profile style
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  page: {
    height: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  List: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  id: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  image1: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 10,
  },
  content2: {
    flex: 0.6,
    alignItems: 'center',
    marginTop: 20,
  },
  content3: {
    flex: 0.3,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  PostContent: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F00',
  },
  Postcontent: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F00',
  },
  name: {
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  follow: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    alignItems: 'center',
    paddingVertical: 25, // 文字上下留白
  },
  fans: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    paddingVertical: 25, // 文字上下留白
  },
  post: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 25, // 文字上下留白
    marginLeft: 10,
  },
});
