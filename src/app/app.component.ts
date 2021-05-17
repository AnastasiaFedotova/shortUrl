import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private httpService: UserSessionService, private router: Router) {
  }

  ngOnInit() {
    this.httpService.checkSession().subscribe(
      (data) => {
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
    this.router.navigate(['']);
  }
}
