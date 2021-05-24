import { Action } from '@ngrx/store';
import { Links } from 'src/app/interface/links';
import { ShortLinks } from 'src/app/interface/shortLinks';

export enum EAddedShortLinksActions {
  AddLink = '[ShortLink] add link',
  AddLinkrSuccess = '[ShortLink] add success link'
}

export class AddLink implements Action {
  public readonly type = EAddedShortLinksActions.AddLink;
  constructor(public link: Links) { }
}

export class AddLinkSuccess implements Action {
  public readonly type = EAddedShortLinksActions.AddLinkrSuccess;
  constructor(public payload: ShortLinks, public link: null) { }
}

export type AddedShortLinksActions = AddLink | AddLinkSuccess;
