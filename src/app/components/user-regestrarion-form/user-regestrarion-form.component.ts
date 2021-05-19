import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Users } from 'src/app/interface/users';
import { UserSessionService } from 'src/app/services/user-session.service';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-regestrarion-form',
  templateUrl: './user-regestrarion-form.component.html',
  styleUrls: ['./user-regestrarion-form.component.css'],
  providers: [UserRegistrationService]
})

export class UserRegestrarionFormComponent implements OnInit {
  registrationForm: FormGroup;
  registrationMessage: string;
  matchPasswords;
  isValidPassword;

  constructor(private userRegistrationService: UserRegistrationService, private userSessionService: UserSessionService, private router: Router) {
    this.isValidPassword = (control: FormControl): { [s: string]: boolean } => {
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

    this.matchPasswords = (control: FormControl): { [s: string]: boolean } => {
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

    this.userRegistrationService.addUser(user).subscribe(
      (_data) => {
        this.registrationForm.reset();
        this.router.navigate(['../']);
        this.userSessionService.emitIsAut(true);
      },
      error => {
        this.registrationMessage = `Error: registration was not successful`;
        console.log(error);
      }
    );
  }
}
