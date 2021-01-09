import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const users = firestore().collection('users');
const posts = firestore().collection('posts');

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
export async function createDocuments(data) {
  const {custId, name, profile, avatar, identity, priority} = data;
  //identity = {normal: true, model: false, photog: false}
  //priority = {likes: true, posts: false, tags: false}
  const uid = getUid();
  const result = [
    await users
      .doc(uid)
      .set({
        custId: custId, //自定義id
        name: name, //名稱
        profile: profile, //個人資訊
        avatar: avatar, //頭貼
        notify: [],
        following: [],
        follower: [],
        identity: identity,
        priority: priority,
      })
      .then(() => 'ok')
      .catch((e) => e),
    await posts
      .doc(uid)
      .then(() => 'ok')
      .catch((e) => e),
  ];
  return result;
}

//Get follower
export async function getFllower() {
  const result = await users
    .doc(getUid())
    .get()
    .then((doc) => doc.data.follower)
    .catch((e) => e);

  return result;
}

//Get following
export async function getFollowing() {
  const result = await users
    .doc(getUid())
    .get()
    .then((doc) => doc.data.following)
    .catch((e) => e);

  return result;
}

//Check documant exist
export async function checkExist() {
  const result = await users
    .doc(getUid())
    .get()
    .then((doc) => doc.exists)
    .catch((e) => e);

  return result;
}

//Get Other Name
//uidList is uid that wanna get name
//Note: 之後用where in優化，一次搜尋十個增加效率
//      但要算出演算法可以先把uidList每十個切成一個List
//      且結果必須按照uidList的uid排序 by LuLuSaBee
export async function getUserName(uidList) {
  const result = Promise.all(
    uidList.map(
      async (uid) =>
        await users
          .doc(uid)
          .get()
          .then((doc) => doc._data.name)
          .catch((e) => e),
    ),
  );

  return result;
}

export async function upLoadImage(path) {
  return;
}

//Get current UID
function getUid() {
  return auth().currentUser.uid;
}
