import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, checkUser } from './operations';
import { auth } from '../../firebase/config';

const initialState = {
  user: { name: null, email: null, id: null, avatar: null },
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

    // builder.addCase(checkUser.fulfilled, (state, action) => {
    //   const currentUser = action.payload;

    //   if (currentUser.email) {
    //     state.user = currentUser;
    //     state.logInStatus = 'fulfield';
    //   }
    //   // console.log(currentUser);
    // });

    builder
      .addCase(logIn.pending, (state) => {
        state.logInStatus = 'pending';
      })
      .addCase(logIn.fulfilled, (state, action) => {
        const { id, email, login, avatar } = action.payload;
        state.user = { id, email, login, avatar };
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
