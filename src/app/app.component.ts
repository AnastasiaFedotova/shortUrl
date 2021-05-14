import { Component } from '@angular/core';
import { UserSessionService } from './services/user-session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserSessionService]
})

export class AppComponent {
  title: string = 'shortUrl';
  isAuthorized: boolean = false;

  constructor(private httpService: UserSessionService) { }

  ngOnInit() {
    this.isUser()
  }

  isUser() {
    this.httpService.checkSession().subscribe(
      (data) => {
        debugger
        if (data) this.isAuthorized = true;
        else this.isAuthorized = false;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  logOut() {
    this.httpService.removeSession();
    this.isAuthorized = false;
  }
}
