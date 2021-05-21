import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RemoveSession, CheckAuth } from './store/actions/auth.actions';
import { selectedAuth } from './store/selectors/auth.selectors';
import { AppState } from './store/state/app.state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'shortUrl';
  isAuthorized: boolean;

  constructor(private store: Store<AppState>, private router: Router) {
    this.store.dispatch(new CheckAuth())
  }

  ngOnInit() {
    this.store.pipe(select(selectedAuth)).subscribe(val => {
      this.isAuthorized = val;
    })
  }

  logOut() {
    this.store.dispatch(new RemoveSession());
    this.router.navigate(['/']);
  }
}
