import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition, keyframes, query, animateChild, group } from '@angular/animations';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { AddLink } from 'src/app/store/actions/addedShortlinks.actions';
import { selectedAddedShortLink } from 'src/app/store/selectors/addedShortLinks.selectors';
import { environment } from './../../../environments/environment';

const animationSetting = '0.4s ease-in';

@Component({
  selector: 'app-shortener-url',
  templateUrl: './shortener-url.component.html',
  styleUrls: ['./shortener-url.component.scss'],
  animations: [
    trigger('positionform', [
      state('left', style({
        transform: 'translate(35%, 0)'
      })),
      state('right', style({
        transform: 'translate(-50%, 0)'
      })),
      state('middle', style({
        transform: 'translate(0, 0)'
      })),
      transition('left <=> right', [
        group([
          animate(animationSetting),
          query('@positioninput', [
            animateChild()
          ])
        ])
      ]),
      transition('left <=> middle, middle <=> right', [
        group([
          animate(animationSetting),
          query('@positioninput', [
            animateChild()
          ])
        ])
      ])
    ]),

    trigger('positioninput', [
      state('left', style({
        textAlign: 'right'
      })),
      state('right', style({
        textAlign: 'left'
      })),
      state('middle', style({
        textAlign: 'center'
      })),
      transition('right => left', [
        animate(animationSetting, keyframes([
          style({padding: '0 0 0 0'}),
          style({padding: '0 0 0 40%'})
        ]))
      ]),

      transition('left => right', [
        animate(animationSetting, keyframes([
          style({padding: '0 15% 0 0'}),
          style({padding: '0 60% 0 0'})
        ]))
      ]),

      transition('left => middle', [
        animate(animationSetting, keyframes([
          style({padding: '0 30% 0 0'}),
          style({padding: '0 40% 0 0'})
        ]))
      ]),

      transition('middle => left', [
        animate(animationSetting, keyframes([
          style({padding: '0 0 0 20%'}),
          style({padding: '0 0 0 30%'})
        ]))
      ]),

      transition('middle => right', [
        animate(animationSetting, keyframes([
          style({padding: '0 0 0 0'}),
          style({padding: '0 30% 0 0'})
        ]))
      ]),

      transition('right => middle', [
        animate(animationSetting, keyframes([
          style({padding: '0 0 0 0'}),
          style({padding: '0 0 0 20%'})
        ]))
      ]),
    ])
  ],
})
export class ShortenerUrlComponent implements OnInit {
  shortenerForm: FormGroup;
  shortLink: string;
  serverUrl: string = environment.serverUrl;
  position: string = 'middle';
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
  }

  toLeft() {
    this.position = 'left';
  }

  toMiddle() {
    this.position = 'middle';
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
