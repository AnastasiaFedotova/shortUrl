import { Comments } from 'src/app/interface/comments';

export interface AddedCommentState {
  comment: Comments,
  commentId: string
}

export const InitialAddedCommentState: AddedCommentState = {
  comment: null,
  commentId: ''
}
