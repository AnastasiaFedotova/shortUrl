import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { environment } from './../../../environments/environment';
import { ShortLinks } from 'src/app/interface/shortLinks';
import { GetLinks } from 'src/app/store/actions/linksList.actions';
import { selectLinksList } from 'src/app/store/selectors/linksList.selectors';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.css']
})
export class LinkPageComponent implements OnInit {
  linksId: string;
  link: ShortLinks;
  serverUrl: string = environment.serverUrl;
  subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute, private store: Store<AppState>) {
    this.subscription = this.activateRoute.params.subscribe((params) => this.linksId = params['id']);
    this.store.dispatch(new GetLinks());
  }

  ngOnInit() {
    this.store.pipe(select(selectLinksList)).subscribe(value => {
      this.link = value.find(elem => elem.id == this.linksId)
    });
  }
}
