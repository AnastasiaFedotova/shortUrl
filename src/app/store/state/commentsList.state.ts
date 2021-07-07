import { Comments } from '../../interface/comments';

export interface CommentsState {
  comments: Comments[],
}

export const InitialCommentsState: CommentsState = {
  comments: [],
}
