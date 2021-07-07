import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { AddedCommentState } from '../state/addedComment.state';

const selectComment = (state: AppState) => state.commentId;

export const selectedComment = createSelector(
  selectComment,
  (state: AddedCommentState) => state.commentId
)
