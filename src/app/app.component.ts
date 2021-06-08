import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { RemoveSession, CheckAuth } from './store/actions/auth.actions';
import { GetAuthUserId } from './store/actions/authUsers.actions';
import { Users } from './interface/users';
import { selectedAuth } from './store/selectors/auth.selectors';
import { selectGettedUser } from './store/selectors/gettedUser.selectors';
import { AppState } from './store/state/app.state';
import { GetUser } from './store/actions/gettedUser.actions';
import { selectedAuthUserId } from './store/selectors/authUsers.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'shortUrl';
  isAuthorized: boolean;
  user: Users = null;
  isOpenWindow: boolean = false;

  constructor(private store: Store<AppState>, private router: Router) {
    this.store.dispatch(new CheckAuth());
    this.store.dispatch(new GetAuthUserId());
  }

  ngOnInit() {
    this.store.pipe(select(selectedAuth)).subscribe(val => {
      this.isAuthorized = val;
    })

    this.store.pipe(select(selectedAuthUserId)).subscribe(id => {
      if (id) this.store.dispatch(new GetUser(id));
    })

    this.store.pipe(select(selectGettedUser)).subscribe(user => {
      this.user = user;
    })
  }

  isOpenModalWindow(open: boolean) {
    if(open) this.router.navigate(['/logIn']);
    else this.router.navigate(['/']);
    this.isOpenWindow = open;
  }

  logOut() {
    this.store.dispatch(new RemoveSession(false));
    this.isAuthorized = false;
    this.router.navigate(['/']);
  }
}
