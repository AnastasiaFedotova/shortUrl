import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { AddLink } from 'src/app/store/actions/addedShortlinks.actions';
import { selectedAddedShortLink } from 'src/app/store/selectors/addedShortLinks.selectors';
import { environment } from './../../../environments/environment';
import formAnimation from './../../styles/animation/shortenerForm';

@Component({
  selector: 'app-shortener-url',
  templateUrl: './shortener-url.component.html',
  styleUrls: ['./shortener-url.component.scss'],
  animations: formAnimation
})

export class ShortenerUrlComponent implements AfterViewInit {
  @ViewChild('shortenerInput') shortenerInput;
  @ViewChild('shortenerBtn') shortenerBtn;
  endIndent: number = 0;
  startIndent: number = 0;
  middleIndent: number = 0;
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

  ngAfterViewInit(): void {
    const indentBetweenElement = 30;
    let input = this.shortenerInput.nativeElement;
    let button = this.shortenerBtn.nativeElement;

    this.endIndent = input.clientWidth - button.clientWidth - indentBetweenElement;
    this.middleIndent = this.endIndent / 2;
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
