import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, updateUser } from './operations';

const initialState = {
  user: { name: null, email: null, id: null },
  logInStatus: 'default',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state, action) {
      state = initialState;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.logInStatus = 'pending';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.logInStatus = 'fulfield';
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.logInStatus = 'rejected';
        state.error = action.payload;
      });

    // builder.addCase(updateUser.fulfilled, (state, action) => {
    //   state.user = { ...state.user, login: action.payload.displayName };
    // });

    builder
      .addCase(logIn.pending, (state) => {
        state.logInStatus = 'pending';
      })
      .addCase(logIn.fulfilled, (state, action) => {
        const { id, email, login, photoURL } = action.payload;
        state.user = { id, email, login, photoURL };
        state.logInStatus = 'fulfield';
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.logInStatus = 'rejected';
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
