import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { CommentsState } from '../state/commentsList.state';

const selectComments = (state: AppState) => state.comments;

export const selectCommentsList = createSelector(
  selectComments,
  (state: CommentsState) => state.comments
)
