import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlice';
import { postsReducer } from './Posts/postSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // posts: postsReducer,
    middleware,
  },
});
