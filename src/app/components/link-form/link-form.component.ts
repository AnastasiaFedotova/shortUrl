import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { updateLinks } from 'src/app/interface/links';
import { ShortLinks } from 'src/app/interface/shortLinks';
import { AppState } from 'src/app/store/state/app.state';
import { ChangeNameLink } from 'src/app/store/actions/shortlinks.actions';
import { selectedShortLink } from 'src/app/store/selectors/shortLinks.selectors';

@Component({
  selector: 'app-link-form',
  templateUrl: './link-form.component.html',
  styleUrls: ['./link-form.component.css']
})
export class LinkFormComponent implements OnInit {
  @Input() link: ShortLinks;
  linkForm: FormGroup;
  isChange: boolean = false;
  errorMessage: string;
  linkUrl: string
  constructor(private store: Store<AppState>) {
    this.linkForm = new FormGroup({
      'link': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
    });
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
      this.store.dispatch(new ChangeNameLink(newLink));
      this.store.pipe(select(selectedShortLink)).subscribe(value => {
        if (value) {
          this.linkUrl = typeof value === 'string' ? value : '';
          this.isChange = false;
        }
      });
    } catch (error) {
      this.errorMessage = 'error in change';
      this.isChange = true;
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.linkUrl = this.link.short_url;
  }
}
