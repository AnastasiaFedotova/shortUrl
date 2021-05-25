import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { UsersLinksState } from '../state/usersLinkList.state';

const selectLinks = (state: AppState) => state.links;

export const selectUsersLinksList = createSelector(
  selectLinks,
  (state: UsersLinksState) => state.links
)
