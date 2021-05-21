import { RouterReducerState } from '@ngrx/router-store';
import { LinksState, InitialLinksState } from './links.state';
import { AuthState, InitialAuthState } from './auth.state';

export interface AppState {
  router?: RouterReducerState,
  links: LinksState,
  isAuth: AuthState
}

export const InitialAppState: AppState = {
  links: InitialLinksState,
  isAuth: InitialAuthState
}

export function getInitialState(): AppState {
  return InitialAppState
}
