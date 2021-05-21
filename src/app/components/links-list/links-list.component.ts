import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShortLinks } from 'src/app/interface/shortLinks';
import { AppState } from './../../store/state/app.state';
import { UserSessionService } from 'src/app/services/user-session.service';
import { ELinksActions, GetLinks } from 'src/app/store/actions/links.actions';
import { selectLinksList } from 'src/app/store/selectors/links.selectors';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.css'],
  providers: [UserSessionService]
})
export class LinksListComponent {
  links: Observable<ShortLinks[]> = this.store.pipe(select(selectLinksList));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetLinks());
  }
}
    /* this.userSessionService.readUserList().subscribe(
(data) => {
this.links = data;
},
(err) => {
console.log(err);
}
)
}

ngOnInit(): void { }*/
