import { EGettedUsersActions, GettedUsersActions } from '../actions/gettedUser.actions';
import { GettedUserState, InitialGettedUserState } from '../state/gettedUser.state';

export const gettedUsersReducer = (
  state = InitialGettedUserState,
  action: GettedUsersActions
): GettedUserState => {
  switch (action.type) {
    case EGettedUsersActions.GetUserSuccess:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
