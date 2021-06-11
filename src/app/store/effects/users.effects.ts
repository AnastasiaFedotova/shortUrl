import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { LogInServiceService } from 'src/app/services/log-in-service.service';
import { OpenSession } from '../actions/auth.actions';
import { UserRegistrationService } from './../../services/user-registration.service';
import { EUsersActions, AddUser, LogIn } from './../actions/users.actions';
import { GetAuthUserId } from '../actions/authUsers.actions';

@Injectable({ providedIn: "root" })
export class UsersEffect {
  constructor(private actions$: Actions, private usersService: UserRegistrationService, private logInService: LogInServiceService) { }

  addUser$ = createEffect(() => this.actions$.pipe(
    ofType<AddUser>(EUsersActions.AddUser),
    switchMap((action) => this.usersService.addUser(action.user)
      .pipe(
        map(isSuccsess => ({ type: EUsersActions.AddUserSuccess, payload: isSuccsess }))
      )),
      switchMap(res => [
        new OpenSession(!!res.payload),
        new GetAuthUserId()
      ]),
      catchError(err => {
        return throwError(err);
      })
  )
  );

  logIn$ = createEffect(() => this.actions$.pipe(
    ofType<LogIn>(EUsersActions.LogIn),
    switchMap((action) => this.logInService.logIn(action.user)
      .pipe(
        map(isSuccsess => ({ type: EUsersActions.LogInSuccess, payload: isSuccsess }))
      )),
    switchMap(res => [
      new OpenSession(!!res.payload),
      new GetAuthUserId()
    ]),
    catchError(err => {
      return throwError(err);
    })
  )
  );
}
