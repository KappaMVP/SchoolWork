import auth from '@react-native-firebase/auth';

//Login
export async function logInByEmail(email, password) {
  const result = await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => 'ok')
    .catch((error) => error.code);
  return result;
}

export async function logOut() {
  const result = await auth()
    .signOut()
    .then(() => 'ok')
    .catch((error) => error);
  return result;
}
