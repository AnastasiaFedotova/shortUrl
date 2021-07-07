import { Action } from '@ngrx/store';
import { Users } from 'src/app/interface/users';

export enum EGettedUsersActions {
  GetUser = '[User] get user',
  GetUserSuccess = '[User] get success user'
}

export class GetUser implements Action {
  public readonly type = EGettedUsersActions.GetUser;
  constructor(public id: string) { }
}

export class GetUserSuccess implements Action {
  public readonly type = EGettedUsersActions.GetUserSuccess;
  constructor(public payload: Users, public id: null) { }
}

export type GettedUsersActions = GetUser | GetUserSuccess;
