import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { checkAuthStatus, loginAction, logoutAction } from '../api-actions';
import { User } from '../../types/user';

type UsersInitialStateType = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
  isAuthError: boolean;
  userInfo: User | null;
}

const initialState: UsersInitialStateType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  isAuthError: false,
  userInfo: null,
};

export const user = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userInfo = action.payload;
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isAuthError = false;
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userInfo = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isAuthError = true;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userInfo = null;
      });
  },
  selectors: {
    selectAuthorizationStatus: (state: UsersInitialStateType) => state.authorizationStatus,
    selectUserInfo: (state: UsersInitialStateType) => state.userInfo
  }
});

const { selectAuthorizationStatus, selectUserInfo } = user.selectors;

export { selectAuthorizationStatus, selectUserInfo };
