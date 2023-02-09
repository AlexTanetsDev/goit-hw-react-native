import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk('auth/register', async ({ email, password }, thunkAPI) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);

    return res.user;
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
