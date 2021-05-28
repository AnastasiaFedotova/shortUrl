import { Action } from '@ngrx/store';
import { ShortLinks } from 'src/app/interface/shortLinks';

export enum ELinksActions {
  GetLinks = '[Links] Get Links',
  GetTagsLinks = '[Links] Get Tags Links',
  GetLinksSuccess = '[Links] Get Success Links',
  GetTagsLinksSuccess = '[Links] Get Success Tags Links'
}

export class GetLinks implements Action {
  public readonly type = ELinksActions.GetLinks;
}

export class GetTagsLinks implements Action {
  public readonly type = ELinksActions.GetTagsLinks;
  constructor(public tag: string) { }
}

export class GetLinksSuccess implements Action {
  public readonly type = ELinksActions.GetLinksSuccess;
  constructor(public payload: ShortLinks[]) { }
}

export class GeTagsLinksSuccess implements Action {
  public readonly type = ELinksActions.GetTagsLinksSuccess;
  constructor(public payload: ShortLinks[]) { }
}

export type LinksActions = GetLinks | GetTagsLinks | GetLinksSuccess | GeTagsLinksSuccess;
