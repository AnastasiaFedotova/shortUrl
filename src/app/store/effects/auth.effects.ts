import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserSessionService } from './../../services/user-session.service';
import { EAuthActions, CheckAuth, RemoveSession, OpenSession } from './../actions/auth.actions';

@Injectable({ providedIn: "root" })
export class AuthEffect {
  constructor(private actions$: Actions, private authService: UserSessionService) { }

  checkAuth$ = createEffect(() => this.actions$.pipe(
    ofType<CheckAuth>(EAuthActions.CheckAuth),
    mergeMap(() => this.authService.checkSession()
      .pipe(
        map(isAuth => ({ type: EAuthActions.CheckAuthSuccess, payload: isAuth })),
        catchError(() => EMPTY)
      ))
  )
  );

  removeSession$ = createEffect(() => this.actions$.pipe(
    ofType<RemoveSession>(EAuthActions.RemoveSession),
    mergeMap(() => this.authService.removeSession()
      .pipe(
        map(_data => ({ type: EAuthActions.CheckAuthSuccess, payload: false })),
        catchError(() => EMPTY)
      ))
  )
  );

  openSession$ = createEffect(() => this.actions$.pipe(
    ofType<OpenSession>(EAuthActions.OpenSession),
    map(() => ({ type: EAuthActions.CheckAuthSuccess, payload: true })),
    catchError(() => EMPTY)
  ));
}
