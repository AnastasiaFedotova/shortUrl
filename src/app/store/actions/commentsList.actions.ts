import { Action } from '@ngrx/store';
import { Comments } from 'src/app/interface/comments';

export enum ECommentsActions {
  GetComments = '[Comments] Get Comments',
  GetCommentsSuccess = '[Comments] Get Success Comments'
}

export class GetComments implements Action {
  public readonly type = ECommentsActions.GetComments
  constructor(public linksId: string) { }
}

export class GetCommentsSuccess implements Action {
  public readonly type = ECommentsActions.GetCommentsSuccess;
  constructor(public payload: Comments[]) { }
}

export type CommentsActions = GetComments | GetCommentsSuccess;
