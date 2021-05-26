import { ECommentsActions, CommentsActions } from '../actions/commentsList.actions';
import { CommentsState, InitialCommentsState } from '../state/commentsList.state';

export const commentsReducer = (
  state = InitialCommentsState,
  action: CommentsActions
): CommentsState => {
  switch (action.type) {
    case ECommentsActions.GetCommentsSuccess:
      return {
        ...state,
        comments: action.payload
      };
    default:
      return state;
  }
}
