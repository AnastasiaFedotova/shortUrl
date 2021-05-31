import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ShortLinks } from 'src/app/interface/shortLinks';
import { GetTagsLinks } from 'src/app/store/actions/linkList.actions';
import { selectLinksList } from 'src/app/store/selectors/linkList.selectors';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-links-tag-page',
  templateUrl: './links-tag-page.component.html',
  styleUrls: ['./links-tag-page.component.css']
})
export class LinksTagPageComponent implements OnInit {
  tag: string;
  subscription: Subscription;
  links: ShortLinks[];
  constructor(private activateRoute: ActivatedRoute, private store: Store<AppState>) {
    this.subscription = this.activateRoute.params.subscribe((params) => this.tag = params['tag']);
    this.store.dispatch(new GetTagsLinks(this.tag));
  }

  ngOnInit() {
    this.store.pipe(select(selectLinksList)).subscribe(value => {
      this.links = value;
    });
  }
}
