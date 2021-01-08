import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

//LogIn
export async function logInByEmail(email, password) {
  const result = await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => 'ok')
    .catch((error) => error.code);
  return result;
}

//LogOut
export async function logOut() {
  const result = await auth()
    .signOut()
    .then(() => 'ok')
    .catch((error) => error);
  return result;
}

//Register
export async function registerFirebase(email, password) {
  const result = await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => 'ok')
    .catch((error) => error.code);
  return result;
}
