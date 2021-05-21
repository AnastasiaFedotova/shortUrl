import { RouterReducerState } from '@ngrx/router-store';
import { LinksState, InitialLinksState } from './links.state';

export interface AppState {
  router?: RouterReducerState,
  links: LinksState
}

export const InitialAppState: AppState = {
  links: InitialLinksState
}

export function getInitialState(): AppState {
  return InitialAppState
}
