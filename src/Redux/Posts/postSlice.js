import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts, addPost, deletePost } from './operations';

const initialPostsState = {
  items: null,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialPostsState,
  reducers: {
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, handlePending)
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, handleRejected);

    // builder
    //   .addCase(addPost.pending, handlePending)
    //   .addCase(addPost.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.items.push(action.payload);
    //   })
    //   .addCase(addPost.rejected, handleRejected);

    // builder
    //   .addCase(deletePost.pending, handlePending)
    //   .addCase(deletePost.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;

    //     const index = state.items.findIndex((task) => task.id === action.payload.id);
    //     state.items.splice(index, 1);
    //   })
    //   .addCase(deletePost.rejected, handleRejected);
  },
});

export const postsReducer = postsSlice.reducer;
export const { setError } = postsSlice.actions;
