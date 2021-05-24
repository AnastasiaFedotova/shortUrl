import { RouterReducerState } from '@ngrx/router-store';
import { LinksState, InitialLinksState } from './linksList.state';
import { AuthState, InitialAuthState } from './auth.state';
import { InitialUsersState, UsersState } from './users.state';
import { InitialAddedShortLinksState, AddedShortLinksState } from './addedShortLinks.state';
import { InitialChangedShortLinksState, ChangedShortLinksState } from './changedShortLinks.state';

export interface AppState {
  router?: RouterReducerState,
  links: LinksState,
  isAuth: AuthState,
  isUser: UsersState,
  addedShortLink: AddedShortLinksState,
  changedShortLink: ChangedShortLinksState
}

export const InitialAppState: AppState = {
  links: InitialLinksState,
  isAuth: InitialAuthState,
  isUser: InitialUsersState,
  addedShortLink: InitialAddedShortLinksState,
  changedShortLink: InitialChangedShortLinksState
}

export function getInitialState(): AppState {
  return InitialAppState
}
