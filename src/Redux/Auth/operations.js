import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/config';
/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password, login, userPhoto }, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const response = await fetch(userPhoto);
      const file = await response.blob();
      const storRef = ref(storage, `avatars/${auth.currentUser.uid}`);
      await uploadBytes(storRef, file).then(console.log('photo uploaded!!'));

      const storageUrlAvatar = await getDownloadURL(
        ref(storage, `avatars/${auth.currentUser.uid}`),
      );
      await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL: storageUrlAvatar,
      });
      const { displayName, uid } = auth.currentUser;
      const user = {
        login: displayName,
        email,
        avatar: storageUrlAvatar,
        id: uid,
      };

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// export const checkUser = createAsyncThunk('auth/checkUser', async (_, thunkAPI) => {
//   try {
//     const currentUser = {};

//     const fn = await (async () => {
//       onAuthStateChanged(auth, (user) => {
//         if (user) {
//           currentUser.name = user.displayName;
//           currentUser.email = user.email;
//           currentUser.avatar = user.photoURL;
//           currentUser.id = user.uid;
//         }
//       });
//       return true;
//     })();
//     return currentUser;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const { displayName, uid } = auth.currentUser;
    const storageUrlAvatar = await getDownloadURL(ref(storage, `avatars/${auth.currentUser.uid}`));
    const user = { id: uid, email, avatar: storageUrlAvatar, login: displayName };
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('/users/logout');
//     clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
