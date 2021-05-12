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
  registrationrForm: FormGroup;
  isValidPassword;

  constructor(private httpService: UserRegistrationService) {
    this.isValidPassword = (control: FormControl): { [s: string]: boolean } => {
      try {
        if (control.value === this.registrationrForm.value.password) {
          return null;
        } else {
          throw new Error();
        }
      } catch (_) {
        return { "match": true };
      }
    }

    this.registrationrForm = new FormGroup({
      'login': new FormControl("", [Validators.required]),
      'password': new FormControl("", [Validators.required]),
      'verification': new FormControl("", [Validators.required, this.isValidPassword])
    });
  }

  ngOnInit(): void {
  }

  submit() {
    const user = {
      login: this.registrationrForm.value.login,
      password: this.registrationrForm.value.password
    };

    this.httpService.addUser(user).subscribe(
      (data: Users) => {
        console.log(data)
      },
      error => console.log(error)
    );
  }
}
