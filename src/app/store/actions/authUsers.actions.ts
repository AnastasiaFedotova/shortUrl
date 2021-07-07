import { Action } from '@ngrx/store';

export enum EGettedAuthUserIdActions {
  GetAuthUserId = '[User] get auth user id',
  GetAuthUserIdSuccess = '[User] get success auth user id'
}

export class GetAuthUserId implements Action {
  public readonly type = EGettedAuthUserIdActions.GetAuthUserId;
}

export class GetAuthUserIdSuccess implements Action {
  public readonly type = EGettedAuthUserIdActions.GetAuthUserIdSuccess;
  constructor(public payload: string) { }
}

export type GettedUsersActions = GetAuthUserId | GetAuthUserIdSuccess;
