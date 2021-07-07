import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserSessionService } from './../../services/user-session.service';
import { EGettedAuthUserIdActions, GetAuthUserId } from './../actions/authUsers.actions';

@Injectable({ providedIn: "root" })
export class AuthUserIdEffect {
  constructor(private actions$: Actions, private authService: UserSessionService) { }

  getAuthUserId$ = createEffect(() => this.actions$.pipe(
    ofType<GetAuthUserId>(EGettedAuthUserIdActions.GetAuthUserId),
    mergeMap(() => this.authService.checkSession()
      .pipe(
        map(userId => ({ type: EGettedAuthUserIdActions.GetAuthUserIdSuccess, payload: userId })),
      )),
    catchError(err => {
      return throwError(err);
    })
  )
  );
}
