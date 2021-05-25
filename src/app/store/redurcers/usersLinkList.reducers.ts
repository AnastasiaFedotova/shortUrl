import { EUsersLinksActions, UsersLinksActions } from '../actions/usersLinkList.actions';
import { UsersLinksState, InitialUsersLinksState } from '../state/usersLinkList.state';

export const usersLinksReducer = (
  state = InitialUsersLinksState,
  action: UsersLinksActions
): UsersLinksState => {
  switch (action.type) {
    case EUsersLinksActions.GetUsersLinksSuccess:
      return {
        ...state,
        links: action.payload
      };
    default:
      return state;
  }
}
