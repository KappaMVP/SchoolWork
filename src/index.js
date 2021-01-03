/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable curly */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/rules-of-hooks */
//集成
import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Styles from './Styles/Page.style';
import MainRouter from './routers/MainRouter';
import LoginRouter from './routers/LoginRouter';
import auth from '@react-native-firebase/auth';

//隱藏WARN的log
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['']);
//因react-native-scrollable-tab-view 底層引發 getNode 跟 unit key 的警告

function index() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  console.log('--------------');
  console.log(user);
  console.log('--------------');
  return (
    <View style={Styles.page}>{user ? <LoginRouter /> : <MainRouter />}</View>
  );
}
export default index;
