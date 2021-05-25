import { Action } from '@ngrx/store';
import { ShortLinks } from 'src/app/interface/shortLinks';

export enum EGettedShortLinksActions {
  GetLink = '[ShortLink] get link',
  GetLinkrSuccess = '[ShortLink] get success link'
}

export class GetLink implements Action {
  public readonly type = EGettedShortLinksActions.GetLink;
  constructor(public id: string) { }
}

export class GetLinkSuccess implements Action {
  public readonly type = EGettedShortLinksActions.GetLinkrSuccess;
  constructor(public payload: ShortLinks, public id: null) { }
}

export type GettedShortLinksActions = GetLink | GetLinkSuccess;
