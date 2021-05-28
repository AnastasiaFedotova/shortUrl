import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-links-tag-page',
  templateUrl: './links-tag-page.component.html',
  styleUrls: ['./links-tag-page.component.css']
})
export class LinksTagPageComponent implements OnInit {
  tag: string;
  subscription: Subscription;
  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = this.activateRoute.params.subscribe((params) => this.tag = params['tag']);
  }

  ngOnInit() {
  }
}
