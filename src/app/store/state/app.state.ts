import { RouterReducerState } from '@ngrx/router-store';
import { LinksState, InitialLinksState } from './linkList.state';
import { UsersLinksState, InitialUsersLinksState } from './usersLinkList.state';
import { AuthState, InitialAuthState } from './auth.state';
import { InitialUsersState, UsersState } from './users.state';
import { InitialAddedShortLinksState, AddedShortLinksState } from './addedShortLinks.state';
import { InitialChangedShortLinksState, ChangedShortLinksState } from './changedShortLinks.state';

export interface AppState {
  router?: RouterReducerState,
  links: LinksState,
  usersLinks: UsersLinksState,
  isAuth: AuthState,
  isUser: UsersState,
  addedShortLink: AddedShortLinksState,
  changedShortLink: ChangedShortLinksState
}

export const InitialAppState: AppState = {
  links: InitialLinksState,
  usersLinks: InitialUsersLinksState,
  isAuth: InitialAuthState,
  isUser: InitialUsersState,
  addedShortLink: InitialAddedShortLinksState,
  changedShortLink: InitialChangedShortLinksState
}

export function getInitialState(): AppState {
  return InitialAppState
}
