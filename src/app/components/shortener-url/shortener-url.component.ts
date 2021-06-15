import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { AddLink } from 'src/app/store/actions/addedShortlinks.actions';
import { selectedAddedShortLink } from 'src/app/store/selectors/addedShortLinks.selectors';
import { environment } from './../../../environments/environment';
import animation from './../../styles/animation/shortenerForm';

@Component({
  selector: 'app-shortener-url',
  templateUrl: './shortener-url.component.html',
  styleUrls: ['./shortener-url.component.scss'],
  animations: animation
})

export class ShortenerUrlComponent implements OnInit {
  shortenerForm: FormGroup;
  shortLink: string;
  serverUrl: string = environment.serverUrl;
  position: string = localStorage.getItem('formPosition') || null;
  error: {
    message: string;
  };
  isValidHttpUrl;

  constructor(private store: Store<AppState>) {
    this.isValidHttpUrl = (control: FormControl): { [s: string]: boolean } => {
      try {
        if (control.value) {
          new URL(control.value);
        }

        this.error = {
          message: null
        };

        return null;
      } catch (_) {
        this.error = {
          message: 'enter url'
        };

        return { 'isUrl': true };
      }
    }

    this.shortenerForm = new FormGroup({
      'url': new FormControl("", [Validators.required, this.isValidHttpUrl]),
      'tags': new FormControl()
    });
  }

  ngOnInit(): void {
  }

  toRight() {
    this.position = 'right';
    localStorage.setItem('formPosition', this.position);
  }

  toLeft() {
    this.position = 'left';
    localStorage.setItem('formPosition', this.position);
  }

  toMiddle() {
    this.position = 'middle';
    localStorage.setItem('formPosition', this.position);
  }

  submit() {
    const link = {
      url: this.shortenerForm.value.url,
      userId: null,
      tags: this.shortenerForm.value.tags?.split(",").map(elem => elem.trim())
    };

    try {
      this.store.dispatch(new AddLink(link));
      this.store.pipe(select(selectedAddedShortLink)).subscribe(value =>
        this.shortLink = value?.short_url || ""
      );
    } catch (err) {
      console.log(err)
    }
  }
}
