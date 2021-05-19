import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserSessionService } from './services/user-session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'shortUrl';
  isAuthorized: boolean;
  private subscription: Subscription;

  constructor(private httpService: UserSessionService, private router: Router) {
    this.httpService.checkSession();
  }

  ngOnInit() {
    this.subscription = this.httpService.getIsAut().subscribe(value => {
      this.isAuthorized = value;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logOut() {
    this.httpService.removeSession().subscribe((_data) => {
      this.router.navigate(['/']);
    });

    this.httpService.emitIsAut(false)
  }
}
