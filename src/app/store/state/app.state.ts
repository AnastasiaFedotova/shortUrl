import { RouterReducerState } from '@ngrx/router-store';
import { LinksState, InitialLinksState } from './linkList.state';
import { UsersLinksState, InitialUsersLinksState } from './usersLinkList.state';
import { AuthState, InitialAuthState } from './auth.state';
import { InitialUsersState, UsersState } from './users.state';
import { InitialAddedShortLinksState, AddedShortLinksState } from './addedShortLinks.state';
import { InitialChangedShortLinksState, ChangedShortLinksState } from './changedShortLinks.state';
import { InitialCommentsState, CommentsState } from './commentsList.state';
import { InitialGettedUserState, GettedUserState } from './gettedUser.state';
import { InitialAddedCommentState, AddedCommentState } from './addedComment.state';
import { InitialAuthUserIdState, AuthUserIdState } from './authUsers.state';


export interface AppState {
  router?: RouterReducerState,
  links: LinksState,
  usersLinks: UsersLinksState,
  isAuth: AuthState,
  isUser: UsersState,
  addedShortLink: AddedShortLinksState,
  changedShortLink: ChangedShortLinksState,
  comments: CommentsState,
  user: GettedUserState,
  commentId: AddedCommentState,
  authUserId: AuthUserIdState
}

export const InitialAppState: AppState = {
  links: InitialLinksState,
  usersLinks: InitialUsersLinksState,
  isAuth: InitialAuthState,
  isUser: InitialUsersState,
  addedShortLink: InitialAddedShortLinksState,
  changedShortLink: InitialChangedShortLinksState,
  comments: InitialCommentsState,
  user: InitialGettedUserState,
  commentId: InitialAddedCommentState,
  authUserId: InitialAuthUserIdState
}

export function getInitialState(): AppState {
  return InitialAppState
}
