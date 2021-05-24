import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ShortLinks } from 'src/app/interface/shortLinks';
import { AppState } from './../../store/state/app.state';
import { GetLinks } from 'src/app/store/actions/links.actions';
import { selectLinksList } from 'src/app/store/selectors/links.selectors';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.css']
})
export class LinksListComponent {
  links: ShortLinks[];

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new GetLinks());
  }

  ngOnInit() {
    this.store.pipe(select(selectLinksList)).subscribe(value => this.links = value);
  }
}
