import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { AddLink } from 'src/app/store/actions/addedShortlinks.actions';
import { selectedAddedShortLink } from 'src/app/store/selectors/addedShortLinks.selectors';

@Component({
  selector: 'app-shortener-url',
  templateUrl: './shortener-url.component.html',
  styleUrls: ['./shortener-url.component.css']
})
export class ShortenerUrlComponent implements OnInit {
  shortenerForm: FormGroup;
  shortLink: string;
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
