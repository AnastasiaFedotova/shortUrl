import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { LogInServiceService } from 'src/app/services/log-in-service.service';
import { UserRegistrationService } from './../../services/user-registration.service';
import { EUsersActions, AddUser, LogIn } from './../actions/users.actions';

@Injectable({ providedIn: "root" })
export class UsersEffect {
  constructor(private actions$: Actions, private usersService: UserRegistrationService, private logInService: LogInServiceService) { }

  addUser$ = createEffect(() => this.actions$.pipe(
    ofType<AddUser>(EUsersActions.AddUser),
    mergeMap((action) => this.usersService.addUser(action.user)
      .pipe(
        map(isSuccsess => ({ type: EUsersActions.AddUserSuccess, payload: isSuccsess }))
      ))
  )
  );

  logIn$ = createEffect(() => this.actions$.pipe(
    ofType<LogIn>(EUsersActions.LogIn),
    mergeMap((action) => this.logInService.logIn(action.user)
      .pipe(
        map(isSuccsess => ({ type: EUsersActions.LogInSuccess, payload: isSuccsess }))
      ))
  )
  );
}
