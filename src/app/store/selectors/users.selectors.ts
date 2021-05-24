import { createSelector } from '@ngrx/store';
import { AppState } from './../state/app.state';
import { UsersState } from './../state/users.state';

const selectAuth = (state: AppState) => state.isUser;

export const selectedUser = createSelector(
  selectAuth,
  (state: UsersState) => state.isUser
)
