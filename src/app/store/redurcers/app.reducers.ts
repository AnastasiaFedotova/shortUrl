import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { linksReducer } from './linksList.reducers';
import { authReducer } from './auth.reducers';
import { usersReducer } from './users.reducers';
import { addedShortLinksReducer } from './addedShortlinks.reducers';
import { changedShortLinksReducer } from './ChangedShortlinks.reducers';

export const AppReducer: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  links: linksReducer,
  isAuth: authReducer,
  isUser: usersReducer,
  changedShortLink: changedShortLinksReducer,
  addedShortLink: addedShortLinksReducer
}
