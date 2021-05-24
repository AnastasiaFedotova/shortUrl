import { Action } from '@ngrx/store';
import { Users } from 'src/app/interface/users';

export enum EUsersActions {
  AddUser = '[User] add user',
  AddUserSuccess = '[User] add success user',
  LogIn = '[User] log in',
  LogInSuccess = '[User] log in success',
}

export class AddUser implements Action {
  public readonly type = EUsersActions.AddUser;
  constructor(public user: Users) { }
}

export class AddUserSuccess implements Action {
  public readonly type = EUsersActions.AddUserSuccess;
  constructor(public payload: boolean, public user: null) { }
}

export class LogIn implements Action {
  public readonly type = EUsersActions.LogIn;
  constructor(public user: Users) { }
}

export class LogInSuccess implements Action {
  public readonly type = EUsersActions.LogInSuccess;
  constructor(public payload: boolean, public user: null) { }
}

export type UsersActions = AddUser | AddUserSuccess | LogIn | LogInSuccess;
