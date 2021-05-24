import { RouterReducerState } from '@ngrx/router-store';
import { LinksState, InitialLinksState } from './links.state';
import { AuthState, InitialAuthState } from './auth.state';
import { InitialUsersState, UsersState } from './users.state';
import { InitialShortLinksState, ShortLinksState } from './shortLinks.state';

export interface AppState {
  router?: RouterReducerState,
  links: LinksState,
  isAuth: AuthState,
  isUser: UsersState,
  shortLink: ShortLinksState
}

export const InitialAppState: AppState = {
  links: InitialLinksState,
  isAuth: InitialAuthState,
  isUser: InitialUsersState,
  shortLink: InitialShortLinksState
}

export function getInitialState(): AppState {
  return InitialAppState
}
