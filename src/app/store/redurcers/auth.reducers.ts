import { AuthActions, EAuthActions } from '../actions/auth.actions';
import { AuthState, InitialAuthState } from '../state/auth.state';

export const authReducer = (
  state = InitialAuthState,
  action: AuthActions
): AuthState => {
  switch (action.type) {
    case EAuthActions.CheckAuthSuccess:
      return {
        ...state,
        isAuth: action.payload
      };
    case EAuthActions.RemoveSession:
      return {
        ...state,
        isAuth: action.payload
      };
    case EAuthActions.OpenSession:
      return {
        ...state,
        isAuth: action.payload
      };
    default:
      return state;
  }
}
