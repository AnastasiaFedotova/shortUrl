import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Users } from 'src/app/interface/users';
import { UserRegistrationService } from 'src/app/services/user-registration.service';

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

  constructor(private httpService: UserRegistrationService) {
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

    this.httpService.addUser(user).subscribe(
      (data: Users) => {
        this.registrationMessage = `${data.login}, registration completed successfully`;
        this.registrationForm.reset();
      },
      error => {
        this.registrationMessage = `Error: registration was not successful`;
        console.log(error);
      }
    );
  }
}
