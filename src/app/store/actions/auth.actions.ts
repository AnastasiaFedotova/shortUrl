import { Action } from '@ngrx/store';

export enum EAuthActions {
  CheckAuth = '[Auth] check',
  CheckAuthSuccess = '[Auth] check success',
  RemoveSession = '[Auth] remove session',
  OpenSession = '[Auth] open sessin'
}

export class CheckAuth implements Action {
  public readonly type = EAuthActions.CheckAuth
}

export class CheckAuthSuccess implements Action {
  public readonly type = EAuthActions.CheckAuthSuccess;
  constructor(public payload: boolean) { }
}

export class RemoveSession implements Action {
  public readonly type = EAuthActions.RemoveSession
}

export class OpenSession implements Action {
  public readonly type = EAuthActions.OpenSession
}

export type AuthActions = CheckAuth | CheckAuthSuccess | RemoveSession | OpenSession;
