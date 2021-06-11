import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/store/state/app.state';
import { OpenSession } from 'src/app/store/actions/auth.actions';
import { LogIn } from 'src/app/store/actions/users.actions';
import { selectedAuth } from 'src/app/store/selectors/auth.selectors';
import { GetAuthUserId } from 'src/app/store/actions/authUsers.actions';
import { selectedUser } from 'src/app/store/selectors/users.selectors';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
})
export class LogInFormComponent implements OnInit {
  logInForm: FormGroup;
  logInMessage: string;

  constructor(private store: Store<AppState>, private router: Router) {
    this.logInForm = new FormGroup({
      "login": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required])
    })
  }

  ngOnInit() {
  }

  submit() {
    const user = {
      login: this.logInForm.value.login,
      password: this.logInForm.value.password
    };

    try {
      this.store.dispatch(new LogIn(user));

      this.store.pipe(select(selectedAuth)).subscribe(isAuth => {
        if(isAuth) {
          this.logInForm.reset();
          this.router.navigate(['../']);
        } else {
          this.logInMessage = `Error: Login failed`;
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
}
