import { createSelector } from '@ngrx/store';
import { AppState } from './../state/app.state';
import { UsersState } from './../state/users.state';

const selectUser = (state: AppState) => state.isUser;

export const selectedUser = createSelector(
  selectUser,
  (state: UsersState) => state.isUser
)
