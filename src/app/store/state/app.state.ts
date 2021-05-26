import { RouterReducerState } from '@ngrx/router-store';
import { LinksState, InitialLinksState } from './linkList.state';
import { UsersLinksState, InitialUsersLinksState } from './usersLinkList.state';
import { AuthState, InitialAuthState } from './auth.state';
import { InitialUsersState, UsersState } from './users.state';
import { InitialAddedShortLinksState, AddedShortLinksState } from './addedShortLinks.state';
import { InitialChangedShortLinksState, ChangedShortLinksState } from './changedShortLinks.state';
import { InitialCommentsState, CommentsState } from './commentsList.state';
import { InitialGettedUserState, GettedUserState } from './gettedUser.state';

export interface AppState {
  router?: RouterReducerState,
  links: LinksState,
  usersLinks: UsersLinksState,
  isAuth: AuthState,
  isUser: UsersState,
  addedShortLink: AddedShortLinksState,
  changedShortLink: ChangedShortLinksState,
  comments: CommentsState,
  user: GettedUserState
}

export const InitialAppState: AppState = {
  links: InitialLinksState,
  usersLinks: InitialUsersLinksState,
  isAuth: InitialAuthState,
  isUser: InitialUsersState,
  addedShortLink: InitialAddedShortLinksState,
  changedShortLink: InitialChangedShortLinksState,
  comments: InitialCommentsState,
  user: InitialGettedUserState
}

export function getInitialState(): AppState {
  return InitialAppState
}
