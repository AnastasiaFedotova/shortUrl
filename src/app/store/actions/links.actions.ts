import { Action } from '@ngrx/store';
import { ShortLinks } from 'src/app/interface/shortLinks';

export enum ELinksActions {
  GetLinks = '[User] Get Links',
  GetLinksSuccess = '[User] Get Success Links',
  //AddUser = '[User] Add User',
  //AddUserSuccess = '[User] Add User',
}

export class GetLinks implements Action {
  public readonly type = ELinksActions.GetLinks
}

export class GetLinksSuccess implements Action {
  public readonly type = ELinksActions.GetLinksSuccess;
  constructor(public payload: ShortLinks[]) { }
}

/*export class AddUser implements Action {
  public readonly type = EUserActions.AddUser;
  constructor(public payload: number) { }
}

export class AddUserSuccess implements Action {
  public readonly type = EUserActions.AddUserSuccess;
  constructor(public payload: Users) { };
}*/

export type LinksActions = GetLinks | GetLinksSuccess;
