import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { updateLinks } from 'src/app/interface/links';
import { ShortLinks } from 'src/app/interface/shortLinks';
import { AppState } from 'src/app/store/state/app.state';
import { ChangedNameLink } from 'src/app/store/actions/changedShortlinks.actions';
import { selectedChangedShortLink } from 'src/app/store/selectors/changedShortLinks.selectors';
import { environment } from './../../../environments/environment';
import { selectGettedUser } from 'src/app/store/selectors/gettedUser.selectors';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.scss']
})
export class LinkFormComponent implements OnInit {
  @Input() link: ShortLinks;
  linkForm: FormGroup;
  isChange: boolean = false;
  author: string;
  errorMessage: string;
  links: ShortLinks[];
  linkUrl: string;
  tags: string[];
  serverUrl: string = environment.serverUrl;
  constructor(private store: Store<AppState>) {
    this.linkForm = new FormGroup({
      'link': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
    });

    this.store.pipe(select(selectGettedUser)).subscribe(user => {
      this.author = user.login;
    })
  }

  startChangeLinks() {
    this.isChange = true;
  }

  changeLink(link) {
    const newLink: updateLinks = {
      shortUrl: link.short_url,
      customUrl: this.linkForm.value.link
    }

    try {
      this.store.dispatch(new ChangedNameLink(newLink));
      this.store.pipe(select(selectedChangedShortLink)).subscribe(value => {
        if (value) {
          this.linkUrl = value;
          this.isChange = false;
        }
      });
    } catch (error) {
      this.errorMessage = 'error in change';
      this.isChange = true;
      console.log(error);
    }
  }

  cancel() {
    this.isChange = false;
  }

  ngOnInit(): void {
    this.linkUrl = this.link.short_url;
    this.tags = this.link.tag?.split(", ");
  }
}
