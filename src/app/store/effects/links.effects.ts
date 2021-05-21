import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserSessionService } from './../../services/user-session.service';
import { ELinksActions, GetLinks } from './../actions/links.actions';

@Injectable({ providedIn: "root" })
export class LinksEffect {
  constructor(private actions$: Actions, private userService: UserSessionService) { }

  getLinks$ = createEffect(() => this.actions$.pipe(
    ofType<GetLinks>(ELinksActions.GetLinks),
    mergeMap(() => this.userService.readUserList()
      .pipe(
        map(links => ({ type: ELinksActions.GetLinksSuccess, payload: links })),
        catchError(() => EMPTY)
      ))
  )
  );
}
