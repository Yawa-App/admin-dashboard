import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, isAuthorized: false },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      state.isAuthorized = true
    },
    setIsAuth: (state, action) => {
      state.isAuthorized = true
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthorized = false
      localStorage.clear()
    },
  },
});

export const { setCredentials, logOut, setIsAuth } = authSlice.actions;

export default authSlice.reducer;

export const isAuthorized = (state) => state.auth.isAuthorized;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
