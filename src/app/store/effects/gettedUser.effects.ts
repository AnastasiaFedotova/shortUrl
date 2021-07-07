import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserRegistrationService } from '../../services/user-registration.service';
import { EGettedUsersActions, GetUser } from '../actions/gettedUser.actions';

@Injectable({ providedIn: "root" })
export class GettedUserEffect {
  constructor(private actions$: Actions, private userService: UserRegistrationService) { }

  getComments$ = createEffect(() => this.actions$.pipe(
    ofType<GetUser>(EGettedUsersActions.GetUser),
    mergeMap((action) => this.userService.findUserById(action.id)
      .pipe(
        map(user => ({ type: EGettedUsersActions.GetUserSuccess, payload: user }))
      )),
    catchError(err => {
      return throwError(err);
    })
  )
  );
}
