import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { OpenSession } from 'src/app/store/actions/auth.actions';
import { AddUser } from 'src/app/store/actions/users.actions';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-user-regestrarion-form',
  templateUrl: './user-regestrarion-form.component.html',
  styleUrls: ['./user-regestrarion-form.component.css'],
  providers: [UserRegistrationService]
})

export class UserRegestrarionFormComponent implements OnInit {
  registrationForm: FormGroup;
  registrationMessage: string;
  matchPasswords: (control: FormControl) => { [s: string]: boolean };
  isValidPassword: (control: FormControl) => { [s: string]: boolean };

  constructor(private store: Store<AppState>, private router: Router) {
    this.isValidPassword = (control) => {
      const minPasswordLength = 4;
      try {
        if (control.value.length > minPasswordLength) {
          return null;
        } else {
          throw new Error();
        };
      } catch (_err) {
        return { "valid": true };
      }

    }

    this.matchPasswords = (control) => {
      try {
        if (control.value === this.registrationForm.value.password) {
          return null;
        } else {
          throw new Error();
        }
      } catch (_err) {
        return { "match": true };
      }
    }

    this.registrationForm = new FormGroup({
      'login': new FormControl("", [Validators.required]),
      'password': new FormControl("", [Validators.required, this.isValidPassword]),
      'verification': new FormControl("", [Validators.required, this.matchPasswords])
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const user = {
      login: this.registrationForm.value.login,
      password: this.registrationForm.value.password
    };

    try {
      this.store.dispatch(new AddUser(user));
      this.registrationForm.reset();
      this.router.navigate(['../']);
      this.store.dispatch(new OpenSession(true));
    } catch (error) {
      this.registrationMessage = `Error: registration was not successful`;
      console.log(error);
    };
  }
}
