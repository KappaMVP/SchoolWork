//Profile style
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
  },
  infoContainer: {
    flex: 2,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  infoView: {
    flex: 1,
  },
  profileData: {
    fontSize: 16,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
