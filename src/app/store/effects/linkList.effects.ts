import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserSessionService } from '../../services/user-session.service';
import { ELinksActions, GetLinks, GetTagsLinks } from '../actions/linkList.actions';

@Injectable({ providedIn: "root" })
export class LinksEffect {
  constructor(private actions$: Actions, private userService: UserSessionService) { }

  getLinks$ = createEffect(() => this.actions$.pipe(
    ofType<GetLinks>(ELinksActions.GetLinks),
    mergeMap(() => this.userService.readLinksList()
      .pipe(
        map(links => ({ type: ELinksActions.GetLinksSuccess, payload: links }))
      )),
    catchError(err => {
      return throwError(err);
    })
  )
  );

  getLinksByTag$ = createEffect(() => this.actions$.pipe(
    ofType<GetTagsLinks>(ELinksActions.GetTagsLinks),
    mergeMap((action) => this.userService.readTagsLinksList(action.tag)
      .pipe(
        map(links => ({ type: ELinksActions.GetTagsLinksSuccess, payload: links }))
      )),
    catchError(err => {
      return throwError(err);
    })
  )
  );
}
