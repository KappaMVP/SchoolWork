//登入
import React from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

class LoginPage extends React.Component {
  //sign in
  // auth()
  //   .signInWithEmailAndPassword('lours288300@gmail.com', 'aa890521')
  //   .then(() => {
  //     console.log('User account created & signed in!');
  //   });

  //sign out
  // auth()
  //   .signOut()
  //   .then(() => console.log('User signed out!'));
  render() {
    return (
      <View>
        <View>
          <Text>Log In</Text>
        </View>
      </View>
    );
  }
}

export default LoginPage;
