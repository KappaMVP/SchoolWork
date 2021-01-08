import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const user = 'users';
const post = 'posts';

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
    .then(async () => 'ok')
    .catch((error) => error.code);
  return result;
}

//Create documents for current user
export async function createDocuments(custId, name, profile, avatar) {
  const uid = getUid();
  const result = [
    await firestore()
      .collection(user)
      .doc(uid)
      .set({
        custId: custId, //自定義id
        name: name, //名稱
        profile: profile, //個人資訊
        avatar: avatar, //頭貼
        notify: [],
        following: [],
        follower: [],
        identity: {model: false, normal: true, photog: false},
        priority: {likes: true, posts: false, tags: false},
      })
      .then(() => 'ok')
      .catch((e) => e),
    await firestore()
      .collection(post)
      .doc(uid)
      .then(() => 'ok')
      .catch((e) => e),
  ];
  return result;
}

//Get follower
export async function getFllower() {
  const result = await firestore()
    .collection(user)
    .doc(getUid())
    .get()
    .then((data) => data.data.follower)
    .catch((e) => e);

  return result;
}

//Check documant exist
export async function checkExist() {
  const result = await firestore()
    .collection(user)
    .doc(getUid())
    .get()
    .then((data) => data.exists)
    .catch((e) => e);

  return result;
}

//Get current UID
function getUid() {
  return auth().currentUser.uid;
}
