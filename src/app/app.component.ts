import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserSessionService } from './services/user-session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'shortUrl';
  isAuthorized: boolean = this.httpService.isAut;

  constructor(private httpService: UserSessionService, private router: Router) {
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

  ngOnInit() {
  }

  logOut() {
    this.httpService.removeSession();
    this.isAuthorized = false;
    this.httpService.isAut = false;
    this.router.navigate(['/']);
  }
}
