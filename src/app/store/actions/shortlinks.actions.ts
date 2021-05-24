import { Action } from '@ngrx/store';
import { Links, updateLinks } from 'src/app/interface/links';
import { ShortLinks } from 'src/app/interface/shortLinks';

export enum EShortLinksActions {
  AddLink = '[ShortLink] add link',
  AddLinkrSuccess = '[ShortLink] add success link',
  ChangeNameLink = '[ShortLink] change link',
  ChangeNameLinkSuccses = '[ShortLink] change success link',
}

export class AddLink implements Action {
  public readonly type = EShortLinksActions.AddLink;
  constructor(public link: Links) { }
}

export class AddLinkSuccess implements Action {
  public readonly type = EShortLinksActions.AddLinkrSuccess;
  constructor(public payload: ShortLinks, public link: null) { }
}

export class ChangeNameLink implements Action {
  public readonly type = EShortLinksActions.ChangeNameLink;
  constructor(public link: updateLinks) { }
}

export class ChangeNameLinkSuccses implements Action {
  public readonly type = EShortLinksActions.ChangeNameLinkSuccses;
  constructor(public payload: string, public link: null) { }
}

export type ShortLinksActions = AddLink | AddLinkSuccess | ChangeNameLink | ChangeNameLinkSuccses;
