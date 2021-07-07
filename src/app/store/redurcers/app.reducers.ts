import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { linksReducer } from './linkList.reducers';
import { usersLinksReducer } from './usersLinkList.reducers';
import { authReducer } from './auth.reducers';
import { usersReducer } from './users.reducers';
import { addedShortLinksReducer } from './addedShortlinks.reducers';
import { changedShortLinksReducer } from './ChangedShortlinks.reducers';
import { commentsReducer } from './commentsList.reducers';
import { gettedUsersReducer } from './gettedUser.reducers';
import { addedCommentReducer } from './addedComment.reducers';
import { authUserIdReducer } from './authUsers.reducers';

export const AppReducer: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  links: linksReducer,
  usersLinks: usersLinksReducer,
  isAuth: authReducer,
  isUser: usersReducer,
  changedShortLink: changedShortLinksReducer,
  addedShortLink: addedShortLinksReducer,
  comments: commentsReducer,
  user: gettedUsersReducer,
  commentId: addedCommentReducer,
  authUserId: authUserIdReducer
}
