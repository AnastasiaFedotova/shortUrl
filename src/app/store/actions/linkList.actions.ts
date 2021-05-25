import { Action } from '@ngrx/store';
import { ShortLinks } from 'src/app/interface/shortLinks';

export enum ELinksActions {
  GetLinks = '[Links] Get Links',
  GetLinksSuccess = '[Links] Get Success Links'
}

export class GetLinks implements Action {
  public readonly type = ELinksActions.GetLinks
}

export class GetLinksSuccess implements Action {
  public readonly type = ELinksActions.GetLinksSuccess;
  constructor(public payload: ShortLinks[]) { }
}

export type LinksActions = GetLinks | GetLinksSuccess;
