import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../../firebase/config';

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password, login, userPhoto }, thunkAPI) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = { id: res.user.uid, email: res.user.email, login: login, userPhoto: userPhoto };
      const updateUs = await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL: userPhoto,
      });
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async ({ login, userPhoto }, thunkAPI) => {
    try {
      const res = await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL: userPhoto,
      });
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const { displayName, photoURL, uid } = auth.currentUser;
    const user = { id: uid, email, photoURL, login: displayName };
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
