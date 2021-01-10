import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const users = firestore().collection('users');
const posts = firestore().collection('posts');
export const defaultAvatar =
  'https://firebasestorage.googleapis.com/v0/b/photogram-bc707.appspot.com/o/default%2FdefaultAvatar.jpg?alt=media&token=63aad5b2-8f5f-4584-b488-c53669f29c73';

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
  const {custID, name, profile, avatar, identity, priority} = data;
  //identity = {normal: true, model: false, photog: false}
  //priority = {likes: true, posts: false, tags: false}
  const uid = getUid();
  const result = [
    await users
      .doc(uid)
      .set({
        custID: custID, //自定義id
        name: name, //名稱
        profile: profile, //個人資訊
        avatar: avatar, //頭貼
        notify: [],
        following: [],
        follower: [],
        keep: [],
        identity: identity,
        priority: priority,
      })
      .then(() => 'ok')
      .catch((e) => e),
    await posts
      .doc(uid)
      .set({})
      .then(() => 'ok')
      .catch((e) => e),
  ];
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

//Upload Image
//頭像不用給name
//post must give uid_time(this is postID)
export async function upLoadImage(path, name = 'avatar') {
  const fireStoragePath = `/${getUid()}/${name}.png`;
  const reference = storage().ref(fireStoragePath);
  const task = reference.putFile(path);
  const result = await task.then(() => 'ok').catch(() => 'error');
  const url = await storage().ref(fireStoragePath).getDownloadURL();

  return {status: result, url: url};
}

//獲取頭貼
//是本人的就可以直接不給參數
//會回傳網址
export async function getAvatar(uid = getUid()) {
  const result = await users
    .doc(uid)
    .get()
    .then((doc) => doc._data.avatar)
    .catch((e) => e);

  return result;
}

//Post content
export async function addPost(data) {
  // content, label, location, model, photo, time
  const {time} = data;
  const uid = getUid();
  const postId = uid + '_' + time;
  let postData = {};
  postData[postId] = {...data};

  const result = await posts
    .doc(getUid())
    .update({...postData})
    .then(() => 'ok')
    .catch((e) => e);

  return result;
}

//獲得個人的資料
//是本人的就可以直接不給參數
export async function getUserData(uid = getUid()) {
  const result = await users
    .doc(uid)
    .get()
    .then((doc) => doc.data())
    .catch((e) => e);

  return result;
}

//獲取貼文資料
export async function getPostContent(postID) {
  const uid = postID.split('_')[0];
  const result = await posts
    .doc(uid)
    .get()
    .then((doc) => doc._data[postID])
    .catch((e) => e);

  return result;
}

//刪除貼文
export async function deletePost(postID) {
  const uid = postID.split('_')[0];
  const result = await posts
    .doc(uid)
    .get()
    .then(async (doc) => {
      const postData = doc._data;
      delete postData[postID];
      const updateResult = await posts
        .doc(uid)
        .update({...postData})
        .then(() => 'ok')
        .catch((e) => e);

      return updateResult;
    })
    .catch((e) => e);

  return result;
}

//追蹤人
export async function addFollowing(followingUid) {
  const currentUid = getUid();
  const result = [
    await users
      .doc(currentUid)
      .get()
      .then(async (doc) => {
        let following = doc._data.following;
        following.push({uid: followingUid});
        const followingResult = await users
          .doc(currentUid)
          .update({
            following: following,
          })
          .then(() => 'ok')
          .catch((e) => e);

        return followingResult;
      })
      .catch((e) => e),
    await users
      .doc(currentUid)
      .get()
      .then(async (doc) => {
        let follower = doc._data.follower;
        follower.push({uid: currentUid});
        const followerResult = await users
          .doc(followingUid)
          .update({
            follower: follower,
          })
          .then(() => 'ok')
          .catch((e) => e);

        return followerResult;
      })
      .catch((e) => e),
  ];

  return result;
}

//Get current UID
export function getUid() {
  return auth().currentUser.uid;
}
