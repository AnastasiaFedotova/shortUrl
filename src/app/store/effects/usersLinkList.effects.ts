import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserSessionService } from '../../services/user-session.service';
import { EUsersLinksActions, UsersLinksActions } from '../actions/usersLinkList.actions';

@Injectable({ providedIn: "root" })
export class UsersLinksEffect {
  constructor(private actions$: Actions, private userService: UserSessionService) { }

  getLinks$ = createEffect(() => this.actions$.pipe(
    ofType<UsersLinksActions>(EUsersLinksActions.GetUsersLinks),
    mergeMap(() => this.userService.readUserLinksList()
      .pipe(
        map(links => ({ type: EUsersLinksActions.GetUsersLinksSuccess, payload: links }))
      )),
    catchError(err => {
      return throwError(err);
    })
  )
  );
}
