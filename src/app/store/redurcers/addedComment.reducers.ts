import { EAddedCommentActions, AddedCommentActions } from '../actions/addedComment.actions';
import { AddedCommentState, InitialAddedCommentState } from '../state/addedComment.state';

export const addedCommentReducer = (
  state = InitialAddedCommentState,
  action: AddedCommentActions
): AddedCommentState => {
  switch (action.type) {
    case EAddedCommentActions.AddCommentSuccess:
      return {
        ...state,
        commentId: action.payload
      };
    default:
      return state;
  }
}
