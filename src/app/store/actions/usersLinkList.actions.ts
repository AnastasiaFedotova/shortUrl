import { Action } from '@ngrx/store';
import { ShortLinks } from 'src/app/interface/shortLinks';

export enum EUsersLinksActions {
  GetUsersLinks = '[User] Get Links',
  GetUsersLinksSuccess = '[User] Get Success Links'
}

export class GetUsersLinks implements Action {
  public readonly type = EUsersLinksActions.GetUsersLinks
}

export class GetUsersLinksSuccess implements Action {
  public readonly type = EUsersLinksActions.GetUsersLinksSuccess;
  constructor(public payload: ShortLinks[]) { }
}

export type UsersLinksActions = GetUsersLinks | GetUsersLinksSuccess;
