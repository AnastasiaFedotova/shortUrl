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

  constructor(private userSessionService: UserSessionService, private router: Router) {
    this.userSessionService.checkSession();
  }

  ngOnInit() {
    this.subscription = this.userSessionService.getIsAut().subscribe(value => {
      this.isAuthorized = value;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logOut() {
    this.userSessionService.removeSession().subscribe((_data) => {
      this.router.navigate(['/']);
    });

    this.userSessionService.emitIsAut(false)
  }
}
