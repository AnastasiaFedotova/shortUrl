import { EGettedAuthUserIdActions, GettedUsersActions } from '../actions/authUsers.actions';
import { AuthUserIdState, InitialAuthUserIdState } from '../state/authUsers.state';

export const authUserIdReducer = (
  state = InitialAuthUserIdState,
  action: GettedUsersActions
): AuthUserIdState => {
  switch (action.type) {
    case EGettedAuthUserIdActions.GetAuthUserIdSuccess:
      return {
        ...state,
        authUserId: action.payload
      };
    default:
      return state;
  }
}
