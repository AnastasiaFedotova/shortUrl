import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { environment } from './../../../environments/environment';
import { ShortLinks } from 'src/app/interface/shortLinks';
import { GetLinks } from 'src/app/store/actions/linkList.actions';
import { selectLinksList } from 'src/app/store/selectors/linkList.selectors';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-link-page',
  templateUrl: './link-page.component.html',
  styleUrls: ['./link-page.component.scss']
})
export class LinkPageComponent implements OnInit {
  linksId: string;
  links: ShortLinks[];
  link: ShortLinks;
  serverUrl: string = environment.serverUrl;
  subscription: Subscription;
  tags: {};
  constructor(private activateRoute: ActivatedRoute, private store: Store<AppState>) {
    this.subscription = this.activateRoute.params.subscribe((params) => this.linksId = params['id']);
    this.store.dispatch(new GetLinks());
  }

  ngOnInit() {
    this.store.pipe(select(selectLinksList)).subscribe(value => {
      this.links = value.filter(elem => elem.id == this.linksId);
      this.tags = this.links?.map(link => link.tag);
      this.link = this.links[0];
    });
  }
}
