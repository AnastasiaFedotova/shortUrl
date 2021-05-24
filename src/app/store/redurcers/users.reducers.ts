import { EUsersActions, UsersActions } from './../actions/users.actions';
import { UsersState, InitialUsersState } from './../state/users.state';

export const usersReducer = (
  state = InitialUsersState,
  action: UsersActions
): UsersState => {
  switch (action.type) {
    case EUsersActions.AddUserSuccess:
      return {
        ...state,
        isUser: action.payload
      };
    case EUsersActions.LogInSuccess:
      return {
        ...state,
        isUser: action.payload
      };
    default:
      return state;
  }
}
