import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogInServiceService } from './../../services/log-in-service.service';
import { AppState } from 'src/app/store/state/app.state';
import { OpenSession } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css'],
  providers: [LogInServiceService]
})
export class LogInFormComponent implements OnInit {
  logInForm: FormGroup;
  logInMessage: string;

  constructor(private logInServiceService: LogInServiceService, private store: Store<AppState>, private router: Router) {
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

    this.logInServiceService.logIn(user).subscribe(
      (_data) => {
        this.logInForm.reset();
        this.router.navigate(['../']);
        this.store.dispatch(new OpenSession());
      },
      (error) => {
        this.logInMessage = `Error: Login failed`;
        console.log(error);
      }
    )
  }
}
