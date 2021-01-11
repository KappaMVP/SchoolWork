import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const users = firestore().collection('users');
const posts = firestore().collection('posts');
export const defaultAvatar =
  'https://firebasestorage.googleapis.com/v0/b/photogram-bc707.appspot.com/o/default%2FdefaultAvatar.jpg?alt=media&token=63aad5b2-8f5f-4584-b488-c53669f29c73';

///-------------------------///
///About account
///-------------------------///
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

//Check documant exist
export async function checkExist() {
  const result = await users
    .doc(getUid())
    .get()
    .then((doc) => doc.exists)
    .catch((e) => e);

  return result;
}

//Create documents for current user
export async function createDocuments(data) {
  const {custID, userName, profile, avatar, identity, priority} = data;
  //identity = {normal: true, model: false, photog: false}
  //priority = {likes: true, posts: false, tags: false}
  const uid = getUid();
  const results = [
    await users
      .doc(uid)
      .set({
        custID: custID, //自定義id
        userName: userName, //名稱
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

  return results;
}

///-------------------------///
///About profile data
///-------------------------///
//更新個人資訊
export async function updateProfile(data) {
  // custID, userName, profile, avatar
  const result = await users
    .doc(getUid())
    .update({
      ...data,
    })
    .then(() => 'ok')
    .catch((e) => e);

  return result;
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

//追蹤人
export async function addFollowing(followingUid) {
  const currentUid = getUid();
  //result = [Ａ追蹤Ｂ，Ｂ被Ａ追蹤]
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
      .doc(followingUid)
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

//取消追蹤人
export async function removeFollowing(followingUid) {
  const currentUid = getUid();
  //result = [Ａ追蹤Ｂ，Ｂ被Ａ追蹤]
  const result = [
    await users
      .doc(currentUid)
      .get()
      .then(async (doc) => {
        let following = doc._data.following;
        following.remove({uid: followingUid});
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
      .doc(followingUid)
      .get()
      .then(async (doc) => {
        let follower = doc._data.follower;
        follower.remove({uid: currentUid});
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

//變更身份別
//priority: {post: bool, tags: bool, keep: bool}
//identity: {photog: bool, model: bool, normal: bool}
export async function updateIdentity(identity, priority) {
  const result = await users
    .doc(getUid())
    .update({identity: identity, priority: priority})
    .then(() => 'ok')
    .catch((e) => e);

  return result;
}

///-------------------------///
///About Post
///-------------------------///
//獲取特定貼文資料
export async function getPostContent(postID) {
  const uid = postID.split('_')[0];
  const result = await posts
    .doc(uid)
    .get()
    .then((doc) => doc._data[postID])
    .catch((e) => e);

  return result;
}

//新增貼文
export async function addPost(data) {
  // content, label, location, model, photo, time
  const {time} = data;
  const uid = getUid();
  const postId = uid + '_' + time;
  let postData = {};
  postData[postId] = {...data, comment: [], keep: 0};

  const result = await posts
    .doc(getUid())
    .update({...postData})
    .then(() => 'ok')
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

//收藏貼文
export async function keepPost(postID) {
  const uid = postID.split('_')[0];
  //從現在的使用者增加 the keeped post
  const result = await users
    .doc(getUid())
    .get()
    .then(async (doc) => {
      let keep = doc._data.keep;
      keep.push({postID: postID});
      const updateResult = await users
        .doc(getUid())
        .update({...keep})
        .then(() => 'ok')
        .catch((e) => e);

      return updateResult;
    })
    .catch((e) => e);

  //那個貼文keep數加１
  posts
    .doc(uid)
    .get()
    .then(async (doc) => {
      const postData = doc._data[postID];
      const newData = {...postData, keep: postData.keep + 1};
      posts
        .doc(uid)
        .update({postID: newData})
        .then(() => 'ok')
        .catch((e) => e);
    });

  return result;
}

//取消收藏貼文
export async function removeKeepPost(postID) {
  const uid = postID.split('_')[0];
  //從現在的使用者移除 the keeped post
  const result = await users
    .doc(getUid())
    .get()
    .then(async (doc) => {
      let keep = doc._data.keep;
      keep.remove({postID: postID});
      const updateResult = await users
        .doc(getUid())
        .update({...keep})
        .then(() => 'ok')
        .catch((e) => e);

      return updateResult;
    })
    .catch((e) => e);

  //那個貼文keep數減１
  posts
    .doc(uid)
    .get()
    .then(async (doc) => {
      const postData = doc._data[postID];
      const newData = {...postData, keep: postData.keep - 1};
      posts
        .doc(uid)
        .update({postID: newData})
        .then(() => 'ok')
        .catch((e) => e);
    });

  return result;
}

//編輯貼文
export async function editPost(postID, editedData) {
  //content, label, location, model, photo can be edited
  //editedData include them
  const result = await posts
    .doc(getUid())
    .get()
    .then(async (doc) => {
      const postData = doc._data[postID];
      const newData = {...postData, ...editedData};
      const updateResult = await posts
        .doc(getUid())
        .update({postID: newData})
        .then(() => 'ok')
        .catch((e) => e);

      return updateResult;
    })
    .catch((e) => e);

  return result;
}

//新增留言
export async function addComment(postID, message, time) {
  const result = await posts
    .doc(getUid())
    .get()
    .then(async (doc) => {
      const postData = doc._data[postID];
      const newComment = [
        ...postData.comment,
        {uid: getUid(), message: message, time: time},
      ];
      const newData = {...postData, comment: newComment};
      const updateResult = await posts
        .doc(getUid())
        .update({postID: newData})
        .then(() => 'ok')
        .catch((e) => e);

      return updateResult;
    })
    .catch((e) => e);

  return result;
}

//獲取可瀏覽貼文
export async function getPostList() {
  const userData = await getUserData();
  const followingList = userData.following;
  let result = [];
  for (
    let i = 0, data = followingList[i];
    i < followingList.length && result.length < 30;
    i++
  ) {
    result.push(
      await posts
        .doc('kWXuqBF6MHee877VXdADGwMCIzo2')
        .get()
        .then((doc) => doc._data),
    );
  }

  return result;
}

//獲取貼文id跟圖片
export async function getCurrentPost(uid = getUid()) {
  const postData = await posts
    .doc(uid)
    .get()
    .then((doc) => doc._data);
  const result = Object.keys(postData).map((postID) => {
    return {postID: postID, photo: postData[postID].photo};
  });

  return result;
}

///-------------------------///
///Uitls
///-------------------------///
//Upload Image
//頭像不用給name
//post must give uid_time(this is postID)
export async function uploadImage(path, name = 'avatar') {
  const fireStoragePath = `/${getUid()}/${name}.png`;
  const reference = storage().ref(fireStoragePath);
  const task = reference.putFile(path);
  const result = await task.then(() => 'ok').catch(() => 'error');
  const url = await storage().ref(fireStoragePath).getDownloadURL();

  return {status: result, url: url};
}

//Get current UID
export function getUid() {
  return auth().currentUser.uid;
}
