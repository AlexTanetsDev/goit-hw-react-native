import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import { postsReducer } from './Posts/postSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // posts: postsReducer,
  },
});
