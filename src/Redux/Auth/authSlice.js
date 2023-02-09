import { createSlice } from '@reduxjs/toolkit';
import { register, logIn } from './operations';

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      });
    //   .addCase(logOut.fulfilled, (state) => {
    //     state.user = { name: null, email: null };
    //     state.isLoggedIn = false;
    //   });
  },
});

export const authReducer = authSlice.reducer;
