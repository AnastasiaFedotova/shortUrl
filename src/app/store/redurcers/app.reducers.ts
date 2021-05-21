import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { linksReducer } from './links.reducers';
import { authReducer } from './auth.reducers';

export const AppReducer: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  links: linksReducer,
  isAuth: authReducer
}
