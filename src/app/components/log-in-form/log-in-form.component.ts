import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/store/state/app.state';
import { OpenSession } from 'src/app/store/actions/auth.actions';
import { LogIn } from 'src/app/store/actions/users.actions';

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
      this.logInForm.reset();
      this.router.navigate(['../']);
      this.store.dispatch(new OpenSession(true));
    } catch (error) {
      this.logInMessage = `Error: Login failed`;
      console.log(error);
    }
  }
}
