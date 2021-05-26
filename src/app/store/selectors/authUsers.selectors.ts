import { createSelector } from '@ngrx/store';
import { AppState } from './../state/app.state';
import { AuthUserIdState } from './../state/authUsers.state';

const selectAuthUserId = (state: AppState) => state.authUserId;

export const selectedAuthUserId = createSelector(
  selectAuthUserId,
  (state: AuthUserIdState) => state.authUserId
)
