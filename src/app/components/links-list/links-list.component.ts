import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ShortLinks } from 'src/app/interface/shortLinks';
import { AppState } from './../../store/state/app.state';
import { GetUsersLinks } from 'src/app/store/actions/usersLinkList.actions';
import { selectUsersLinksList } from 'src/app/store/selectors/usersLinkList.selectors';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss']
})
export class LinksListComponent {
  links: ShortLinks[];

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new GetUsersLinks());
  }

  ngOnInit() {
    this.store.pipe(select(selectUsersLinksList)).subscribe(value => {
      this.links = value
    });
  }
}
