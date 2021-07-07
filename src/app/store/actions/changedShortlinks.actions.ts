import { Action } from '@ngrx/store';
import { updateLinks } from 'src/app/interface/links';

export enum EChangedShortLinksActions {
  ChangeNameLink = '[ShortLink] change link',
  ChangeNameLinkSuccses = '[ShortLink] change success link',
}

export class ChangedNameLink implements Action {
  public readonly type = EChangedShortLinksActions.ChangeNameLink;
  constructor(public link: updateLinks) { }
}

export class ChangedNameLinkSuccses implements Action {
  public readonly type = EChangedShortLinksActions.ChangeNameLinkSuccses;
  constructor(public payload: string, public link: null) { }
}

export type ChangedShortLinksActions = ChangedNameLink | ChangedNameLinkSuccses;
