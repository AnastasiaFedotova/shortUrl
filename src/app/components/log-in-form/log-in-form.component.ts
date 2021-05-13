import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogInServiceService } from './../../services/log-in-service.service';
import { Users } from './../../interface/users';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css'],
  providers: [LogInServiceService]
})
export class LogInFormComponent implements OnInit {
  logInForm: FormGroup;
  logInMessage: string;

  constructor(private httpService: LogInServiceService) {
    this.logInForm = new FormGroup({
      "login": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  submit() {
    const user = {
      login: this.logInForm.value.login,
      password: this.logInForm.value.password
    };

    this.httpService.logIn(user).subscribe(
      (_data) => {
        this.logInMessage = `You are logged in`;
        this.logInForm.reset();
      },
      (error) => {
        this.logInMessage = `Error: Login failed`;
        console.log(error);
      }
    )
  }
}
