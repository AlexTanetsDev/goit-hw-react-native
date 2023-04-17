import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

// const querySnapshot = await getDocs(collection(db, 'users'));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, thunkAPI) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const postsData = [];
    querySnapshot.forEach((doc) => postsData.push(doc.data()));
    return postsData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// export const addPost = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
//   try {
//     const response = await axios.post('/contacts', contact);
//     return response.data;
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.message);
//   }
// });

// export const deletePost = createAsyncThunk(
//   'contacts/deleteContact',
//   async (postId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${postId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   },
// );
