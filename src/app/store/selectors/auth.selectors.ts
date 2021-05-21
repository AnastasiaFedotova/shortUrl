import { createSelector } from '@ngrx/store';
import { AppState } from './../state/app.state';
import { AuthState } from './../state/auth.state';

const selectAuth = (state: AppState) => state.isAuth;

export const selectedAuth = createSelector(
  selectAuth,
  (state: AuthState) => state.isAuth
)
