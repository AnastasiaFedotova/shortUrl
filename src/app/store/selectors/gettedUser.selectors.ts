import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { GettedUserState } from '../state/gettedUser.state';

const selectedUser = (state: AppState) => state.user;

export const selectGettedUser = createSelector(
  selectedUser,
  (state: GettedUserState) => state.user
)
