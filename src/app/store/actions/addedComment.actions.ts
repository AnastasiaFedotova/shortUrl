import { Action } from '@ngrx/store';
import { Comments } from 'src/app/interface/comments';

export enum EAddedCommentActions {
  AddComment = '[Comment] add comment',
  AddCommentSuccess = '[Comment] add success comment'
}

export class AddComment implements Action {
  public readonly type = EAddedCommentActions.AddComment;
  constructor(public comment: Comments) { }
}

export class AddCommentSuccess implements Action {
  public readonly type = EAddedCommentActions.AddCommentSuccess;
  constructor(public payload: string, public comment: null) { }
}

export type AddedCommentActions = AddComment | AddCommentSuccess;
