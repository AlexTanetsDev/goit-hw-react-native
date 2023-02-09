import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchPosts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
//   try {
//     const response = await axios.get('/contacts');
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

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
